///////////////////////////////////////////////
// Sticky Navigation //
//////////////////////////////////////////////
const navBar = document.getElementById('navbar');
const hero = document.getElementById('hero');

const stickyNav = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navBar.classList.add('sticky-nav');
    } else {
      navBar.classList.remove('sticky-nav');
    }
  });
};

const observer = new IntersectionObserver(stickyNav, {
  threshold: 0.5
});

observer.observe(hero);
