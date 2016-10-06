var image = $("#test");

image.on('load', function(){
  console.log('Loaded');
  this.animate({
		opacity:1
	}, 1000);
});
