/**
 * Basic Accordion Block
 * Vertical accordion with heading bar and expandable content
 * Based on Figma design: node 750:17309
 * Each row has 2 cells: heading | body
 */

export default function decorate(block) {
  const rows = Array.from(block.children);

  // Create accordion container
  const accordion = document.createElement('div');
  accordion.className = 'ba-accordion';

  // Each row is one accordion item
  rows.forEach((row) => {
    const cells = Array.from(row.children);
    if (cells.length < 2) return;

    const item = document.createElement('div');
    item.className = 'ba-item';

    // Heading bar
    const headingBar = document.createElement('div');
    headingBar.className = 'ba-heading-bar';

    const divider = document.createElement('div');
    divider.className = 'ba-divider';
    headingBar.appendChild(divider);

    const headingContent = document.createElement('div');
    headingContent.className = 'ba-heading-content';

    // Cell 0: Heading
    const heading = document.createElement('h3');
    heading.className = 'ba-heading';
    heading.textContent = cells[0].textContent.trim();
    headingContent.appendChild(heading);

    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'ba-icon';
    iconWrapper.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
    headingContent.appendChild(iconWrapper);

    headingBar.appendChild(headingContent);
    item.appendChild(headingBar);

    // Content container
    const contentContainer = document.createElement('div');
    contentContainer.className = 'ba-content-container';

    const content = document.createElement('div');
    content.className = 'ba-content';

    // Cell 1: Body
    const body = document.createElement('div');
    body.className = 'ba-body';
    const para = document.createElement('p');
    para.textContent = cells[1].textContent.trim();
    body.appendChild(para);
    content.appendChild(body);

    contentContainer.appendChild(content);
    item.appendChild(contentContainer);

    // Add click handler
    headingBar.addEventListener('click', () => {
      item.classList.toggle('active');
    });

    accordion.appendChild(item);
  });

  // Replace block content
  block.innerHTML = '';
  block.appendChild(accordion);

  // Open first item by default
  const firstItem = accordion.querySelector('.ba-item');
  if (firstItem) {
    firstItem.classList.add('active');
  }
}
