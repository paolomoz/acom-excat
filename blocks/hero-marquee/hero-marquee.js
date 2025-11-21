/**
 * Hero Marquee Block
 *
 * A split-layout hero with content on the left and a full-height background image on the right.
 * Based on the Figma "Hero Split Marquee" design (hero-mq-media-cover).
 *
 * Expected table structure in Document Authoring (Google Docs/Word):
 *
 * Two-column table format:
 * +----------------------+----------------------+
 * | Hero Marquee (dark)  |                      |
 * +======================+======================+
 * | [logo image]         | [background image]   |
 * +----------------------+                      |
 * | Heading text         |                      |
 * +----------------------+                      |
 * | Body paragraph text  |                      |
 * +----------------------+                      |
 * | [CTA link/button]    |                      |
 * +----------------------+----------------------+
 *
 * Table structure details:
 * - Row 1, Col 1: "Hero Marquee (dark)" - the block name with variant
 *   - Variants: (dark) for black background, (light) for white background
 * - Row 2, Col 1: Logo image (optional)
 * - Row 2, Col 2: Background image (spans multiple rows visually)
 * - Row 3, Col 1: Heading text (h1)
 * - Row 4, Col 1: Body text (paragraph)
 * - Row 5, Col 1: CTA link/button
 *
 * Alternative single-column format (simpler):
 * +----------------------+
 * | Hero Marquee (dark)  |
 * +======================+
 * | [logo image]         |
 * +----------------------+
 * | Heading text         |
 * +----------------------+
 * | Body paragraph text  |
 * +----------------------+
 * | [CTA link/button]    |
 * +----------------------+
 * | [background image]   |
 * +----------------------+
 *
 * The block will automatically:
 * - Create a 50/50 split layout on desktop (content left, image right)
 * - Stack vertically on mobile (content on top, image below)
 * - Apply black background with white text for dark variant
 * - Style the CTA button with blue accent color
 * - Ensure the background image covers the full height
 */

import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Determine if using dark or light variant
  const isDark = block.classList.contains('dark');

  // Get all rows
  const rows = [...block.children];

  // Structure for content
  const contentDiv = document.createElement('div');
  contentDiv.className = 'hero-marquee-content';

  const backgroundDiv = document.createElement('div');
  backgroundDiv.className = 'hero-marquee-background';

  // Check if we have a two-column layout (content | background image)
  const firstRow = rows[0];
  const hasTwoColumns = firstRow?.children.length === 2;

  if (hasTwoColumns) {
    // Two-column format: left column = content, right column = background
    rows.forEach((row) => {
      const leftCol = row.children[0];
      const rightCol = row.children[1];

      // Move left column content to content div
      if (leftCol) {
        [...leftCol.children].forEach((child) => {
          contentDiv.append(child);
        });
      }

      // Move right column content to background div (usually just the first row has the image)
      if (rightCol && rightCol.querySelector('picture')) {
        const picture = rightCol.querySelector('picture');
        backgroundDiv.append(picture);
      }
    });
  } else {
    // Single-column format: content rows first, background image last
    const lastRow = rows[rows.length - 1];
    const lastRowPicture = lastRow?.querySelector('picture');

    rows.forEach((row, index) => {
      if (index === rows.length - 1 && lastRowPicture) {
        // Last row with image goes to background
        backgroundDiv.append(lastRowPicture);
      } else {
        // All other rows go to content
        [...row.children].forEach((col) => {
          [...col.children].forEach((child) => {
            contentDiv.append(child);
          });
        });
      }
    });
  }

  // Process content elements
  const headings = contentDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headings.forEach((heading) => {
    heading.classList.add('hero-marquee-heading');
  });

  const paragraphs = contentDiv.querySelectorAll('p');
  paragraphs.forEach((p, index) => {
    if (index === 0 && !p.querySelector('picture')) {
      p.classList.add('hero-marquee-body');
    }
  });

  const links = contentDiv.querySelectorAll('a');
  links.forEach((link) => {
    const parent = link.parentElement;
    if (parent.childNodes.length === 1) {
      link.classList.add('hero-marquee-cta');
    }
  });

  // Process logo (first image in content)
  const logoImg = contentDiv.querySelector('picture');
  if (logoImg) {
    logoImg.classList.add('hero-marquee-logo');
  }

  // Optimize background image
  const bgPicture = backgroundDiv.querySelector('picture');
  if (bgPicture) {
    const img = bgPicture.querySelector('img');
    if (img) {
      const optimizedPicture = createOptimizedPicture(img.src, img.alt, false, [{ width: '1200' }]);
      // bgPicture.replaceWith(optimizedPicture);
    }
  }

  // Clear and rebuild block structure
  block.innerHTML = '';

  // Create wrapper divs for proper layout
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'hero-marquee-content-wrapper';
  contentWrapper.append(contentDiv);

  const backgroundWrapper = document.createElement('div');
  backgroundWrapper.className = 'hero-marquee-background-wrapper';
  backgroundWrapper.append(backgroundDiv);

  block.append(contentWrapper);
  block.append(backgroundWrapper);
}
