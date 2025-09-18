window.onscroll = function () {
  var header = document.getElementById("header");
  var logo = document.getElementById("logo");
  if (window.scrollY > 50) {
    header.style.backgroundImage = "linear-gradient(to right, rgb(9, 40, 61), rgb(21, 92, 138)"; // เปลี่ยนเป็นสีใสเมื่อเลื่อน
    header.style.opacity = "0.95"; // เปลี่ยนโปร่งใสของโลโก้
  } else {
    header.style.backgroundImage = "linear-gradient(to right, rgb(9, 40, 61), rgb(21, 92, 138)"; // กลับเป็นทึบ
    header.style.opacity = "1"; // เปลี่ยนเป็นทึบ
  }
};
function toggleMenu() {
  var nav = document.getElementById("navbar");
  nav.classList.toggle("responsive");
} //ปุ่ม Navbar 3 ขีด


const sliderTrack = document.getElementById('sliderTrack');
const sliderContainer = document.getElementById('sliderContainer');
const slide = document.querySelector('.slide');
const totalSlides = document.querySelectorAll('.slide').length;
const slidesToShow = 4;
let currentIndex = 0;

function getSlideWidth() {
  return slide.offsetWidth;
}

function updateSlider() {
  sliderTrack.style.transition = 'transform 0.4s ease';
  sliderTrack.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;
}
if (currentIndex > totalSlides - slidesToShow) {
  currentIndex = totalSlides - slidesToShow;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex > totalSlides - slidesToShow) {
    currentIndex = 0;
  }
  updateSlider();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides - slidesToShow;
  }

  updateSlider();
}

// 📱 รองรับการลากด้วยนิ้ว (Touch events)
let startX = 0;
let currentTranslate = 0;

sliderContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  sliderTrack.style.transition = 'none';
});

sliderContainer.addEventListener('touchmove', (e) => {
  const moveX = e.touches[0].clientX;
  const diff = moveX - startX;
  sliderTrack.style.transform = `translateX(-${currentIndex * getSlideWidth() - diff}px)`;
});

sliderContainer.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const delta = endX - startX;

  if (delta > 50) {
    prevSlide();
  } else if (delta < -50) {
    nextSlide();
  } else {
    updateSlider(); // กลับที่เดิม
  }
});

window.addEventListener('resize', updateSlider);
function getSlideWidth() {
  return document.querySelector('.slide').offsetWidth;
  window.addEventListener('resize', updateSlider);
}

//สไลด์ภาพ 3 รุป

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function showImage(src, descriptionHTML) {
  const lineButtonHTML = `
<a href="https://lin.ee/dscnJys" class="line-button" target='_blank'>ติดต่อเรา</a>
  `;
  document.getElementById('mainImage').src = src;
  document.getElementById('imageDescription').innerHTML = descriptionHTML + lineButtonHTML;
}

//gallery
//dot

// function updateDots(grid) {
// const wrapper = grid.closest('.gallery-wrapper');
// const dots = wrapper.querySelector('.dots');
// const items = grid.querySelectorAll('div');
// const scrollLeft = grid.scrollLeft;
// const activeIndex = Math.round(scrollLeft / grid.clientWidth);


// dots.innerHTML = '';
// for (let i = 0; i < items.length; i++) {
// const dot = document.createElement('span');
// dot.classList.add('dot');
// if (i === activeIndex) dot.classList.add('active');
// dots.appendChild(dot);
// }
// }


// window.addEventListener('load', () => {
// document.querySelectorAll('.gallery-grid').forEach(updateDots);
// });

//pointer

function updateDots(grid) {
  const wrapper = grid.closest('.gallery-wrapper');
  const dots = wrapper.querySelector('.dots');
  const items = grid.querySelectorAll('div');
  const scrollLeft = grid.scrollLeft;
  const activeIndex = Math.round(scrollLeft / grid.clientWidth);


  dots.innerHTML = '';
  for (let i = 0; i < items.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === activeIndex) dot.classList.add('active');
    dots.appendChild(dot);
  }
}


window.addEventListener('load', () => {
  document.querySelectorAll('.gallery-grid').forEach(updateDots);
});

function scrollGallery(button, direction) {
  const grid = button.closest('.gallery-wrapper').querySelector('.gallery-grid');
  const scrollAmount = grid.clientWidth * 0.8;
  grid.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
}

// window.onscroll = function () {
//   var header = document.getElementById("header");
//   var logo = document.getElementById("logo");
//   if (window.scrollY > 50) {
//     header.style.backgroundImage = "linear-gradient(to right, rgb(9, 40, 61), rgb(21, 92, 138)"; // เปลี่ยนเป็นสีใสเมื่อเลื่อน
//     header.style.opacity = "0.95"; // เปลี่ยนโปร่งใสของโลโก้
//   } else {
//     header.style.backgroundImage = "linear-gradient(to right, rgb(9, 40, 61), rgb(21, 92, 138)"; // กลับเป็นทึบ
//     header.style.opacity = "1"; // เปลี่ยนเป็นทึบ
//   }
// };
// function toggleMenu() {
//   var nav = document.getElementById("navbar");
//   nav.classList.toggle("responsive");
//} ปุ่ม Navbar 3 ขีด
