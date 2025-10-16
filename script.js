// Theme toggle
const toggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

// Time display (milliseconds)
const timeEl = document.getElementById("time");

function updateTime() {
  timeEl.textContent = `Current Time (ms): ${Date.now()}`;
}
updateTime();
setInterval(updateTime, 1000);

// Avatar upload
const avatarInput = document.getElementById("avatar-upload");
const avatarImage = document.getElementById("avatar");

avatarInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    avatarImage.src = imageUrl;
  }
});
