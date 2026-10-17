import {repository} from '../data.js';

export async function memoriesPage(root) {
  const photos = await repository.getMemories();
  let index = 0;
  let start = null;
  root.className = 'memories-page enter';
  root.innerHTML = `
    <p class="eyebrow">worlds best mom and son photo album</p>
    <h1 class="hand">our memories</h1>
    <figure class="memory">
      <div class="photo-frame"><img decoding="async"></div>
      <figcaption>
        <p class="memory-date"></p>
        <h2 class="hand"></h2>
        <p class="memory-caption"></p>
      </figcaption>
    </figure>
    <div class="memory-controls">
      <button class="prev" aria-label="Previous photo">←</button>
      <button class="next" aria-label="Next photo">→</button>
    </div>
    <p class="photo-status" role="status"></p>`;
  const frame = root.querySelector('.photo-frame');
  const image = root.querySelector('img');
  const status = root.querySelector('.photo-status');
  image.draggable = false;
  function render() {
    const photo = photos[index];
    if (!photo) {
      image.hidden = true;
      status.textContent = 'Space for our memories.';
      return;
    }
    image.hidden = false;
    status.textContent = '';
    image.style.visibility = 'visible';
    image.src = photo.image;
    image.alt = photo.alt;
    for (const [selector, value] of [
      ['.memory-date', photo.date], ['h2', photo.title], ['.memory-caption', photo.caption]
    ]) {
      const element = root.querySelector(selector);
      element.textContent = value || '';
      element.hidden = !value;
    }
    root.querySelector('figcaption').hidden = !photo.date && !photo.title && !photo.caption;
  }
  function step(direction) {
    if (!photos.length) return;
    index = (index + direction + photos.length) % photos.length;
    render();
  }
  image.onerror = () => {
    image.style.visibility = 'hidden';
      status.textContent = 'This photo couldn’t load!';
  };
  image.onload = () => { image.style.visibility = 'visible'; status.textContent = ''; };
  root.querySelector('.prev').onclick = () => step(-1);
  root.querySelector('.next').onclick = () => step(1);
  frame.addEventListener('pointerdown', event => { start = event.clientX; });
  frame.addEventListener('pointerup', event => {
    if (start !== null && Math.abs(event.clientX - start) > 45) step(event.clientX < start ? 1 : -1);
    start = null;
  });
  frame.addEventListener('pointercancel', () => { start = null; });
  render();
  return () => { image.onload = null; image.onerror = null; };
}
