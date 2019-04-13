from .app import db, login
from .forms import LoginForm
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class Error(Exception):
    pass

class InsufficientAccessError(Error):
    pass

plan_access = {
    'Free': 0,
    'Upgraded': 1,
    'Premium': 2
}

template_table = db.Table('templates',
    db.Column('template_id', db.Integer, db.ForeignKey('template.id'), primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('website_id', db.Integer, db.ForeignKey('website.id'), primary_key=True),
    db.Column('image_id', db.Integer, db.ForeignKey('image.id', primary_key=True))
)

DEFAULT_PLAN = 'Free'
DEFAULT_ACCESS = 0

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    first_name = db.Column(db.String(64), index=True)
    last_name = db.Column(db.String(64), index=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128))
    plan = db.Column(db.String(32), default=DEFAULT_PLAN, index=True)
    templates = db.relationship('Template', secondary=template_table, lazy='subquery', backref=db.backref('users', lazy=True))
    websites = db.relationship('Website', backref='user', lazy=True)
    access = db.Column(db.Integer, default=DEFAULT_ACCESS, index=True)

    def __init__(self, username, first_name, last_name, email, password, plan=DEFAULT_PLAN, access=DEFAULT_ACCESS):
        self.username = username
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.set_password(password)
        self.plan = plan
        self.access = access

    def add_template(self, Template):
        if self.access >= Template.access:
            self.templates.append(Template)
        else:
            raise InsufficientAccessError

    def add_website(self, Website):
        self.websites.append(Website)

    def upgrade(self, plan):
        self.plan = plan
        self.access = plan_access[plan]

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def is_authenticated(self):
        return True

    def __repr__(self):
        return '<User {}>'.format(self.username)

    @login.user_loader
    def load_user(id):
        return User.query.get(int(id))

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32), default=None, nullable=True)
    url = db.Column(db.String(32), default=None, nullable=True)
    user = db.Column(db.Integer, db.ForeignKey('user.id'))
    access = db.Column(db.Integer, default=DEFAULT_ACCESS, nullable=True)

    def __init__(self, name, url, user=DEFAULT_ACCESS, access=DEFAULT_ACCESS):
        self.name = name
        self.url = url
        self.user = user
        self.access = access

class Template(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32), default='Template', nullable=True)
    preview = db.Column(db.Integer, db.ForeignKey('image.id'))
    images = db.relationship('Image', secondary=template_table, lazy='subquery', backref=db.backref('template', lazy=True))
    parent_website = db.Column(db.Integer, db.ForeignKey('website.id'))
    pages = db.relationship('Html', backref='template', lazy=True)
    access = db.Column(db.Integer, default=DEFAULT_ACCESS, nullable=True)
    owner = db.Column(db.Integer, db.ForeignKey('user.id'), default=DEFAULT_ACCESS, nullable=True)

    def __init__(self, name, preview, access=DEFAULT_ACCESS):
        self.name = name
        self.preview = preview
        self.access = access

    def add_image(self, Image):
        self.images.append(Image)

    def add_page(self, Html):
        self.pages.append(Html)

class Html(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, default=None, nullable=True)
    url = db.Column(db.String, default=None, nullable=True)
    parent_template = db.Column(db.Integer, db.ForeignKey('template.id'))

class Website(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner = db.Column(db.Integer, db.ForeignKey('user.id'), default=DEFAULT_ACCESS, nullable=True)
    name = db.Column(db.String, default=None, nullable=True)
    templates = db.relationship('Template', backref='website', lazy=True)

    def __init__(self, name, owner=DEFAULT_ACCESS):
        self.owner = owner
        self.name = name

    def add_template(self, Template):
        self.templates.append(Template)

    def add_page(self, Html):
        self.pages.append(Html)
