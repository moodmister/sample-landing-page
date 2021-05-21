const slides = $('.slide');

$(() => {
  var slideIndex = 0;
  const showSlides = () => {
    slides.css('display', 'none');
    slides[slideIndex].style.display = 'block';
    slideIndex++;
    if (slideIndex > slides.length - 1)
      slideIndex = 0;
    setTimeout(showSlides, 2000);
  }

  showSlides();
});