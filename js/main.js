var image = $("#test");

image.on('load', function(){
  console.log('Loaded');
  image.animate({opacity:1}, 1000);
  console.log('Opacity Changed');
});
