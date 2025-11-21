/**
 * Button List Centered Block
 * Centered heading with wrapping outlined buttons
 * Based on Figma design: node 750:17259
 */

export default function decorate(block) {
  const rows = Array.from(block.children);

  // Create container
  const container = document.createElement('div');
  container.className = 'blc-container';

  // Row 0: Heading
  if (rows[0]) {
    const heading = document.createElement('h2');
    heading.className = 'blc-heading';
    heading.textContent = rows[0].textContent.trim();
    container.appendChild(heading);
  }

  // Remaining rows: Buttons
  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.className = 'blc-buttons';

  for (let i = 1; i < rows.length; i++) {
    const link = rows[i].querySelector('a');
    if (link) {
      buttonsWrapper.appendChild(link.cloneNode(true));
    }
  }

  container.appendChild(buttonsWrapper);

  // Replace block content
  block.innerHTML = '';
  block.appendChild(container);
}
