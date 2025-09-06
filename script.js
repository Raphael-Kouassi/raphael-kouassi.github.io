const sections = document.querySelectorAll('section');
const totalSections = sections.length;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const vh = window.innerHeight;

  // Index de la section visible (entre 0 et totalSections -1)
  const sectionIndex = Math.floor(scrollTop / vh);

  // Progression du scroll dans la section (entre 0 et 1)
  const sectionProgress = (scrollTop % vh) / vh;

  sections.forEach((sec, idx) => {
    if (idx === sectionIndex) {
      sec.style.opacity = 1 - sectionProgress;
      sec.style.zIndex = 10;
    } else if (idx === sectionIndex + 1) {
      sec.style.opacity = sectionProgress;
      sec.style.zIndex = 11;
    } else {
      sec.style.opacity = 0;
      sec.style.zIndex = 0;
    }
  });
});

// Navigation menu avec scroll smooth programmé
document.querySelectorAll('nav a').forEach((link, idx) => {
  link.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: idx * window.innerHeight,
      behavior: 'smooth'
    });
  });
});
