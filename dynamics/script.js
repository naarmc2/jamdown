//SCROLLBAR
  const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Handle scrollbar thumb drag
      scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

    // Update thumb position on mouse move
    const handleMouseMove = (e) => {
    const deltaX = e.clientX - startX;
    const newThumbPosition = thumbPosition + deltaX;
  
    // Ensure the scrollbar thumb stays within bounds
    const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
    const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

    scrollbarThumb.style.left = `${boundedPosition}px`;
    imageList.scrollLeft = scrollPosition;
  }
  
    // Remove event listeners on mouse up
    const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }
  
  // Add event listeners for drag interaction
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });
  
  // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
    button.addEventListener("click", () => {
    const direction = button.id === "prev-slide" ? -1 : 1;
    const scrollAmount = imageList.clientWidth * direction;
    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
    });
  
  // Show or hide slide buttons based on scroll position
    const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }
  
  // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
    }
  
  // Call these two functions when image list scrolls
      imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
  }
  
  window.addEventListener("resize", initSlider);
  window.addEventListener("load", initSlider);

//NAVBAR
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    // Get the navbar
    var navbar = document.getElementByClassName("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {  
      if (  window.pageYOffSet || document.documentElement.scrollTop
        >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }



//FOOTER
   const scriptURL = 'https://script.google.com/macros/s/AKfycbz2ENiuI4yWsjCWBQyjKFZSvopw4ar9x012M0XFAsylvL31RwJRCxP8eYJzl3ZRRWlz/exec'
   const form = document.forms['submit-to-google-sheet']
   
   form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
       .then(response => console.log('Success!', response))
        msg.innerHTML = "Thank You For Subscribing!"
         setTimeout(function(){
           msg.innerHTML = ""
         }, 5000)
         form.reset()
       .catch(error => console.error('Error!', error.message))
   })


