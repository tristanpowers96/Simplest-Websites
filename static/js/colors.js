$(function(){
  var bCanPreview = true; // can preview

  // create canvas and context objects
  var canvas = document.getElementById('picker');
  var ctx = canvas.getContext('2d');

  // drawing active image
  var image = new Image();
  image.onload = function () {
      ctx.drawImage(image, 0, 0, image.width, image.height); // draw the image on the canvas
  }

  // select desired colorwheel
  var imageSrc = 'images/colorwheel1.png';
  switch ($(canvas).attr('var')) {
      case '2':
          imageSrc = '/static/images/colorwheel2.png';
          break;
      case '3':
          imageSrc = 'images/colorwheel3.png';
          break;
      case '4':
          imageSrc = 'images/colorwheel4.png';
          break;
      case '5':
          imageSrc = 'images/colorwheel5.png';
          break;
  }
  image.src = imageSrc;

  $('#picker').mousemove(function(e) { // mouse move handler
      if (bCanPreview) {
          // get coordinates of current position
          var canvasOffset = $(canvas).offset();
          var canvasX = Math.floor(e.pageX - canvasOffset.left);
          var canvasY = Math.floor(e.pageY - canvasOffset.top);

          // get current pixel
          var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
          var pixel = imageData.data;

          // update preview color
          var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
          $('#more-colors').css({'background': 'transparent'});
          $('#more-colors').css({'background-color': pixelColor});

          // update controls
          $('#rVal').val(pixel[0]);
          $('#gVal').val(pixel[1]);
          $('#bVal').val(pixel[2]);
          $('#rgbVal').val(pixel[0]+','+pixel[1]+','+pixel[2]);

          var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
          $('#hexVal').val('#' + ('0000' + dColor.toString(16)).substr(-6));
      }
  });
  $('#picker').click(function(e) { // click event handler
      bCanPreview = !bCanPreview;
      $("#colors div").trigger("click");
  });
  $('#more-colors').click(function(e) { // preview click
      $(".colorpicker").css({'top': (e.pageY - $(".colorpicker").outerHeight() - 20), 'left': e.pageX});
      $('.colorpicker').fadeToggle("fast", "swing");
      bCanPreview = true;
  });
});
