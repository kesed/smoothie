var image = $("img.full-size");

image.on('load', function(){
  console.log('Image Loaded');
  image.animate({opacity:1}, 10000);
  console.log('Opacity animation initialized.');
});
