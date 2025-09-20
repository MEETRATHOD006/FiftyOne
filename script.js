window.addEventListener("load", () => {
  const fifty = document.querySelector(".fifty");
  const one = document.querySelector(".one");
  const intro = document.querySelector(".intro");
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo");
  const nav = document.querySelector("nav");
  const home = document.getElementById("home"); // your first page section

  // GSAP timeline for intro
  let tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.to(fifty, { opacity: 1, duration: 1 })       // fade in "Fifty"
    .to(one, { opacity: 1, duration: 1 }, "+=0.5") // fade in "One"
    .to([fifty, one], { opacity: 0, duration: 1, delay: 1 }) // fade out both
    .to(intro, { opacity: 0, duration: 1, onComplete: () => {
        intro.style.display = "none";
        document.body.style.overflowY = "auto"; // unlock scroll
      }
    })
    // Step 1: Fade in header
    .fromTo(header, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1 })
    .fromTo(logo, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1 }, "-=0.5")
    .fromTo(nav, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1 }, "-=0.5")
    // Step 2: Fade in Home content
    .fromTo(home, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "+=0.3");
});




// WhatsApp form submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Construct WhatsApp message
  const text = `Hello! My name is ${name}.\nEmail: ${email}\nMessage: ${message}`;
  const whatsappNumber = "919727769475"; // replace with your number (country code + number, e.g., 919876543210)
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  // Open WhatsApp in new tab
  window.open(url, "_blank");

  // Reset form
  contactForm.reset();
});

// Mobile hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll("#navMenu ul li a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Hero animation
window.addEventListener("load", () => {
  gsap.from(".hero-title", { y: 50, opacity: 0, duration: 1, delay: 0.5, ease: "power3.out" });
  gsap.from(".hero-subtitle", { y: 50, opacity: 0, duration: 1, delay: 1, ease: "power3.out" });
  gsap.from(".hero-button", { y: 50, opacity: 0, duration: 1, delay: 1.5, ease: "power3.out" });
  gsap.from(".hero-image img", { scale: 0.95, opacity: 0, duration: 1, delay: 2, ease: "power3.out" });
});

