/**
 * Editorial Cards 4up Block
 * 4 image-only cards in a row
 * Based on Figma design: node 751:44687
 * Table structure: 1 row with 4 columns (one image per column)
 */

export default function decorate(block) {
  const rows = Array.from(block.children);

  // Create grid container
  const grid = document.createElement('div');
  grid.className = 'ec4-grid';

  // Process first row (contains all 4 images)
  if (rows[0]) {
    const cells = Array.from(rows[0].children);

    cells.forEach((cell) => {
      const card = document.createElement('div');
      card.className = 'ec4-card';

      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'ec4-image';

      const img = cell.querySelector('img, picture');
      if (img) {
        imageWrapper.appendChild(img.cloneNode(true));
      }

      card.appendChild(imageWrapper);
      grid.appendChild(card);
    });
  }

  // Replace block content
  block.innerHTML = '';
  block.appendChild(grid);
}
