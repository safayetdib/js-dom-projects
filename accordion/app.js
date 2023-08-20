const faqData = [
	{
		question: 'What is JavaScript?',
		answer:
			'JavaScript is a programming language that enables interactive web pages.',
	},
	{
		question: 'What is the DOM?',
		answer:
			'The Document Object Model (DOM) is a programming interface for web documents.',
	},
	{
		question: 'How do you loop in JavaScript?',
		answer:
			"You can use loops like 'for', 'while', and 'forEach' to iterate over data.",
	},
];

const container = document.querySelector('.container');
const toggles = document.getElementsByClassName('toggle');
const contentDiv = document.getElementsByClassName('content');
const icons = document.getElementsByClassName('icon');

const createWrapperElement = (faq) => {
	const wrapper = document.createElement('div');
	wrapper.className = 'wrapper';

	const toggle = document.createElement('button');
	toggle.className = 'toggle';
	toggle.textContent = faq.question;

	const icon = document.createElement('i');
	icon.className = 'fa-solid fa-plus icon';
	toggle.appendChild(icon);

	const content = document.createElement('div');
	const answer = document.createElement('p');
	content.className = 'content';
	answer.textContent = faq.answer;
	content.appendChild(answer);

	wrapper.appendChild(toggle);
	wrapper.appendChild(content);

	return wrapper;
};

faqData.forEach((faq) => {
	const wrapper = createWrapperElement(faq);
	container.appendChild(wrapper);
});

for (let i = 0; i < toggles.length; i++) {
	toggles[i].addEventListener('click', () => {
		console.log(contentDiv[i].style.height, contentDiv[i].scrollHeight);

		if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
			contentDiv[i].style.height = contentDiv[i].scrollHeight + 'px';
			toggles[i].style.color = '#0084e9';
			icons[i].classList.remove('fa-plus');
			icons[i].classList.add('fa-minus');
		} else {
			contentDiv[i].style.height = '0px';
			toggles[i].style.color = '#111130';
			icons[i].classList.remove('fa-minus');
			icons[i].classList.add('fa-plus');
		}

		for (let j = 0; j < contentDiv.length; j++) {
			if (j != i) {
				contentDiv[j].style.height = '0px';
				toggles[j].style.color = '#111130';
				icons[j].classList.remove('fa-minus');
				icons[j].classList.add('fa-plus');
			}
		}
	});
}
