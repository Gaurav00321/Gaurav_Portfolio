const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav_links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

var typed = new Typed("#element", {
  strings: [
    "I'm <span class='underlined'>a IMCA Student . . .</span>",
    "I'm <span class='underlined'>a Java and C++ Software Developer.</span>",
  ],
  backDelay: 2000, // 2 seconds delay before backspacing
  loop: true,
  cursorChar: "|", // Blinking cursor character
  typeSpeed: 90,
  backspeed: 1,
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
  const timelineItems = document.querySelectorAll(".timeline-item");

  window.addEventListener("scroll", () => {
    timelineItems.forEach((item) => {
      if (item.getBoundingClientRect().top < window.innerHeight * 0.75) {
        item.classList.add("show");
      }
    });
  });
});
