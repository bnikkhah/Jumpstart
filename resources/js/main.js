$(document).ready(function(){
	$('.carousel').slick({
		autoplay:true,
		draggable:false,
		pauseOnHover:false,
		pauseOnFocus:false,
		autoplaySpeed:4000,
		slideToShow:1,
		arrows:false
	});
	
	var lastScrollTop = 0;
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if (scrollTop == 0){
			if($('.toggleNav').hasClass('container')){
				$('.toggleNav').removeClass('container');
				$('.toggleNav').addClass('container-fluid');
			}
			lastScrollTop = scrollTop;
		}else if (scrollTop - lastScrollTop > 50){
			var navbarHeight = $('.navbar').css('height');
			$('.navbar').animate({
				top:'-' + navbarHeight
			}, 150);
			lastScrollTop = scrollTop;
		}else if (lastScrollTop - scrollTop > 50){
			$('.navbar').animate({
				top:'0px'
			}, 150);
			$('.toggleNav').removeClass('container-fluid');
			$('.toggleNav').addClass('container');
			lastScrollTop = scrollTop;
		}
	});
});