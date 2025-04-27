const bars = document.querySelector('.bars');
const nav = document.querySelector('.mobile-nav');

bars.addEventListener('click', () => {
	bars.classList.toggle('change');
  nav.classList.toggle('block')
});
