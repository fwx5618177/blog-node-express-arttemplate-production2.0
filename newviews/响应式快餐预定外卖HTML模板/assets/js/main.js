(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		// Header Shopping Cart Toggle

		if ($(".mini-cart").length) {
			var cartToggleBtn = $(".cart-toggle-btn");
			var cartContent = $(".mini-cart-content");
			var body = $("body");

			cartToggleBtn.on("click", function (e) {
				cartContent.toggleClass("mini-cart-content-toggle");
				e.stopPropagation();
			});

			body.on("click", function () {
				cartContent.removeClass("mini-cart-content-toggle");
			}).find(cartContent).on("click", function (e) {
				e.stopPropagation();
			});
		}


		// SCROLLTO THE TOP

		// Show or hide the sticky footer button
		$(window).scroll(function () {
			if ($(this).scrollTop() > 6000) {
				$('.go-top').fadeIn(200);
			} else {
				$('.go-top').fadeOut(200);
			}
		});


		// Animate the scroll to top
		$('.go-top').click(function (event) {
			event.preventDefault();

			$('html, body').animate({
				scrollTop: 0
			}, 1500);
		});


		//Home Page Slider

		$('.homepage-slides').owlCarousel({
			items: 1,
			dots: false,
			nav: true,
			loop: true,
			autoplay: true,
			autoplayTimeout: 5000,
			navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"]
		});

		$(".homepage-slides").on("translate.owl.carousel", function () {
			$(".single-slide-item h1").removeClass("animated fadeInUp").css("opacity", "1");
			$(".single-slide-item h5").removeClass("animated fadeInDown").css("opacity", "1");
		});

		$(".homepage-slides").on("translated.owl.carousel", function () {
			$(".single-slide-item h1").addClass("animated fadeInUp").css("opacity", "1");
			$(".single-slide-item h5").addClass("animated fadeInDown").css("opacity", "1");
		});

		// Slick Nav

		$("ul#navigation").slicknav({
			prependTo: ".responsive-menu-wrap",

		});

		// Sticky Area 
		$('.sticky-area').sticky({
			topSpacing: 0,
		});

		//Testimonial 1Carousel

		$('.client-testimonial-carousel').owlCarousel({
			items: 1,
			singleItem: true,
			dots: false,
			loop: true,
			navText: ["<i class='fa  fa-angle-left'></i>", "<i class='fa  fa-angle-right'></i>"],
			autoplay: false,
			margin: 40,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: false
				},

				500: {
					items: 1,
					nav: false
				},

				800: {
					items: 1,
					nav: false

				},
				1000: {
					items: 1,
					loop: false
				}
			}
		});

		// Masonry

		$(".gallery-list").masonry({

		});

		// WOW Animation  
		new WOW().init();

	});

	jQuery(window).load(function () {
		jQuery(".site-preloader-wrap, .slide-preloader-wrap").fadeOut(1000);

	});



}(jQuery));
