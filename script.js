'use strict';

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

let originalContent = '';

function highlightText() {
	const searchText = document.getElementById('searchInput').value.trim();
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
	}
}

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', highlightText);

