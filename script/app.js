const CONTENT_ARTICLE_TEASERS = [
  "This is an article about first party that happened this weekend",
  "This is an article about second party that happened this weekend",
  "This is an article about third party that happened this weekend" ];

const lazyLoad = () => {
  const images = document.querySelectorAll('img');

  const lazyImageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) { return; }
      const image = entry.target;
      if (!image.dataset.src) { return; }
      image.src = image.dataset.src;
      lazyImageObserver.unobserve(image);
    });
  });

  images.forEach((entry) => {
    lazyImageObserver.observe(entry);
  });
};

const dynamicContent = () => {
  const teasers = document.querySelectorAll('.teaser__text');

  // create dynamic content
  teasers.forEach((teaser, index) => {
    teaser.innerHTML = CONTENT_ARTICLE_TEASERS[index];
  });
};

const initApp = () => {
  // lazyLoad();
  dynamicContent();
};

initApp();