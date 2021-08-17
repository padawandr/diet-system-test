const formScreens = document.querySelectorAll('.screen');
const buttons = document.querySelectorAll('.btn-action');

const [ formLogin, formSignUp, formRecover, formSetPassword ] = formScreens;

for (let button of buttons) {
	let showForm;

	if (button.id === 'to-login') showForm = formLogin;
	if (button.id === 'to-signup') showForm = formSignUp;
	if (button.id === 'to-recover') showForm = formRecover;
	if (button.id === 'to-setpassword') showForm = formSetPassword;

	let hideForm = button.parentElement;
	while (!hideForm.classList.contains('screen')) {
		hideForm = hideForm.parentElement;
	}

	button.addEventListener('click', (e) => {
		e.preventDefault();
		displayForm(hideForm, showForm);
	});
}

function displayForm(hideForm, showForm) {
	hideForm.classList.add('hidden');
	showForm.classList.remove('hidden');
}

function togglePassword(screen = '', num = '') {
	const input = document.querySelector(`#${screen}-password${num}`);
	input.type = (input.type === 'password') ? 'text' : 'password';
	input.nextElementSibling.classList.toggle('active');
}
