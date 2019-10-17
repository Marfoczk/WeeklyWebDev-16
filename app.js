/* HAMBURGER NAV */

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const navCont = document.querySelector(".navigation-container");
const navLinks = document.querySelectorAll(".navigation__list a");

const clickEvent = () => {
    hamburger.classList.toggle("hamburger--active");
	nav.classList.toggle("navigation--active");
	navCont.classList.toggle("navigation-container--active");
} 


hamburger.addEventListener('click', clickEvent); 

navLinks.forEach((element) => {
	element.addEventListener('click', ()=> {
		hamburger.classList.remove("hamburger--active");
		nav.classList.remove("navigation--active");
		navCont.classList.remove("navigation-container--active");
	})
})


/* TESTIMONIAL SLIDER */

if(document.querySelectorAll('.imageSlider').length > 0) {
	var slide = 0,
			slides = document.querySelectorAll('.imageSlider_slide'),
			numSlides = slides.length,

			currentSlide = function() {
				var itemToShow = Math.abs(slide % numSlides);
				[].forEach.call(slides, function(el) {
					el.classList.remove('slideActive')
				});
				slides[itemToShow].classList.add('slideActive');

				resetInterval();
			},
			next = function() {
				slide++;
				currentSlide();
			},
			prev = function() {
				slide--;
				currentSlide();
			},

			resetslide = function() {
				var elm = document.querySelector('#slides > li'),
						newone = elm.cloneNode(true),
						x = elm.parentNode.replaceChild(newone, elm);
			},
			resetInterval = function() {
				clearInterval(autonext);
				autonext = setInterval(function() {
					slide++;
					currentSlide();
				}, 4000);
			},
			autonext = setInterval(function() {
				next();
			}, 1000);


	//Buttons
	document.querySelector('.nextSlide').addEventListener('click', function() {
			next();
	}, false);
	document.querySelector('.prevSlide').addEventListener('click', function() {
			prev();
	}, false);
}