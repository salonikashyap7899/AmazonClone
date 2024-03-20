document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const sliderImages = document.querySelector('.slider-image');
  const prevBtn = document.querySelector('.btn.prev');
  const nextBtn = document.querySelector('.btn.next');
  let counter = 0;
  const imageWidth = document.querySelector('.img-section').clientWidth;

  nextBtn.addEventListener('click', function () {
    if (counter < sliderImages.children.length - 1) {
      counter++;
      sliderImages.style.transform = `translateX(${-imageWidth * counter}px)`;
    }
  });

  prevBtn.addEventListener('click', function () {
    if (counter > 0) {
      counter--;
      sliderImages.style.transform = `translateX(${-imageWidth * counter}px)`;
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const sliderContainers = document.querySelectorAll('.slider-container');

  sliderContainers.forEach(function (sliderContainer) {
    const slider = sliderContainer.querySelector('.slider1');
    const slides = sliderContainer.querySelector('.slides');
    const prevBtn = sliderContainer.querySelector('.prev1');
    const nextBtn = sliderContainer.querySelector('.next1');
    let counter = 0;
    const slideWidth = sliderContainer.querySelector('.slides img').clientWidth;

    nextBtn.addEventListener('click', function () {
      if (counter < slides.children.length - 1) {
        counter++;
        slides.style.transform = `translateX(${-slideWidth * counter}px)`;
      }
    });

    prevBtn.addEventListener('click', function () {
      if (counter > 0) {
        counter--;
        slides.style.transform = `translateX(${-slideWidth * counter}px)`;
      }
    });

    // Function to toggle the reverse class
    const toggleReverse = function () {
      sliderContainer.classList.toggle('reverse');
    };

    // Event listener for the right panel button
    document.querySelector('.btn-container-right').addEventListener('click', toggleReverse);
  });
});


