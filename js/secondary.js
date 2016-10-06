var image = $("img.full-size");

$(image).one("load", function() {
  console.log('Image loaded.');
  image.animate({opacity:1}, 1000);
}).each(function() {
  if(this.complete) $(this).load();
});

console.log("T1");

$("img.full-size").one("load", function() {
  console.log("second code block triggered test");
}).each(function() {
  if(this.complete) $(this).load();
});
