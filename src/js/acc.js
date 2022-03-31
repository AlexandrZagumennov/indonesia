// Аккордеон

const acc = () => {
	const journeyListElem = document.querySelector('.journey__list');
	const journeyItemElems = document.querySelectorAll('.journey__item');
	
	const open = (button, dropDown) => {
	  closeAllDrops(button, dropDown);
	  button.classList.add('journey__btn-title_active');
	  dropDown.classList.add('journey__btn-description_active');
	};
	
	const close = (button, dropDown) => {
	  button.classList.remove('journey__btn-title_active');
	  dropDown.classList.remove('journey__btn-description_active');
	};
	
	const closeAllDrops = (button, dropDown) => {
		journeyItemElems.forEach((elem) => {
		if (elem.children[0] !== button && elem.children[1] !== dropDown) {
		  close(elem.children[0], elem.children[1]);
		}
	  })
	};

	journeyListElem.addEventListener('click', (event) => {
	  const target = event.target;

	  if (target.classList.contains('journey__btn-title')) {
		const parent = target.closest('.journey__item');
		const description = parent.querySelector('.journey__btn-description');

		if (description.classList.contains('journey__btn-description_active')) {
			close(target, description);
		} else {
			open(target, description);
		}


		if (parent.classList.contains('journey__item_active')) {
			parent.classList.remove('journey__item_active') 
		} else {
			parent.classList.add('journey__item_active')
		}
	  } 
	});
};

export {acc};

//Добавлял / удалял класс у parent по причине того, что в стилях необходимо было использовать состояние journey__item_active