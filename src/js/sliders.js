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

	const swiperPhoto = new Swiper('.photo__slider', {
		slidesPerView: 1.25,
		speed: 1000,
		loop: true,
		slideToClickedSlide: true,
		spaceBetween: -59,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
	});

	const swiperPhotoPrev = document.querySelector('.photo__slider-prev')
	const swiperPhotoNext = document.querySelector('.photo__slider-next')

	swiperPhotoPrev.addEventListener('click', () => {
		swiperPhoto.slidePrev();
	})
	swiperPhotoNext.addEventListener('click', () => {
		swiperPhoto.slideNext();
	})

	// Обработка события наведения мыши

	const photoNavigationLeft = document.querySelector('.photo__navigation-left');
	const photoNavigationRight = document.querySelector('.photo__navigation-right');
	const photoSliderPrev = document.querySelector('.photo__slider-prev');
	const photoSliderNext = document.querySelector('.photo__slider-next');

	photoNavigationLeft.addEventListener('mouseover', (event) => {
			if (event) {
				photoSliderPrev.classList.add('photo__slider-prev_active')
			} 
		});

	photoNavigationLeft.addEventListener('mouseleave', (event) => {
		if (event) {
			photoSliderPrev.classList.remove('photo__slider-prev_active')
		}
	});

	photoNavigationRight.addEventListener('mouseover', (event) => {
		if (event) {
			photoSliderNext.classList.add('photo__slider-next_active')
		} 
	});

	photoNavigationRight.addEventListener('mouseleave', (event) => {
		if (event) {
			photoSliderNext.classList.remove('photo__slider-next_active')
		}
	});
};



export {swipers};