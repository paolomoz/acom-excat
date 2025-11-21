/**
 * Cards Grid Block
 * Grid layout with cards (image, heading, body, CTA)
 * Based on Figma design: node 751:20616
 * Each row has 2 columns: image | content (heading, body, CTA)
 */

export default function decorate(block) {
  const rows = Array.from(block.children);

  // Create grid container
  const grid = document.createElement('div');
  grid.className = 'cg-grid';

  // Each row is one card with 2 columns
  rows.forEach((row) => {
    const cells = Array.from(row.children);
    if (cells.length < 2) return;

    const card = document.createElement('div');
    card.className = 'cg-card';

    // Column 0: Image
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'cg-image';
    const img = cells[0].querySelector('img, picture');
    if (img) {
      imageWrapper.appendChild(img.cloneNode(true));
    }
    card.appendChild(imageWrapper);

    // Column 1: Content (heading, body, CTA)
    const contentCell = cells[1];
    const paragraphs = contentCell.querySelectorAll('p');

    // First paragraph: Heading (extract from <strong> or plain text)
    if (paragraphs[0]) {
      const heading = document.createElement('h3');
      heading.className = 'cg-heading';
      const strong = paragraphs[0].querySelector('strong');
      heading.textContent = strong ? strong.textContent.trim() : paragraphs[0].textContent.trim();
      card.appendChild(heading);
    }

    // Second paragraph: Body
    if (paragraphs[1]) {
      const body = document.createElement('div');
      body.className = 'cg-body';
      const para = document.createElement('p');
      para.textContent = paragraphs[1].textContent.trim();
      body.appendChild(para);
      card.appendChild(body);
    }

    // Third paragraph: CTA (contains link)
    if (paragraphs[2]) {
      const link = paragraphs[2].querySelector('a');
      if (link) {
        const ctaWrapper = document.createElement('div');
        ctaWrapper.className = 'cg-cta';
        ctaWrapper.appendChild(link.cloneNode(true));
        card.appendChild(ctaWrapper);
      }
    }

    grid.appendChild(card);
  });

  // Replace block content
  block.innerHTML = '';
  block.appendChild(grid);
}
