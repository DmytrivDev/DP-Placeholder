document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.decentral__header');
  const title = document.querySelector('.decentral__title');
  const text = document.querySelector('.decentral__text');
  const footer = document.querySelector('.decentral__footer');

  if (header) {
    setTimeout(function () {
      header.classList.add('up');
    }, 300);
  }

  if (title) {
    setTimeout(function () {
      title.classList.add('up');
    }, 900);
  }

  if (text) {
    setTimeout(function () {
      text.classList.add('up');
    }, 1100);
  }

  if (footer) {
    setTimeout(function () {
      footer.classList.add('up');
    }, 1500);
  }
});
