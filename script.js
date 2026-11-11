
const numSlides =25; // Total number of slides

// Jin slides ke liye .png ki jagah .mp4 chalana hai, unke number yahan likho
const videoSlides = [3, 10, 13, 17];

// Function to create image/video elements dynamically
function createImageElements() {
  const slidesContainer = document.getElementById('slidesContainer');

  for (let i = 1; i <= numSlides; i++) {
    let el;
    if (videoSlides.includes(i)) {
      el = document.createElement('video');
      el.src = `${i}.mp4`;
      el.controls = true;
      el.playsInline = true;
      el.preload = 'metadata';
    } else {
      el = document.createElement('img');
      el.src = `${i}.png`;
      el.alt = `Slide ${i}`;
    }
    el.classList.add('slide');
    slidesContainer.appendChild(el);
  }
}

// Function to control slideshow navigation
let slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Function to play the kids cheer sound
// function playKidsCheer() {
//   const audio = new Audio('kids-cheer.mp3');
//   audio.play();
// }

function showSlides(n) {
  const slides = document.querySelectorAll('.slides .slide');

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }

  // Hide all slides (aur koi video chal raha ho to rok do)
  slides.forEach(slide => {
    slide.style.display = 'none';
    if (slide.tagName === 'VIDEO') {
      slide.pause();
      slide.currentTime = 0;
    }
  });

  // Display the current slide
  const current = slides[slideIndex];
  current.style.display = 'block';
  if (current.tagName === 'VIDEO') {
    current.play().catch(() => {}); // autoplay block ho to controls se chala sakte hain
  }

    // Check if it's the last slide
    // if (slideIndex === slides.length - 1) {
    //   playKidsCheer();
    // }
}

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
  createImageElements();
  showSlides(slideIndex);
});
