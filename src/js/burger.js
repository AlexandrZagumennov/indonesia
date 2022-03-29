// Бургер - меню

const burger = () => {
	const burger = document.querySelector('.burger');
	const navigation = document.querySelector('.navigation');
	
	burger.addEventListener('click', () => {
		navigation.classList.toggle('navigation_active');
	});
	
	navigation.addEventListener('click', (event) => {
		const closeNav = event.target.closest('.navigation__link');
	
		if (closeNav) {
			navigation.classList.remove('navigation_active');
		}
	});
};

export {burger};