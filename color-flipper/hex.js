const currentPageUrl = window.location.href;
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach((link) => {
	if (link.href === currentPageUrl) {
		link.classList.add('active');
	}
});

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const activeLink = document.querySelector('.active');

btn.addEventListener('click', () => {
	let hexColor = '#';
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumber()];
	}

	document.body.style.backgroundColor = hexColor;

	// color.style.color = hexColor;
	color.textContent = hexColor;
	activeLink.style.color = hexColor;
});

const getRandomNumber = () => {
	return Math.floor(Math.random() * hex.length);
};
