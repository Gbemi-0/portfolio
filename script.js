// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-reveal for sections
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Copy bookmarklet code fallback
const copyBtn = document.getElementById('copy-bookmarklet');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const code = document.getElementById('bookmarklet-code');
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(code.value);
      status.textContent = 'Copied!';
    } catch (err) {
      code.select();
      document.execCommand('copy');
      status.textContent = 'Copied!';
    }
    setTimeout(() => { status.textContent = ''; }, 2000);
  });
}
