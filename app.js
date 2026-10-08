'use strict';

// Add only contact details approved for public display.
const contact = { email: '', phone: '' };

const themeButton = document.querySelector('.theme-toggle');
const root = document.documentElement;
const setTheme = (theme) => {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(theme === 'light'));
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`);
  document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f7f8f2' : '#101312';
};
try {
  const savedTheme = localStorage.getItem('mustafa-portfolio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme);
} catch { /* The site also works when browser storage is unavailable. */ }
themeButton.hidden = false;
themeButton.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
  setTheme(nextTheme);
  try { localStorage.setItem('mustafa-portfolio-theme', nextTheme); } catch { /* Optional preference. */ }
});

document.querySelector('#year').textContent = String(new Date().getFullYear());

if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.navigation a')];
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    for (const link of links) {
      if (link.hash === `#${visible.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }, { rootMargin: '-20% 0px -45% 0px', threshold: [0, 0.2, 0.5] });
  for (const link of links) {
    const section = document.querySelector(link.hash);
    if (section) observer.observe(section);
  }
}

if (contact.email) {
  const emailLink = document.querySelector('#contact-email');
  emailLink.textContent = contact.email;
  emailLink.href = `mailto:${contact.email}`;
  document.querySelector('.contact-direct').hidden = false;
}
if (contact.phone) {
  const phoneLink = document.querySelector('#contact-phone');
  phoneLink.textContent = contact.phone;
  phoneLink.href = `tel:${contact.phone.replace(/[^+\d]/g, '')}`;
  phoneLink.hidden = false;
  document.querySelector('.contact-direct').hidden = false;
}
