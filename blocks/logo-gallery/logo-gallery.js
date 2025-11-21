/**
 * Logo Gallery Block
 * 5 logo images in a row
 * Based on Figma design: node 751:40574
 * Table structure: 1 row with 5 columns (one logo per column)
 */

export default function decorate(block) {
  const rows = Array.from(block.children);

  // Create grid container
  const grid = document.createElement('div');
  grid.className = 'lg-grid';

  // Process first row (contains all 5 logos)
  if (rows[0]) {
    const cells = Array.from(rows[0].children);

    cells.forEach((cell) => {
      const logoWrapper = document.createElement('div');
      logoWrapper.className = 'lg-logo';

      const img = cell.querySelector('img, picture');
      if (img) {
        logoWrapper.appendChild(img.cloneNode(true));
      }

      grid.appendChild(logoWrapper);
    });
  }

  // Replace block content
  block.innerHTML = '';
  block.appendChild(grid);
}
