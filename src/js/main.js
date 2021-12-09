const navButton = document.querySelector('.nav__button');
const navTriggers = document.querySelectorAll('.menu__trigger');
const nav = document.querySelector('.nav');

navTriggers.forEach((btn) => {
	btn.addEventListener('click', () => {
		nav.classList.toggle('active');
		navButton.classList.toggle('active');
	});
});

// sticky nav
const stickyNav = (entries) => {
	const [entry] = entries;
	if (!entry.isIntersecting) nav.classList.add('sticky');
	else nav.classList.remove('sticky');
};
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

const prevIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-left">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>`;
const nextIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>`;

$('.mumber-active').owlCarousel({
	items: 4,
	nav: true,
	navText: [prevIcon, nextIcon],
	dot: true,
	loop: true,
	margin: 40,
	autoplay: true,
	autoplayTimeout: 3000,
	smartSpeed: 1000,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 3,
		},
		992: {
			items: 3,
		},
		1000: {
			items: 4,
		},
	},
});
