window.addEventListener("load", () => {
  const fifty = document.querySelector(".fifty");
  const one = document.querySelector(".one");
  const intro = document.querySelector(".intro");
  const header = document.querySelector("header");

  // GSAP timeline for intro
  let tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.to(fifty, { opacity: 1, duration: 1 })       // fade in "Fifty"
    .to(one, { opacity: 1, duration: 1 }, "+=0.5") // fade in "One" below
    .to([fifty, one], { opacity: 0, duration: 1, delay: 1 }) // fade out both
    .to(intro, { opacity: 0, duration: 1, onComplete: () => {
        intro.style.display = "none";
        header.style.opacity = 1;
        document.body.style.overflowY = "auto"; // unlock scroll
      }
    });
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
