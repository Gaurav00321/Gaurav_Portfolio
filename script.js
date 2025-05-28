const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav_links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function handleScrollAnimations() {
  // Helper function to apply animation
  function applyAnimation(element, animation) {
    if (!element) return;
    if (isInViewport(element)) {
      element.style.animation = `${animation} 1s ease-out forwards`;
    } else {
      element.style.animation = "none";
      element.style.opacity = "0";
    }
  }

  // Main section animation
  applyAnimation(document.querySelector(".main"), "fadeInSlideUp");

  // Background image animation
  applyAnimation(document.querySelector(".bg"), "fadeInSlideRight");

  // Intro section animation
  applyAnimation(document.querySelector(".intro"), "fadeInSlideLeft");

  // About Me section animation
  applyAnimation(document.querySelector(".about-me"), "fadeInSlideUp");

  // Skills section animation
  applyAnimation(document.querySelector(".skills-section"), "fadeInSlideUp");

  // GitHub Projects animation
  applyAnimation(document.querySelector(".github-projects"), "fadeInSlideUp");

  // Project Cards animation
  applyAnimation(document.querySelector(".project-card"), "fadeInSlideRight");

  // Self Study section animation
  applyAnimation(
    document.querySelector(".self-study-section"),
    "slideInFromBottom"
  );

  // Concept Cards animation
  applyAnimation(document.querySelector(".concept-card"), "slideInFromLeft");

  // Timeline section animation
  applyAnimation(document.querySelector(".timeline"), "fadeInSlideUp");

  // Certifications section animation
  applyAnimation(
    document.querySelector(".certifications-section"),
    "fadeInSlideUp"
  );

  // Contact section animations
  const contactLeft = document.querySelector(".contact-left");
  const contactRight = document.querySelector(".contact-right");

  if (contactLeft && contactRight) {
    if (isInViewport(contactLeft) && isInViewport(contactRight)) {
      contactLeft.classList.add("show");
      contactRight.classList.add("show");
    } else {
      contactLeft.classList.remove("show");
      contactRight.classList.remove("show");
    }
  }
}

// Add scroll event listener
window.addEventListener("scroll", handleScrollAnimations);

// Initial check on page load
handleScrollAnimations();

// Typed.js initialization
var typed = new Typed("#element", {
  strings: [
    "<span style='font-family: Poppins, sans-serif;'>Founder of ThinkFlowGPT and Chief Scientist at amTop.</span>"
  ],
  backDelay: 2000, // 2 seconds delay before backspacing
  loop: true,
  cursorChar: "|", // Blinking cursor character
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
  smartBackspace: true,
  onStringTyped: (arrayPos, self) => {
    self.cursor.style.fontSize = "30px"; // Match cursor size to font size
  },
  showCursor: true, // Show only the cursor, not blinking text
});

window.onload = function () {
  // Set the font size after the page fully loads to prevent size issues
  document.querySelector(".typed-cursor").style.fontSize = "30px";
};

document.addEventListener("DOMContentLoaded", () => {
  const journeySection = document.querySelector(".journey");

  function handleJourneyScroll() {
    if (!journeySection) return;

    const timelineItems = document.querySelectorAll(".timeline-item");

    timelineItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;

      if (isVisible) {
        setTimeout(() => {
          item.classList.add("show");
        }, index * 300); // Staggered delay
      } else {
        item.classList.remove("show"); // Only reset when fully out of view
      }
    });
  }

  // Attach scroll event listener
  window.addEventListener("scroll", handleJourneyScroll);

  // Initial check in case the section is already in view
  handleJourneyScroll();
});
