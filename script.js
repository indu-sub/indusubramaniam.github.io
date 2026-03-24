// ── Navbar: shadow on scroll & active link highlighting ──────────────────────
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

function onScroll() {
  // Shadow when scrolled
  navbar.classList.toggle('scrolled', window.scrollY > 10);

  // Active nav link
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Mobile nav toggle ─────────────────────────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinksList = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinksList.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinksList.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    navLinksList.classList.remove('open');
  }
});

// ── Experience tabs ───────────────────────────────────────────────────────────
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(`tab-${target}`).classList.add('active');
  });
});
