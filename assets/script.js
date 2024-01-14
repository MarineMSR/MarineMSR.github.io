



document.addEventListener('DOMContentLoaded', function () {

	// Sélection des éléments des flèches

	const arrowLeft = document.querySelector('#banner .arrow_left');

	// Ajout d'un event listener pour la flèche gauche
	arrowLeft.addEventListener('click', function () {

		// Logique à exécuter lors du clic sur la flèche gauche
		console.log('Clic sur la flèche gauche');
	});

	const arrowRight = document.querySelector('#banner .arrow_right');

	// Ajout d'un event listener pour la flèche droite
	arrowRight.addEventListener('click', function () {

		// Logique à exécuter lors du clic sur la flèche droite
		console.log('Clic sur la flèche droite');
	});

	const dotContainer = document.getElementById('dotContainer');

	const taglineElement = document.querySelector('#banner p');

	const slides = [
		{
			"image": "slide1.jpg",
			"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image": "slide2.jpg",
			"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image": "slide3.jpg",
			"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image": "slide4.png",
			"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
		}
	];
	let currentSlideIndex = 0;

	// Ajout des bullet points
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		dot.className = 'dot';
		dotContainer.appendChild(dot);
	}

	// Mettre en surbrillance le point correspondant à la diapositive en cours
	function updateDots() {
		const dots = document.querySelectorAll('#dotContainer .dot');
		dots.forEach((dot, index) => {
			dot.classList.remove('dot_selected');
			if (index === currentSlideIndex) {
				dot.classList.add('dot_selected');
			}
		});
	}

	// Fonction pour mettre à jour l'image dans le slider et la tagline
	function updateSliderContent() {
		const sliderImage = document.getElementById('slide');
		const currentSlide = slides[currentSlideIndex];

		sliderImage.src = `./assets/images/slideshow/${currentSlide.image}`;
		taglineElement.innerHTML = currentSlide.tagLine;

	}

	// Logique pour passer à l'image précédente dans le slider
function showPreviousSlide() {
	if (currentSlideIndex > 0) {
	  currentSlideIndex--;
	} else {
	  // Si on est à la première image, afficher la dernière image
	  currentSlideIndex = slides.length - 1;
	}
	updateDots();
	updateSliderContent();
  }


  // Logique pour passer à l'image suivante dans le slider
function showNextSlide() {
	if (currentSlideIndex < slides.length - 1) {
	  currentSlideIndex++;
	} else {
	  // Si on est à la dernière image, afficher la première image
	  currentSlideIndex = 0;
	}
	updateDots();
	updateSliderContent();
  }


	arrowLeft.addEventListener('click', showPreviousSlide);
arrowRight.addEventListener('click', showNextSlide);
updateDots(); // Mettre à jour les points initiaux
updateSliderContent(); // Mettre à jour le contenu initial du slider
});