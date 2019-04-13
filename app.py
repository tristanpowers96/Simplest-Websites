from flask import Flask, render_template, url_for, flash, redirect, request, send_from_directory, abort
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager, current_user, login_user, login_required, logout_user
from flask_uploads import UploadSet, IMAGES, configure_uploads
from werkzeug.urls import url_parse
from werkzeug import secure_filename
import os
import logging

app = Flask(__name__)
app.config.from_pyfile('config.py')
login = LoginManager(app)
login.login_view = 'login_view'
CLIENT_ID = '334234312073-hp2gc3m29arf7h8v4r3iohuhocujjucb.apps.googleusercontent.com'

db = SQLAlchemy(app)
migrate = Migrate(app, db)
images = UploadSet('images', IMAGES)
configure_uploads(app, images)

from .forms import LoginForm, RegistrationForm, UploadImageForm
from .models import Image
from .models import Template


@app.route('/login', methods=['GET', 'POST'])
def login_view():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first() or User.query.filter_by(email=form.username.data).first()
        if user is None:
            flash("We have no record of that username or email")
            return redirect(url_for('login_view'))
        elif not user.check_password(form.password.data):
            flash("Incorrect password")
            return redirect(url_for('login_view'))
        login_user(user, remember=form.remember_me.data)
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('index')
        return redirect(next_page)
    return render_template('login.html', form=form)

from google.oauth2 import id_token
from google.auth.transport import requests
@app.route('/google_auth', methods=['GET','POST'])
def google_auth():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    form = LoginForm()
    if request.method == 'POST':
        token = request.form['id_token']
        try:
            idinfo = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)
            app.logger.info(idinfo['iss'])
            if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
                raise ValueError('Wrong issuer.')
            userid = idinfo['sub']
            user = User.query.filter_by(email=idinfo['email']).first()
            app.logger.info(user)
            if user is not None:
                login_user(user, remember=form.remember_me.data)
                next_page = '/'
                return next_page
            else:
                user = User(username=form.username.data, first_name=form.first_name.data, last_name=form.last_name.data, \
                            email=form.email.data, password=form.password.data)
                db.session.add(user)
                db.session.commit()
                flash('Congratulations, you are now a registered user!')
                return redirect(url_for('login_view'))
        except ValueError as e:
            app.logger.error(e)
    return render_template('login.html', form=form)

@app.route('/authenticate', methods=['GET', 'POST'])
def authenticate():
    form = LoginForm()
    if request.method == "POST":
        user = User.query.filter_by(username=form.username.data).first() or User.query.filter_by(email=form.username.data).first()
        if user is None:
            return "We have no record of that username or email"
        else:
            return ""

@app.route('/logout')
def logout():
    logout_user()
    return render_template('logout.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, first_name=form.first_name.data, last_name=form.last_name.data, \
                    email=form.email.data, password=form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Congratulations, you are now a registered user!')
        return redirect(url_for('login_view'))
    return render_template('register.html', title='Register', form=form)


@app.route('/')
def index():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    return render_template("index.html")

@app.route('/features')
def features():
    return render_template("/features/features.html")

@app.route('/features/<name>')
def feature_info(name):
    return render_template("/features/{}.html".format(name))

@app.route("/templates")
def view_templates():
    templates = db.session.query(Template).all()
    return render_template("/template_list.html", templates=templates, Image=Image)

import json
@app.route('/template/<name>/preview')
def template(name):
    return render_template('{}/index.html'.format(name), edit=False)

@app.route('/template/<name>/edit')
@login_required
def edit_template(name):
    return render_template('{}/index.html'.format(name), edit=True)

@app.route('/parse_edits', methods=['POST', 'GET'])
def parse_edits():
    data = request.form.get("html").encode("ascii")
    formatted = str(data).replace("\\n", "\n")
    formatted = formatted.replace("\\", "")
    formatted = formatted[2:len(formatted)-1]
    if not os.path.exists('templates/{}/test.html'.format(current_user.id)):
        os.makedirs("templates/{}".format(current_user.id))
    with open('templates/{}/test.html'.format(current_user.id), "w") as file:
        file.write(formatted)
    return redirect(url_for('dashboard'))

@app.route('/premium_plans')
def premium_plans():
    return render_template("premium_plans.html")


@app.route('/dashboard', methods=['GET', 'POST'])
@login_required
def dashboard():
    form = UploadImageForm()
    if request.method == 'POST':
        if form.validate_on_submit():
            file = request.files['image_file']
            #file.save(os.path.join(app.root_path,'static\\images\\', secure_filename(file.filename)))
            filename = images.save(file)
            url = images.url(filename)
            print(url)
            new_image = Image(image_filename=filename, image_url=url, user=current_user.id)
            db.session.add(new_image)
            db.session.commit()
            flash("{} uploaded".format(filename))
        else:
            flash("Error uploading file")
    return render_template("dashboard/dashboard.html", form=form, Image=Image, Template=Template)
    #return render_template("dashboard.html", form=form, images=db.session.query(Image).filter_by(user=current_user.id).all())

@app.route('/dashboard/<sub>')
@login_required
def dashboard_page(sub):
    form = UploadImageForm()
    return render_template("dashboard/{}.html".format(sub), form=form, Image=Image, Template=Template)

@app.route('/editor')
def editor():
    return render_template('editor.html')

@app.route('/<path:url>')
def file(url):
    return send_from_directory(app.static_folder, url)

from .models import User, Website, Html
@app.shell_context_processor
def make_shell_context():
    return {'db': db, 'User': User, 'Image': Image, 'Template': Template, 'Website': Website, 'Html': Html}

if __name__ == "__main__":
    app.run()
