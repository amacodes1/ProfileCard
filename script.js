// Theme toggling
const toggleDesktop = document.getElementById("theme-toggle");
const toggleMobile = document.getElementById("theme-toggle-mobile");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  if (toggleDesktop) toggleDesktop.checked = true;
  if (toggleMobile) toggleMobile.checked = true;
}

function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}

if (toggleDesktop)
  toggleDesktop.addEventListener("change", () =>
    setTheme(toggleDesktop.checked)
  );
if (toggleMobile)
  toggleMobile.addEventListener("change", () => setTheme(toggleMobile.checked));

// Avatar upload
const avatarInput = document.getElementById("avatar-upload");
const avatarImage = document.getElementById("avatar");
if (avatarInput && avatarImage) {
  avatarInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) avatarImage.src = URL.createObjectURL(file);
  });
}

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.classList.toggle("overlay-active");
  });
}

// Time updater
const timeEl = document.getElementById("time");
if (timeEl) {
  setInterval(() => {
    timeEl.textContent = `Current Time(ms): ${Date.now()}`;
  }, 1000);
}

// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");

      // Clear previous errors
      document
        .querySelectorAll(".error")
        .forEach((el) => (el.textContent = ""));

      // Validation rules
      if (!name.value.trim()) {
        showError("error-name", "Full name is required");
        isValid = false;
      }

      if (!email.value.trim()) {
        showError("error-email", "Email is required");
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showError("error-email", "Enter a valid email");
        isValid = false;
      }

      if (!subject.value.trim()) {
        showError("error-subject", "Please select a subject.");
        isValid = false;
      }

      if (!message.value.trim()) {
        showError("error-message", "Message is required.");
        isValid = false;
      } else if (message.value.trim().length < 10) {
        showError(
          "error-message",
          "Message must be at least 10 characters long."
        );
        isValid = false;
      }

      if (isValid) {
        form.reset();
        showSuccessPopup(
          "Message Sent Successfully!",
          "Thank you for contacting us. We'll get back to you shortly."
        );
      }
    });
  }

  function showError(id, message) {
    const errorEl = document.getElementById(id);
    if (errorEl) errorEl.textContent = message;
  }

  function showSuccessPopup(title, message) {
    const popup = document.createElement("div");
    popup.className = "success-popup";
    popup.innerHTML = `
      <h3>${title}</h3>
      <p>${message}</p>
    `;
    document.body.appendChild(popup);

    // Animate in
    setTimeout(() => popup.classList.add("show"), 50);

    // Auto remove after 4 seconds
    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => popup.remove(), 300);
    }, 4000);
  }
});
