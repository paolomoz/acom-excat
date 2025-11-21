/**
 * Hero Split Marquee Block
 * A split-screen hero with content on left and full-height image on right
 * Based on Figma design: node 750:17215
 */

export default function decorate(block) {
  const rows = Array.from(block.children);

  // Create main wrapper
  const wrapper = document.createElement('div');
  wrapper.className = 'hsm-wrapper';

  // Create left content section
  const leftSection = document.createElement('div');
  leftSection.className = 'hsm-left';

  const contentBox = document.createElement('div');
  contentBox.className = 'hsm-content-box';

  // Process rows:
  // Row 0: Product logo
  if (rows[0]) {
    const logoEl = document.createElement('div');
    logoEl.className = 'hsm-logo';
    const logoImg = rows[0].querySelector('img, picture');
    if (logoImg) {
      logoEl.appendChild(logoImg.cloneNode(true));
    }
    contentBox.appendChild(logoEl);
  }

  // Row 1: Heading
  if (rows[1]) {
    const headingEl = document.createElement('h1');
    headingEl.className = 'hsm-heading';
    headingEl.textContent = rows[1].textContent.trim();
    contentBox.appendChild(headingEl);
  }

  // Row 2: Body text
  if (rows[2]) {
    const bodyEl = document.createElement('div');
    bodyEl.className = 'hsm-body';
    const bodyPara = document.createElement('p');
    bodyPara.textContent = rows[2].textContent.trim();
    bodyEl.appendChild(bodyPara);
    contentBox.appendChild(bodyEl);
  }

  // Row 3: CTA button(s)
  if (rows[3]) {
    const ctaEl = document.createElement('div');
    ctaEl.className = 'hsm-cta';
    const links = rows[3].querySelectorAll('a');
    links.forEach(link => {
      ctaEl.appendChild(link.cloneNode(true));
    });
    contentBox.appendChild(ctaEl);
  }

  leftSection.appendChild(contentBox);
  wrapper.appendChild(leftSection);

  // Create right image section
  const rightSection = document.createElement('div');
  rightSection.className = 'hsm-right';

  // Row 4: Background image
  if (rows[4]) {
    const bgImg = rows[4].querySelector('img, picture');
    if (bgImg) {
      rightSection.appendChild(bgImg.cloneNode(true));
    }
  }

  wrapper.appendChild(rightSection);

  // Replace block content with new structure
  block.innerHTML = '';
  block.appendChild(wrapper);
}
