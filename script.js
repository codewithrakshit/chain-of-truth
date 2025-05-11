window.onload = function() {
  // Smooth fade-in effect for the hero section
  document.querySelector('.hero').classList.add('fade-in');
};
// Function to check when feature-box comes into view
function revealOnScroll() {
  const featureBoxes = document.querySelectorAll('.feature-box , .faq-container');
  const windowHeight = window.innerHeight;

  featureBoxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      
      if (boxTop < windowHeight - 100) { // Adjust threshold
          box.classList.add('visible');
      }
  });
}

// Run the function on page load and scroll
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
