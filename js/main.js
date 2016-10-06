var image = $("img.full-size");

image.on('load', function(){
  console.log('Image Loaded');
  image.animate({opacity:1}, 1000);
  console.log('Opacity Changed');
});
