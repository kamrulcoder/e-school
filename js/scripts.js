(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		// testomonial-slider-js 
		
		$('.testomonial-slider').owlCarousel({
			loop: true,
			margin: 20,
			center: false,
			nav: false,
			dots: true,
			autoplay: true,
			autoplayTimeout: 2000,
			responsiveClass: true,
			responsiveRefreshRate: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 1
				},
				960: {
					items: 1
				},
				1200: {
					items: 1
				},
				1920: {
					items: 1
				}
			}
		});

		// menu-hambuger-js 


		$(".hamburger").click(function(){
			$(".sm-menu-nav").slideToggle();
		})


		
	});
})(jQuery);