const currentPageUrl = window.location.href;
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach((link) => {
	if (link.href === currentPageUrl) {
		link.classList.add('active');
	}
});

const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const activeLink = document.querySelector('.active');

btn.addEventListener('click', () => {
	// get random number between 0 and 3
	const randomNumber = getRandomNumber();

	console.log(randomNumber);

	document.body.style.backgroundColor = colors[randomNumber];

	color.style.color = colors[randomNumber];
	color.textContent = colors[randomNumber];

	activeLink.style.color = colors[randomNumber];
});

const getRandomNumber = () => {
	return Math.floor(Math.random() * colors.length);
};
