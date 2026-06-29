const accordion = document.querySelector('[data-accordion]');

if (accordion) {
  accordion.addEventListener('click', (event) => {
    const toggle = event.target.closest('.faq__toggle');
    if (!toggle) return;

    const item = toggle.closest('.faq__item');
    const panelId = toggle.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';

    if (!item || !panel) return;

    toggle.setAttribute('aria-expanded', String(!isOpen));
    panel.hidden = isOpen;
    item.classList.toggle('is-open', !isOpen);

    const icon = toggle.querySelector('.faq__icon');
    if (icon) icon.textContent = isOpen ? '+' : '−';
  });
}
