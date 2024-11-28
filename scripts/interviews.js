var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});



//
const openModalButton = document.getElementById('open-modal-btn');
const modal = document.getElementById('my-modal');
const closeModalButton = document.getElementById('close-modal-btn');

// Function to show the modal
function openModal() {
  modal.style.display = 'block'; // Change display to block to show the modal
}

// Function to close the modal (optional, triggered by close button)
function closeModal() {
  modal.style.display = 'none'; // Change display back to none to hide the modal
}

// Add click event listener to the open modal button
openModalButton.addEventListener('click', openModal);

// Optional: Add click event listener to the close button (if present)
closeModalButton.addEventListener('click', closeModal);
