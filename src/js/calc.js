// Калькулятор

const calc = () => {
	// Исходные данные 
		const dates = [
			{	
				mounthNumber: 11,
				mounth : 'Ноябрь 2021',
				dateValues : ['4.11 - 18.11','7.11 - 21.11','12.11 - 26.11','20.11 - 6.12'],
			},

			{	
				mounthNumber: 12,
				mounth : 'Декабрь 2021',
				dateValues : ['4.12 - 18.12','7.12 - 21.12','12.12 - 26.12','20.12 - 6.01'],
			},

			{	
				mounthNumber: 1,
				mounth : 'Январь 2022',
				dateValues : ['4.01 - 18.01','7.01 - 21.01','12.01 - 26.01','20.01 - 6.02'],
			},

			{	
				mounthNumber: 2,
				mounth : 'Февраль 2022',
				dateValues : ['4.02 - 18.02','7.02 - 21.02','12.02 - 26.02','20.02 - 6.03'],
			},

			{	
				mounthNumber: 3,
				mounth : 'Март 2022',
				dateValues : ['4.03 - 18.03','7.03 - 21.03','12.03 - 26.03','20.03 - 6.04'],
			},

			{	
				mounthNumber: 4,
				mounth : 'Апрель 2022',
				dateValues : ['4.04 - 18.04','7.04 - 21.04','12.04 - 26.04','20.04 - 6.05'],
			},

			{	
				mounthNumber: 5,
				mounth : 'Май 2022',
				dateValues : ['4.05 - 18.05','7.05 - 21.05','12.05 - 26.05','20.05 - 6.06'],
			},
		];
	// Исходные данные / END

	const date = document.querySelector('.calc__date-list ');
	const mounthsList = document.querySelector('.calc__date-mounths-list');
	const datesList = document.querySelector('.calc__date-dates-list');
	const dateValue = document.querySelector('#date-value');
	const personValue = document.querySelector('#person-value');
	const itemBtn = document.querySelectorAll('.calc__item-btn');
	const selectBtn = document.querySelectorAll('.calc__select-btn');
	const numberOfPersonList = document.querySelector('.calc__number-of-person-list');
	const numberOfPersonItem = document.querySelectorAll('.calc__number-of-person-item');

	// Функция создания элементов списка месяцев
		const createMounthItem = (mounthNumber, mounthText) => {
			const mounthItem = document.createElement('li');
			mounthItem.className = 'calc__date-mounths-item';

			const mounthBtn = document.createElement('button');
			mounthBtn.className = 'calc__date-mounths-title';
			mounthBtn.dataset.mounthNumber = mounthNumber;
			mounthBtn.textContent = mounthText;

			mounthItem.append(mounthBtn);
			mounthsList.append(mounthItem);
		};

	// Функция создания элементов списка дат
		const createDateItem = (mounthNumber, dateText) => {
			const dateItem = document.createElement('li');
			dateItem.className = 'calc__date-dates-item';
			dateItem.dataset.mounthNumber = mounthNumber;
			dateItem.textContent = dateText;
			datesList.append(dateItem);
		};

	// Функция открытия списка дат
		const showDates = () => {
			date.classList.add('calc__date-list_active')
		};

	// Функция закрытия списка дат
		const hideDates = () => {
			date.classList.remove('calc__date-list_active')
		};

	// Функция открытия списка количества человек
		const showPersons = () => {
			numberOfPersonList.classList.add('calc__number-of-person-list_active')
		};

	// Функция закрытия списка количества человек
		const hidePersons = () => {
			numberOfPersonList.classList.remove('calc__number-of-person-list_active')
		};

	// Функция переключения активного месяца
		const changeActiveTitle = (indexActiveTitle) => {
			dateMounthsTitle.forEach((title, index) => {
				title.classList.remove('calc__date-mounths-title_active');
		
				if (index === indexActiveTitle) {
					title.classList.add('calc__date-mounths-title_active');
				}
			});
		};

	// Функция отображения элементов списка дат, соответстующих меяцу
		const changeContentItem = (event) => {
			const mounthTargetAttr = event.target.dataset.mounthNumber;

			dateDatesItem.forEach(j => {
				const itemTargetAttr = j.dataset.mounthNumber;

				j.classList.remove('calc__date-dates-item_active')

				// Если атрибут элемента месяца совпадает с атрибутом месяца, то элемент показывается
				if (itemTargetAttr === mounthTargetAttr) {
					j.classList.add('calc__date-dates-item_active')
				}
			});
		};

	// Функция отображения выбранной даты в поле
		const checkedDate = (event) => {
			dateValue.innerHTML = event.target.innerHTML;
		};

	// Функция отображения выбранного количества людей в поле
		const checkedNumberOfPerson = (event) => {
			personValue.innerHTML = event.target.innerHTML;
		};

	// Создание элементов списка месяцев и элементов списка дат
		dates.forEach(date => {
			createMounthItem(date.mounthNumber, date.mounth);
			date.dateValues.forEach(i => {
				createDateItem(date.mounthNumber, i)
			});
		});


	const dateMounthsTitle = document.querySelectorAll('.calc__date-mounths-title');
	const dateDatesItem = document.querySelectorAll('.calc__date-dates-item');

	//Устанавливается начальный активный элемент. Февраль.
		dateMounthsTitle[3].classList.add('calc__date-mounths-title_active');

		dateDatesItem.forEach(i=> {
			if (i.dataset.mounthNumber === '2') {
				i.classList.add('calc__date-dates-item_active')
			}
		});

	// Для каждого месяца прослушивается событие 'mouseover'
		dateMounthsTitle.forEach((i, index) => {
			i.addEventListener('mouseover', (event) => {
				changeActiveTitle(index);
				changeContentItem(event);
			});
		});
	
	// Для каждого элемента списка дат прослушивается событие 'click'
	// Выбранный элемент передаётся в функцию отображения в поле
		dateDatesItem.forEach(i => {
			i.addEventListener('click', (event) => {
				checkedDate(event);
			});
		});

	itemBtn.forEach(i => {
		i.addEventListener('click', (event) => {
			const targetItem = event.target;

			if (targetItem.id === 'calc-btn-date') {
				showDates();
			} else if (targetItem.id === 'calc-btn-person') {
				showPersons();
			} else if (targetItem.id === 'calc-btn-options') {
				console.log('calc-btn-options')
			}
		})
	});

	// Отработка нажатия кнопки Готово
		selectBtn.forEach(i => {
			i.addEventListener('click', (event) => {
				const targetBtn = event.target;

				if (targetBtn.id === 'btn-select-date') {
					hideDates();
				}
			})
		});

	//Отработка выбора количества человек
		numberOfPersonItem.forEach(i => {
			i.addEventListener('click', (event) => {
				checkedNumberOfPerson(event);
				hidePersons();
			});
		})

};

export {calc};


