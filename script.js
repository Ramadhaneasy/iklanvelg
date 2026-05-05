const navToggle = document.querySelector(".nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox?.querySelector("img");
const lightboxClose = lightbox?.querySelector(".lightbox-close");

document.querySelectorAll(".gallery-item").forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.getAttribute("data-img");
    if (!lightbox || !lightboxImg || !img) return;
    lightboxImg.src = img;
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

const copyButton = document.getElementById("copyPhone");
const toast = document.getElementById("toast");

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("0823124224443");
    toast?.classList.add("show");
    setTimeout(() => toast?.classList.remove("show"), 1800);
  } catch (error) {
    alert("Nomor WA: 0823124224443");
  }
});
