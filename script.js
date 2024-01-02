'use strict';

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', highlightAndFocus);

let originalContent = '';
let highlightedElements = [];
let currentHighlightedIndex = -1;

function highlightAndFocus() {
	const searchText = searchInput.value.trim();
	const contentNode = document.getElementById('content');
	const lowerCaseSearchText = searchText.toLowerCase();

	if (!originalContent) {
		originalContent = contentNode.innerHTML;
	}

	const spanElement = document.createElement('span');
	spanElement.className = 'highlight';

	contentNode.innerHTML = originalContent;

	if (searchText !== '') {
		contentNode.innerHTML = contentNode.innerHTML.replace(new RegExp(lowerCaseSearchText, 'gi'), matchedText => {
				const newSpanElement = spanElement.cloneNode(true);
				newSpanElement.textContent = matchedText;
				return newSpanElement.outerHTML;
		});

		// Оновлюємо масив виділених елементів
		highlightedElements = Array.from(contentNode.querySelectorAll('.highlight'));

		// Знайдемо перший виділений елемент
		const firstHighlightedElement = highlightedElements[0];

		if (firstHighlightedElement) {
				// Фокусуємося на першому виділеному елементі
				firstHighlightedElement.focus();

				// Прокручуємо так, щоб елемент був посередині вікна за висотою
				const windowHeight = window.innerHeight;
				const elementTop = firstHighlightedElement.offsetTop;
				const elementHeight = firstHighlightedElement.offsetHeight;

				const scrollTo = elementTop - (windowHeight - elementHeight) / 2;

				window.scrollTo({
					top: scrollTo,
					behavior: 'smooth',
				});

				// Встановлюємо поточний індекс виділеного елемента
				currentHighlightedIndex = 0;
		}
	}
}

function preventDefaultAndNextResult(event) {
	event.preventDefault();
	nextResult();
}

function preventDefaultAndPreviousResult(event) {
	event.preventDefault();
	previousResult();
}

function scrollIntoView(element) {
	const windowHeight = window.innerHeight;
	const elementTop = element.offsetTop;
	const elementHeight = element.offsetHeight;

	const scrollTo = elementTop - (windowHeight - elementHeight) / 2;

	window.scrollTo({
		top: scrollTo,
		behavior: 'smooth',
	});
}

function nextResult() {
	if (highlightedElements.length > 0 && currentHighlightedIndex < highlightedElements.length - 1) {
		// Збільшуємо поточний індекс і фокусуємося на наступному елементі
		currentHighlightedIndex++;
		highlightedElements[currentHighlightedIndex].focus();

		// Прокручуємо до середини вікна за висотою
		scrollIntoView(highlightedElements[currentHighlightedIndex]);
	}
}

function previousResult() {
	if (highlightedElements.length > 0 && currentHighlightedIndex > 0) {
		// Зменшуємо поточний індекс і фокусуємося на попередньому елементі
		currentHighlightedIndex--;
		highlightedElements[currentHighlightedIndex].focus();
		
		// Прокручуємо до середини вікна за висотою
		scrollIntoView(highlightedElements[currentHighlightedIndex]);
	}
}

const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', preventDefaultAndNextResult);

const prevButton = document.getElementById('prevButton');
prevButton.addEventListener('click', preventDefaultAndPreviousResult);





// const searchInput = document.getElementById('searchInput');
// searchInput.addEventListener('input', highlightAndFocus);

// let originalContent = '';

// function highlightAndFocus() {
//     const searchText = searchInput.value.trim();
//     const contentNode = document.getElementById('content');
//     const lowerCaseSearchText = searchText.toLowerCase();

//     if (!originalContent) {
//         originalContent = contentNode.innerHTML;
//     }

//     const spanElement = document.createElement('span');
//     spanElement.className = 'highlight';

//     contentNode.innerHTML = originalContent;

//     if (searchText !== '') {
//         contentNode.innerHTML = contentNode.innerHTML.replace(new RegExp(lowerCaseSearchText, 'gi'), matchedText => {
//             const newSpanElement = spanElement.cloneNode(true);
//             newSpanElement.textContent = matchedText;
//             return newSpanElement.outerHTML;
//         });

//         // Знайдемо перший виділений елемент
//         const firstHighlightedElement = contentNode.querySelector('.highlight');

//         if (firstHighlightedElement) {
//             // Фокусуємося на першому виділеному елементі
//             firstHighlightedElement.focus();

//             // Прокручуємо так, щоб елемент був посередині вікна за висотою
//             const windowHeight = window.innerHeight;
//             const elementTop = firstHighlightedElement.offsetTop;
//             const elementHeight = firstHighlightedElement.offsetHeight;

//             const scrollTo = elementTop - (windowHeight - elementHeight) / 2;

//             window.scrollTo({
//                 top: scrollTo,
//                 behavior: 'smooth',
//             });
//         }
//     }
// }

// function preventDefaultAndNextResult(event) {
//     event.preventDefault();
//     nextResult();
// }

// function preventDefaultAndPreviousResult(event) {
//     event.preventDefault();
//     previousResult();
// }

// function nextResult() {
//     // ваш код
// }

// function previousResult() {
//     // ваш код
// }

// const nextButton = document.getElementById('nextButton');
// nextButton.addEventListener('click', preventDefaultAndNextResult);

// const prevButton = document.getElementById('prevButton');
// prevButton.addEventListener('click', preventDefaultAndPreviousResult);


















// function search() {
// 	const searchText = document.getElementById('searchInput').value.trim();
// 	const contentText = document.getElementById('content').innerText;
// 	const lowerCaseSearchText = searchText.toLowerCase();
// 	const lowerCaseContentText = contentText.toLowerCase();

// 	for (let i = 0; i < lowerCaseContentText.length; i++) {
// 		const currentSubstring = lowerCaseContentText.substring(i, i + lowerCaseSearchText.length);

// 		if ((lowerCaseSearchText !== '') && currentSubstring === lowerCaseSearchText) {

// 			const spanElement = document.createElement('span');
// 			spanElement.className = 'highlight';
// 			const textNode = document.getElementById('content');

// 			const highlightedNode = document.createTextNode(searchText);
// 			spanElement.appendChild(highlightedNode);

// 			textNode.innerHTML = textNode.innerHTML.replace(new RegExp(lowerCaseSearchText, 'gi'), matchedText => {
// 				const newSpanElement = spanElement.cloneNode(true);
// 				newSpanElement.textContent = matchedText;
// 				return newSpanElement.outerHTML;
// 			});
// 		};
// 	}
// }





// const searchInput = document.getElementById('searchInput');
// searchInput.addEventListener('input', search);

// const searchButton = document.getElementById('searchButton');

// searchButton.addEventListener('click', search);

// let originalContent = '';

// function highlightText() {
// 	const searchText = document.getElementById('searchInput').value.trim();
// 	const contentNode = document.getElementById('content');
// 	const lowerCaseSearchText = searchText.toLowerCase();

// 	if (!originalContent) {
// 		originalContent = contentNode.innerHTML;
// 	}

// 	const spanElement = document.createElement('span');
// 	spanElement.className = 'highlight';

// 	contentNode.innerHTML = originalContent;

// 	if (searchText !== '') {
// 		contentNode.innerHTML = contentNode.innerHTML.replace(new RegExp(lowerCaseSearchText, 'gi'), matchedText => {
// 				const newSpanElement = spanElement.cloneNode(true);
// 				newSpanElement.textContent = matchedText;
// 				return newSpanElement.outerHTML;
// 		});
// 	}
// }

// const searchInput = document.getElementById('searchInput');
// searchInput.addEventListener('input', highlightText);

