// Popup modal for To-Do List App details
document.addEventListener("DOMContentLoaded", function () {
  const todoPopupLink = document.getElementById("todo-popup-link");
  const todoPopupModal = document.getElementById("todo-popup-modal");
  const todoPopupClose = document.getElementById("todo-popup-close");
  if (todoPopupLink && todoPopupModal && todoPopupClose) {
    todoPopupLink.addEventListener("click", function (e) {
      e.preventDefault();
      todoPopupModal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
    function closeTodoPopup() {
      todoPopupModal.classList.remove("show");
      document.body.style.overflow = "";
    }
    todoPopupClose.addEventListener("click", closeTodoPopup);
    window.addEventListener("click", function (event) {
      if (event.target === todoPopupModal) {
        closeTodoPopup();
      }
    });
  }
});

// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Typing animation for hero section
const codeText = `function createAwesomeApp() {
    const ideas = getUserRequirements();
    const design = createUserInterface(ideas);
    const backend = buildRobustAPI();
    const frontend = developResponsiveUI(design);
    
    return deploy(frontend + backend);
}

createAwesomeApp();`;

let i = 0;
const typingElement = document.getElementById("typing-code");

function typeWriter() {
  if (i < codeText.length) {
    typingElement.textContent += codeText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// Start typing animation when page loads
window.addEventListener("load", () => {
  setTimeout(typeWriter, 1000);
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".service-card, .portfolio-item, .stat")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
