const showToastBtn = document.querySelector('#show-toast');

const closeToastBtn = document.querySelector('#close');

const toast = document.querySelector('#toast');

showToastBtn.addEventListener('click', () => showToast());

let x;
const showToast = () => {
	clearTimeout(x);
	toast.style.transform = 'translateX(0)';

	x = setTimeout(() => {
		toast.style.transform = 'translateX(400px)';
	}, 4000);
};

closeToastBtn.addEventListener('click', () => {
	toast.style.transform = 'translateX(400px)';
});
