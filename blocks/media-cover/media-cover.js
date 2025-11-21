/**
 * Media Cover Block
 *
 * Displays a full-width background image that covers the viewport.
 *
 * Expected table structure in Document Authoring (Google Docs/Word):
 *
 * +---------------+
 * | Media Cover   |
 * +---------------+
 * | [image]       |
 * +---------------+
 *
 * The table should have:
 * - A header row with "Media Cover" text (this becomes the block class name)
 * - One row with a single cell containing an image
 *
 * Example authoring:
 * 1. Create a table with 1 column
 * 2. First row: Type "Media Cover"
 * 3. Second row: Insert your image
 *
 * The image will automatically:
 * - Fill the entire width of the viewport
 * - Maintain aspect ratio with object-fit: cover
 * - Load eagerly for better perceived performance
 */
export default function decorate(block) {
  // Get the image element
  const picture = block.querySelector('picture');

  if (picture) {
    // Ensure image covers the entire block area
    const img = picture.querySelector('img');
    if (img) {
      img.loading = 'eager';
    }
  }
}
