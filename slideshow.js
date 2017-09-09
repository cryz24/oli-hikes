// set the slideIndex to 1 to display the first photo
var slideIndex = 1;
// then call showSlides() to display the first image
showSlides(slideIndex);

// when the user clicks any of the buttons, call plusSlides()
// the plusSlides() function subtracts/adds one to the slideIndex()
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

/*
------------------------------------------
the showSlides() function hides 
(display="none") all elements
with the class name "mySlides"
and displays (display="block") the
element with the given slideIndex.

if the slideIndex is higher than
the number of elements (slides.length),
the slideIndex is set to zero.

if the slideIndex is less than 1 it is 
set to number of elements (slides.length).
------------------------------------------
*/

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}