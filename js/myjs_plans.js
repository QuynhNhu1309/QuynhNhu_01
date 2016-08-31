
//PROCESS CAROUSEL NEW PRODUCT 
// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
for (var i=0;i<2;i++) {
			next=next.next();
			if (!next.length) {
				next = jQuery(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
		}
});
 
// Mouse over new product carousel



$(document).ready(function () {
    $("#mycarousel_new_product .carousel-inner .item .thumbnail, #mycarousel_sale .carousel-inner .item .thumbnail").on("mouseover", function () {
       $(this).css("background", "#ddd7e0");
    });

    $("#mycarousel_new_product .carousel-inner .item .thumbnail, #mycarousel_sale .carousel-inner .item .thumbnail").on("mouseleave", function () {
        $(this).css("background", "#FFFFFF");
    });

});

//END PROCESS CAROUSEL NEW PRODUCT 














