const choices = () => {
	new Choices('#form-date', {
		searchEnabled: false,
		itemSelectText: '',
		shouldSort: false, // запрещает автосортировку options
	});
};

export {choices};