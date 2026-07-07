/* ============================================================
   PROInstall – main scripts
============================================================ */

// --- Navbar scroll ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// --- Hamburger mobile ---
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// --- Active nav on scroll ---
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

// --- Scroll-triggered fade-in ---
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.1 });

document.querySelectorAll(
  '.service-card, .pillar, .why-card, .project-item, .client-logo, .contact-item'
).forEach(el => { el.classList.add('fade-in'); io.observe(el); });

// --- Project tabs ---
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const tab = btn.dataset.tab;
    document.querySelectorAll('.project-item').forEach(item => {
      item.style.display = (tab === 'all' || item.dataset.category === tab) ? '' : 'none';
    });
  });
});

// --- Contact form ---
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  form.querySelectorAll('[required]').forEach(f => {
    f.style.borderColor = '';
    if (!f.value.trim()) { f.style.borderColor = '#ef4444'; valid = false; }
  });

  if (!valid) return;

  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'A enviar…';

  setTimeout(() => {
    formSuccess.hidden = false;
    form.reset();
    btn.disabled = false;
    btn.textContent = 'Enviar Pedido';
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 1200);
});
