		 (function() {
          $(window).scroll(function(){
 		 $('nav').toggleClass('scroll', $(this).scrollTop() > 50);
			});
		   
		  $(function() {
    var header = $(".sub");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 2000) {
            header.removeClass('sub').addClass("subScroll");
        } else {
            header.removeClass("subScroll").addClass('sub');
        }
    });
});
		  
		$(function() {
    var car = $(".myCarousel");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 1600) {
            car.removeClass('myCarousel').addClass("myCarouselScroll");
        } else {
            car.removeClass("myCarouselScroll").addClass('myCarousel');
        }
    });
});
});