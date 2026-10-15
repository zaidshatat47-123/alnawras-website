(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'فتح القائمة');
    }));
  }
  const cfg = window.ALNAWRAS_CONFIG || {};
  const clean = value => String(value || '').replace(/\D/g, '');
  const phone = clean(cfg.phone);
  const whatsapp = clean(cfg.whatsapp || cfg.phone);
  const callLink = document.getElementById('call-link');
  const whatsappLink = document.getElementById('whatsapp-link');
  const status = document.getElementById('contact-status');
  if (phone && callLink) { callLink.href = `tel:+${phone}`; callLink.hidden = false; }
  if (whatsapp && whatsappLink) { whatsappLink.href = `https://wa.me/${whatsapp}`; whatsappLink.hidden = false; }
  if (status && (phone || whatsapp)) status.textContent = 'تأكد من أن الرقم يعود للشركة وأن الاتصال والواتساب يعملان قبل مشاركة الموقع.';
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();