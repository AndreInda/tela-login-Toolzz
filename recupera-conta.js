let index = 1;
showSlides(index);

function addSlides(n) {
  showSlides(index += n)
}

function currentSlide(n) {
  showSlides(index = n)
}

function showSlides(n) {
  let slidesfade = document.getElementsByClassName("slidesfade");
  let dots = document.getElementsByClassName("dot");

  if (n > slidesfade.length) {
    index = 1;
  }

  if (n < 1) {
    index = slidesfade.length
  }

  for (let i=0; i<slidesfade.length; i++) {
    slidesfade[i].style.display = 'none';
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slidesfade[index-1].style.display = "flex";
  dots[index-1].className += " active";
}

