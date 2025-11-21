/**
 * Text Block 3up Block
 * 3 text blocks side by side with heading, body, button, and link
 * Based on Figma design: node 751:42068
 * Table structure: 1 row with 3 columns (one block per column)
 */

export default function decorate(block) {
  const rows = Array.from(block.children);

  // Create grid container
  const grid = document.createElement('div');
  grid.className = 'tb3-grid';

  // Process first row (contains all 3 blocks)
  if (rows[0]) {
    const cells = Array.from(rows[0].children);

    cells.forEach((cell) => {
      const blockItem = document.createElement('div');
      blockItem.className = 'tb3-block';

      const paragraphs = cell.querySelectorAll('p');

      // First paragraph: Heading (with <strong>)
      if (paragraphs[0]) {
        const heading = document.createElement('h2');
        heading.className = 'tb3-heading';
        const strong = paragraphs[0].querySelector('strong');
        heading.textContent = strong ? strong.textContent.trim() : paragraphs[0].textContent.trim();
        blockItem.appendChild(heading);
      }

      // Second paragraph: Body
      if (paragraphs[1]) {
        const body = document.createElement('div');
        body.className = 'tb3-body';
        const para = document.createElement('p');
        para.textContent = paragraphs[1].textContent.trim();
        body.appendChild(para);
        blockItem.appendChild(body);
      }

      // Actions container
      const actions = document.createElement('div');
      actions.className = 'tb3-actions';

      // Third paragraph: Button
      if (paragraphs[2]) {
        const link = paragraphs[2].querySelector('a');
        if (link) {
          const button = document.createElement('a');
          button.href = link.href;
          button.className = 'tb3-button';
          button.textContent = link.textContent.trim();
          actions.appendChild(button);
        }
      }

      // Fourth paragraph: Text link
      if (paragraphs[3]) {
        const link = paragraphs[3].querySelector('a');
        if (link) {
          const textLink = document.createElement('a');
          textLink.href = link.href;
          textLink.className = 'tb3-link';
          textLink.textContent = link.textContent.trim();
          actions.appendChild(textLink);
        }
      }

      blockItem.appendChild(actions);
      grid.appendChild(blockItem);
    });
  }

  // Replace block content
  block.innerHTML = '';
  block.appendChild(grid);
}
