function togglePassword(num = '') {
	const input = document.querySelector(`#password${num}`);
	input.type = (input.type === 'password') ? 'text' : 'password';
	input.nextElementSibling.classList.toggle('active');
}
