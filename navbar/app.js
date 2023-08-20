const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
	links.classList.toggle('show-links');
});

document.addEventListener('click', (event) => {
	if (!event.target.classList.contains('fa-bars')) {
		console.log('false');
		if (links.classList.contains('show-links')) {
			links.classList.remove('show-links');
		}
	}
});
