var slides = document.getElementsByClassName("mySlides");
var slideIndex = 1; 
//firstrune to set style is none
showSlides(); 
//recall function after 4 second
setInterval(function(){showSlides(slideIndex += 1);}, 4000);

/**
 * Back or next image base on user click
 * @param {n is 1 or -1}
 *
 */
function plusSlides(n){
	showSlides(slideIndex += n);
}
/**
 * Callback ShowSlide with param for chose slide to show
 * @param {current click image}
 *
 */
function currentSlide(n){
	showSlides(slideIndex = n);
}
/**
 * Function main to show slide 
 * @param n
 *
 */
function showSlides(n){
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	}
	slides[slideIndex - 1].style.display = "block";
}
