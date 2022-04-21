const form = () => {
	const fieldsets = document.querySelectorAll('.form__fieldset');
	const selects = document.querySelectorAll('.form__select');
	const inputs = document.querySelectorAll('.form__input');
	const allInputs = [...selects, ...inputs];

	// Обратотка события HOVER
	fieldsets.forEach(fieldset => {
		fieldset.addEventListener('mouseover', event => {
			const target = event.target;

			if (target.classList.contains('form__fieldset')) {
				target.classList.add('form__fieldset-hover')
			}
		})
	})

	fieldsets.forEach(fieldset => {
		fieldset.addEventListener('mouseleave', event => {
			const target = event.target;

			if (target.classList.contains('form__fieldset')) {
				target.classList.remove('form__fieldset-hover')
			}
		})
	})

	// Обработка события FOCUS
	allInputs.forEach(input => {
		input.addEventListener('input', event => {
			const target = event.target;
			const parent = target.closest('.form__fieldset');
			parent.classList.add('form__fieldset-focus');
		});
	});	
};

export { form };