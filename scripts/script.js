

function hideLoader(after, transition){
		var loader = document.querySelector("#loader");
		setTimeout(function(){
			if(!loader.className.match("loader--hide")){
					loader.className += " loader--hide";
			}
			setTimeout(function(){
				loader.style.display = "none";
			}, transition)
		}, after)
}

window.addEventListener("load", function(){
	hideLoader(1200, 800);
}, false)



var width_window = $(window).width();

var slider = $('.slider')
var slide = $('.slide')
var slide_number = slide ? slide.length : 0;
var i = 0
var items = $('.nav')

slider.width(width_window*slide_number)

function callback(event) {
	if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
		if(i == 0){
			return;}

      // scroll up
    console.log('up')
		moveLeft()
    }
    else {
			if(i == slide_number-1){
				return;}


        // scroll down
      console.log('down')
      moveRight()

    }
}

function moveRight(){
  i= i+ 1
      var translateValue = width_window * i

      slider.css("-webkit-transform", 'translateX(-'+translateValue+'px)');
      slider.css("transform", 'translateX(-'+translateValue+'px)');
			$(items[i]).addClass('active')
			$(items[i-1]).removeClass('active')
    }


function moveLeft(){
  i=i-1
  		var translateValue = width_window * i

			slider.css("-webkit-transform", 'translateX(-'+translateValue+'px)');
      slider.css("transform", 'translateX(-'+translateValue+'px)');
			$(items[i]).addClass('active')
			$(items[i+1]).removeClass('active')

}



if(slider){
		$(window).bind('mousewheel DOMMouseScroll', _.debounce(callback, 50, true));
}


window.addEventListener('resize', function(){
    width_window = $(window).width();
    slider.width(width_window*slide_number)
    var translateValue = width_window * i
    slider.addClass('is_resizing')
    slider.css("-webkit-transform", 'translateX(-'+translateValue+'px)');
    slider.css("transform", 'translateX(-'+translateValue+'px)');
  }, false);

  $(window).resize(function() {
    clearTimeout(id);
    id = setTimeout(doneResizing, 500);

  });
  var id;
  function doneResizing(){
    slider.removeClass('is_resizing')
  }
