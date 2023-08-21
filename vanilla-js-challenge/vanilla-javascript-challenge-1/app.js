// Vanilla JavaScript DOM Challenges //

// BEGINNER CHALLENGES //

// 1. Create a div (don’t put it in the DOM yet).
const newDiv = document.createElement('div');

// 2. Add a class of "boxy" to that div.
newDiv.classList.add('boxy');

// 3. Add two paragraphs of text to that div with the text of your choosing.
const paragraphs = `
    <p>this is pragraph one</p>
    <p>this is pragraph two</p>
  `;
newDiv.innerHTML = paragraphs;

// 4. Insert the div into the DOM just after the h1.
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', newDiv);

// 5. Add a third paragraph to the div after it’s in the DOM.
// const thirdParagraph = document.createElement('p');
// thirdParagraph.textContent = 'this is paragraph third';
// newDiv.appendChild(thirdParagraph);
newDiv.insertAdjacentHTML('beforeend', `<p>this is paragraph three</p>`);

// BEGINNER+ CHALLENGES //

// 1. Add an unordered sublist to the last list item with three children ("one", "two", and "three").
const listItems = document.querySelectorAll('.list-item');
const lastListItem = listItems[listItems.length - 1];

const subListContainer = document.createElement('ul');
const subLists = `<li>one</li> <li>two</li> <li>three</li>`;
subListContainer.innerHTML = subLists;

lastListItem.appendChild(subListContainer);

// 2. Add a paragraph after the list of items with a class of "glow."
const list = document.querySelector('.list');
const glowParagraph = document.createElement('p');
glowParagraph.classList.add('glow');
glowParagraph.textContent = 'glow paragraph';
list.insertAdjacentElement('afterend', glowParagraph);

// 3. Remove a card when its button is clicked.
// const cardBtns = document.querySelectorAll('.card__btn');
// for (let i = 0; i < cardBtns.length; i++) {
// 	cardBtns[i].addEventListener('click', (e) => {
// 		e.target.parentElement.remove();
// 	});
// }

// 4. Change the event listener to the following Toggle the class "glow" to the image when you click the card’s button.
// const cardBtns = document.querySelectorAll('.card__btn');
// const cardImages = document.querySelectorAll('.card__image');
// for (let i = 0; i < cardBtns.length; i++) {
// 	cardBtns[i].addEventListener('click', (e) => {
// 		cardImages[i].classList.toggle('glow');
// 	});
// }

// 5. Change the event listener to the following. Change the title of all other cards to "Jealous 👀" when you click on a card’s button. (BONUS: Change the title of the card that was clicked to "I’m the greatest!")
const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
	const cardTitle = cards[i].querySelector('.card__heading');
	const cardBtn = cards[i].querySelector('.card__btn');

	cardTitle.textContent = 'Jealous 👀';

	cardBtn.addEventListener('click', () => {
		cardTitle.textContent = "I'm the greatest!";
	});
}

//INTERMEDIATE CHALLENGES//

// 1. Append a button below the card-container that says "Add more cards" (it should have the class "btn").
const cardContainer = document.querySelector('.card-container');
const addCardBtn = document.createElement('button');
addCardBtn.classList.add('btn');
addCardBtn.textContent = 'Add More Cards';
cardContainer.insertAdjacentElement('afterend', addCardBtn);

// 2. Create a function that generates a new card when clicked (you can copy current HTML code) and places it as the last card in the card container (BONUS: Set the query parameter of the image and the id of the image to its card number).
// function generateCard() {
// 	const numberOfCards = cardContainer.children.length;
// 	const newCard = `
//     <div class="card"
//     id="card-${numberOfCards + 1}">
//       <img
//           class="card__image"
//         width="300"
//         height="300"
//         src="https://picsum.photos/300/?random=${numberOfCards + 1}"
//         alt="Lorem Ipsum Picture" />
//       <h2 class="card__heading">Lorem Ipsum Title ${numberOfCards + 1} </h2>
//       <p class="card__description">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam esse
//         consequatur culpa itaque saepe, placeat amet repellendus.
//       </p>
//       <button class="btn card__btn">Learn More</button>
//     </div>`;

// 	cardContainer.insertAdjacentHTML('beforeend', newCard);
// }

// addCardBtn.addEventListener('click', () => {
// 	generateCard();
// });

// 3. Create a function that adds cards but receives two parameters: title and description. When invoked, the function should create a new card with those parameters as the title (the h2 text) and description (the paragraph text) of the card. Create 3 new cards from the JavaScript file (i.e., upon page load)
function generateCardFromJS({ title, description }) {
	const numberOfCards = cardContainer.children.length;
	const newCard = `
    <div class="card"
    id="card-${numberOfCards + 1}">
      <img
          class="card__image"
        width="300"
        height="300"
        src="https://picsum.photos/300/?random=${numberOfCards + 1}"
        alt="Lorem Ipsum Picture" />
      <h2 class="card__heading">${title} ${numberOfCards + 1} </h2>
      <p class="card__description">
        ${description}
      </p>
      <button class="btn card__btn">Learn More</button>
    </div>`;

	cardContainer.insertAdjacentHTML('beforeend', newCard);
}

generateCardFromJS({
	title: 'Another title',
	description: 'This is a description',
});
generateCardFromJS({
	title: 'Another title',
	description: 'This is a description',
});
generateCardFromJS({
	title: 'Another title',
	description: 'This is a description',
});

addCardBtn.addEventListener('click', () => {
	generateCardFromJS({
		title: 'Another title',
		description: 'This is a description',
	});
});

// 4. Removes a card from the DOM only when a card image is clicked. (BONUS: Make it work on new cards added to the DOM.)
const handleImageClicked = (e) => {
	if (!e.target.classList.contains('card__image')) return;
	e.target.closest('.card').remove();
};

cardContainer.addEventListener('click', handleImageClicked);

// 5. Create and insert a button that says "Change Color Scheme" (ensure the button has a class of 'btn') that changes the css variable --_hue to a random number between 0 and 360 when clicked.
const changeColorSchemeBtn = `<button class="btn" id="change-color-scheme-btn">Change Color Scheme</button>`;

cardContainer.insertAdjacentHTML('beforebegin', changeColorSchemeBtn);

const setRandomColor = () => {
	const getRandomColor = Math.floor(Math.random() * 360);
	document.documentElement.style.setProperty('--_hue', getRandomColor);
};

document
	.getElementById('change-color-scheme-btn')
	.addEventListener('click', setRandomColor);
