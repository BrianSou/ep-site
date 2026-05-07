
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const currentPath = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (!href) return;
  const end = href.split('/').pop();
  if ((currentPath === '' && end === 'index.html') || currentPath === end) {
    link.setAttribute('aria-current', 'page');
  }
});

const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 }) : null;

document.querySelectorAll('.reveal').forEach(el => {
  if (observer) observer.observe(el); else el.classList.add('visible');
});

const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach(card => {
      const categories = card.dataset.category.split(' ');
      const show = filter === 'all' || categories.includes(filter);
      card.style.display = show ? '' : 'none';
    });
  });
});

const projectSearch = document.querySelector('#project-search');
if (projectSearch) {
  projectSearch.addEventListener('input', () => {
    const q = projectSearch.value.trim().toLowerCase();
    cards.forEach(card => {
      const haystack = (card.dataset.title + ' ' + card.dataset.summary + ' ' + card.dataset.category).toLowerCase();
      card.style.display = haystack.includes(q) ? '' : 'none';
    });
  });
}

const copyButton = document.querySelector('[data-copy-email]');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const email = copyButton.dataset.copyEmail;
    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = 'Copied email';
      setTimeout(() => copyButton.textContent = 'Copy email', 1600);
    } catch (_) {
      copyButton.textContent = email;
    }
  });
}
