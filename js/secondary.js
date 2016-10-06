var $ =jQuery.noConflict();

var image = $("img.full-size");

$(image).one("load", function() {
  console.log('Image loaded.');
  image.animate({opacity:1}, 1000);
}).each(function() {
  if(this.complete) $(this).load();
});
