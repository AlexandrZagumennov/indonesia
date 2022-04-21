const choices = () => {
	new Choices('#form-date', {
		searchEnabled: false,
		itemSelectText: '',
		shouldSort: false, // запрещает автосортировку options
	});

	new Choices('#form-input-number-of-person', {
		searchEnabled: false,
		itemSelectText: '',
		shouldSort: false, // запрещает автосортировку options
	});

	new Choices('#form-input-options', {
		searchEnabled: false,
		itemSelectText: '',
		shouldSort: false, // запрещает автосортировку options
	});
};

export {choices};