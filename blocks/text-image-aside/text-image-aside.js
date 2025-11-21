/**
 * Text Image Aside Block
 * Two-column layout with text content on left and image on right
 * Based on Figma design: node 750:17216
 */

export default function decorate(block) {
  const rows = Array.from(block.children);

  // Create container
  const container = document.createElement('div');
  container.className = 'tia-container';

  // Create text content column
  const textCol = document.createElement('div');
  textCol.className = 'tia-text';

  // Row 0: Heading
  if (rows[0]) {
    const heading = document.createElement('h2');
    heading.className = 'tia-heading';
    heading.textContent = rows[0].textContent.trim();
    textCol.appendChild(heading);
  }

  // Row 1: Body text
  if (rows[1]) {
    const body = document.createElement('div');
    body.className = 'tia-body';
    const para = document.createElement('p');
    para.textContent = rows[1].textContent.trim();
    body.appendChild(para);
    textCol.appendChild(body);
  }

  container.appendChild(textCol);

  // Create image column
  const imageCol = document.createElement('div');
  imageCol.className = 'tia-image';

  // Row 2: Image
  if (rows[2]) {
    const img = rows[2].querySelector('img, picture');
    if (img) {
      imageCol.appendChild(img.cloneNode(true));
    }
  }

  container.appendChild(imageCol);

  // Replace block content
  block.innerHTML = '';
  block.appendChild(container);
}
