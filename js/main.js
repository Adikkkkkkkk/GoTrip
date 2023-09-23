var owl = $('.owl-carousel')
owl.owlCarousel({
	center: true,
	loop: true,
	margin: 20,
	startPosition: 1,
	items: 3,
	responsive: {
		100: {
			startPosition: 2,
			margin: 10,
			items: 2,
		},
		460: {
			startPosition: 1,
			items: 2,
		},
		850: {
			startPosition: 1,
			items: 2,
		},
		1000: {
			margin: 20,
			items: 3,
		},
		1270: {
			margin: 30,
		},
	},
})
$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel')
})
$('.slider__btn--next').click(function () {
	owl.trigger('next.owl.carousel')
})

// BURGER
const navBtn = document.querySelector('.nav__toggle')
const menuIcon = document.querySelector('.menu-icon')
const nav = document.querySelector('.nav')

document.querySelector('.menu-icon-wrapper').onclick = function () {
	nav.classList.toggle('nav--mobile')
	menuIcon.classList.toggle('menu-icon-active')
	document.body.classList.toggle('no-scroll')
}
