(function() {
	const navToggle = document.querySelector('.nav-toggle');
	const nav = document.querySelector('.nav');
	if (navToggle && nav) {
		navToggle.addEventListener('click', () => {
			nav.classList.toggle('open');
		});
	}

	const track = document.querySelector('.testimonial-track');
	const prev = document.querySelector('.carousel-controls .prev');
	const next = document.querySelector('.carousel-controls .next');
	function scrollByCard(direction) {
		if (!track) return;
		const card = track.querySelector('.testimonial');
		const amount = card ? card.getBoundingClientRect().width + 24 : 300;
		track.scrollBy({ left: direction * amount, behavior: 'smooth' });
	}
	if (prev) prev.addEventListener('click', () => scrollByCard(-1));
	if (next) next.addEventListener('click', () => scrollByCard(1));
})();