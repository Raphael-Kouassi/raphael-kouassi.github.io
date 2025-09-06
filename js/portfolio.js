
let index = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const total = dots.length;
const section = document.getElementById("projets");

// Couleurs de fond personnalisées pour chaque image
const bgColors = [
  "#f9ebd1", // ruche.png
  "#faf8f7", // led.png
];

function showSlide(n) {
  index = (n + total) % total;
  slides.style.transform = `translateX(${-index * 100}vw)`;

  // Points actifs
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");

  // Changer couleur de fond
  section.style.backgroundColor = bgColors[index];
}

// Clic sur les points
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

// Défilement automatique toutes les 4s
setInterval(() => {
  showSlide(index + 1);
}, 4000);

// Couleur de départ
window.onload = () => {
  section.style.backgroundColor = bgColors[0];
};
