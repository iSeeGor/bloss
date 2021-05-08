jQuery(document).ready(function($){
	// COMMON
	animationInit();
	anchorSmoothScroll($);
	siteMenus();
	
	// MOBILE
	hamburger();
	mobileMenu($);

	// HOME PAGE
	categorieTabs();
	customSelect();
	reviewsSlider();
	accordionHandler($);
	heroVideo($);

	// EXPERT
	profileTabs();
	profileReviewSlider();
	reviewStarRaiting();

});

const fakeSuccess = () => {

	if(!document.querySelector('.promo-singup__success')) return;

	document.querySelector('.promo-singup__success').style.visibility = 'visible';
	
	setTimeout(() => {
		
		document.querySelector('.promo-singup__success').style.visibility = 'hidden';
		
		if(!document.querySelectorAll('.form input')) return;
		document.querySelectorAll('.form input').forEach(input => {

			input.value = '';
		});

		if(!document.querySelectorAll('.form textarea')) return;
		document.querySelectorAll('.form textarea').forEach(textarea => {

			textarea.value = '';
		});
		
	}, 4000);
}

const categorieTabs = () => {

	document.querySelectorAll('.categorie-tab').forEach( tab => {

		tab.addEventListener('click', tabsToggle)
	});

	function tabsToggle() {

		this.classList.toggle('is-selected');
	}
}

const customSelect = () => {

	if(!document.querySelector('.js-choice')) return;

	const choices = new Choices('.js-choice', {

		searchEnabled: false,
		itemSelectText: ''
	});
}

const reviewsSlider = () => {

	let slider;

	slider = new Swiper('.reviews-slider .swiper-container', {
	
		spaceBetween: 60,
		effect: 'fade',
		speed : 1600,
		autoHeight: true,

		navigation : {

			prevEl: '.reviews-slider .button-nav--prev',
			nextEl: '.reviews-slider .button-nav--next',
			disabledClass: 'is-disabled'
		},

		pagination: {

			el: '.reviews-slider__counter',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				
				(current <= 9) ? current = '0' + current : current;
				(total <= 9) ? total = '0' + total : total;

				return '<span class="_current">' + current + '</span><span class="_total">/ ' + total + '</span>';
			}

			
		},
	})
}

const accordionHandler = ($) => {

	$('.accordion-item').on('click', function(){

		$(this).find('.accordion-item__body').slideToggle(400);
		$(this).toggleClass('is-active');
	});
}

const heroVideo = ($) => {	

	if(!$('.modal-hero__video').length) return; 

	let video = $('.modal-hero__video').get(0);
	
	$('.modal-hero__play').on('click', function(){

		video.play();
		$(this).hide()
	});

	video.onpause = function() {
		$('.modal-hero__play').show();
	};

	video.onplay = function() {
		$('.modal-hero__play').hide();
	};

	$('.js-hero-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		// focus: '#username',
		modal: true
	});

	$(document).on('click', '.js-close-modal', function (e) {
		e.preventDefault();
		$.magnificPopup.close();

		video.pause();
		video.currentTime = 0;
	});

}

const animationInit = () => {

	AOS.init({

		disable: 'mobile',
		once: true,
	});

	let rellax = new Rellax('.rellax', {

		center: true
	});

  	SmoothScroll({ stepSize: 60 });

}

const mobileMenu = ($) => {

	$('.menu-item-has-children > a').on('click', function(){

		$(this).parent().toggleClass('is-collapsed');
		$(this).parent().find('.sub-menu').slideToggle(400);
	})
}

const hamburger = () => {

	if(!document.querySelector('.hamburger')) return;

	document.querySelector('.hamburger').addEventListener('click', function(e) {
		this.classList.toggle('is-active');

		document.querySelector('.header').classList.toggle('is-visible');
		document.body.classList.toggle('overflow');
	});
}

const anchorSmoothScroll = ($) => {

	$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();

	$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1400);
	});
}

const profileTabs = () => {

	let tabButtons = document.querySelectorAll('.profile-tabs__tab-button');
	let tabsContent = document.querySelectorAll('.profile-tabs__content-tab');
	
	if(!tabButtons) return;

	tabButtons.forEach((tab, index) => {

		tab.addEventListener('click', function(){
			let element = this;
			tabHandler(element, index);
		});
	});

	function tabHandler(element, index) {

		tabButtons.forEach(tab => tab.classList.remove('is-active'));
		element.classList.add('is-active');

		tabsContent.forEach((el, index) => {
			el.classList.remove('is-active');	
		})

		tabsContent[index].classList.add('is-active');	
	}
}

const profileReviewSlider = () => {

	let slider;

	slider = new Swiper('.profile-review__slider', {

		slidesPerView: 2,
		spaceBetween: 30,
		speed: 1400,

		navigation : {

			prevEl: '.review-slider__control .button-nav--prev',
			nextEl: '.review-slider__control .button-nav--next',
			disabledClass: 'is-disabled'
		},

		pagination: {

			el: '.review-slider__control .slider-control__counter',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				
				(current <= 9) ? current = '0' + current : current;
				(total <= 9) ? total = '0' + total : total;

				return '<span class="_current">' + current + '</span><span class="_total">/ ' + total + '</span>';
			}

			
		},

		breakpoints: {

			320 : {
				spaceBetween: 30,
				slidesPerView: 1,
			},

			1024 : {

				slidesPerView: 2,
			},

			1200 : {

				spaceBetween: 60,
			}
		}
	});
}

const reviewStarRaiting = () => {

	let stars = document.querySelectorAll('.rating__star');

	if(!stars) return;
	
	stars.forEach(star => {

		star.addEventListener('click', function(){

			stars.forEach(item => item.classList.remove('is-active'));
			this.classList.add('is-active');
		})
	});
}

const siteMenus = () => {

	$('.footer-menu').on('click', '.current-menu-item', function(){

		$(this).toggleClass('is-active');
		$(this).find('> .sub-menu').slideToggle(400);
	});
}