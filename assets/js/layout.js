const generateLayout = () => {
	let firstButtonsContainer = `
    <div class="buttonsContainer" id="buttons_1"></div>
  `;
	let secondButtonsContainer = `
    <div class="buttonsContainer" id="buttons_2"></div>
  `;
	let firstListsContainer = `
    <div class="listsContainer" id="lists_1"></div>
  `;

	let secondListsContainer = `
    <div class="listsContainer" id="lists_2"></div>
  `;

	const position = 'beforeend';

	switch (CONFIG.bentoLayout) {
		case 'bento':
			linksBlock.insertAdjacentHTML(position, firstButtonsContainer);
			linksBlock.classList.remove('reduceGap');
			linksBlock.classList.remove('removeGap');
			break;
		case 'lists':
			linksBlock.insertAdjacentHTML(position, firstListsContainer);
			linksBlock.classList.add('reduceGap');
			break;
		case 'buttons':
			linksBlock.insertAdjacentHTML(position, firstButtonsContainer);
			linksBlock.classList.add('removeGap');
			break;
		default:
			break;
	}
};

generateLayout();
