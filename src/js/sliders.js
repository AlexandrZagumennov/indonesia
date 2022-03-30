const swipers = () => {
	const swiperIndonesia = new Swiper('.indonesia__slider', {
		slidesPerView: 1,
		speed: 1000,
		loop: true,
		slideToClickedSlide: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
	});
}



export {swipers}