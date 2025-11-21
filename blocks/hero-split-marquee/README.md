# Hero Split Marquee Block

A split hero layout block with content on the left side and a background image on the right side.

## Content Structure

The block expects content in the following order (6 rows):

1. **Block Name** - "Hero Split Marquee" (automatically handled by EDS)
2. **Product Logo** - Image or picture element for the product logo
3. **Heading** - Main heading text (can be h1-h6 or p)
4. **Body** - Body text paragraph
5. **CTA** - Call-to-action button link(s)
6. **Background Image** - Image or picture element for the right side background

## Example Usage

In your document, create a table with the following structure:

```
| Hero Split Marquee |
|---|
| ![Adobe Firefly Logo](path/to/logo.svg) |
| Lorem ipsum dolor sit amet consectetur. Nunc ut egestas orci iaculis sit bibendum placerat purus. |
| Lorem ipsum dolor sit amet consectetur. Nunc ut egestas orci iaculis sit bibendum placerat purus. Viverra pretium neque vulputate volutpat elementum. |
| [Create with Firefly](https://firefly.adobe.com) |
| ![Hero Background](path/to/hero-image.jpg) |
```

## Design Specifications

- **Layout**: 50/50 split (content left, image right)
- **Background**: Black (#000000) on content side
- **Text Color**: White (#ffffff)
- **Button Color**: Blue (#4069fd)
- **Min Height**: 560px
- **Content Width**: 500px max
- **Typography**:
  - Heading: Adobe Clean Bold, 44px, line-height 1.25
  - Body: Adobe Clean Regular, 22px, line-height 1.5
  - Button: Adobe Clean Bold, 19px, line-height 24px

## Responsive Behavior

- **Desktop (>900px)**: Side-by-side layout
- **Tablet/Mobile (≤900px)**: Stacked layout with content on top
- Font sizes scale down appropriately for smaller screens
