export interface ToolConfig {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: "Image" | "PDF" | "Text";
}

export const ALL_TOOLS: ToolConfig[] = [
  {
    slug: "compress-image-to-20kb",
    title: "Compress Image to 20KB",
    shortTitle: "Image to 20KB",
    description:
      "Downscale & compress JPEGs to exactly 20KB.",
    category: "Image",
  },
  {
    slug: "compress-image-to-50kb",
    title: "Compress Image to 50KB",
    shortTitle: "Image to 50KB",
    description:
      "Compress images to 50KB with quality preservation.",
    category: "Image",
  },
  {
    slug: "resize-image-dimensions",
    title: "Resize Image Dimensions",
    shortTitle: "Passport Resizer",
    description:
      "Resize images to exact pixel dimensions.",
    category: "Image",
  },
  {
    slug: "webp-to-jpg-converter",
    title: "WebP to JPG Converter",
    shortTitle: "WebP to JPG Converter",
    description:
      "Convert WebP images to JPG or PNG instantly.",
    category: "Image",
  },
  {
    slug: "image-to-pdf",
    title: "Image to PDF Converter",
    shortTitle: "Image to PDF",
    description:
      "Combine multiple images into a single PDF.",
    category: "PDF",
  },
  {
    slug: "unlock-password-pdf",
    title: "Unlock Password PDF",
    shortTitle: "Unlock Password PDF",
    description:
      "Remove PDF password protection.",
    category: "PDF",
  },
  {
    slug: "add-password-pdf",
    title: "Add Password to PDF",
    shortTitle: "Add Password to PDF",
    description:
      "Encrypt PDF files with a password.",
    category: "PDF",
  },
  {
    slug: "case-converter",
    title: "Case Converter",
    shortTitle: "Case Converter",
    description:
      "Transform text between uppercase, lowercase, and more.",
    category: "Text",
  },
  {
    slug: "word-counter",
    title: "Word Counter",
    shortTitle: "Word Counter",
    description:
      "Count words, characters, sentences & paragraphs.",
    category: "Text",
  },
];

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return ALL_TOOLS.find((t) => t.slug === slug);
}

export function getToolsByCategory(
  category: ToolConfig["category"]
): ToolConfig[] {
  return ALL_TOOLS.filter((t) => t.category === category);
}

export const CATEGORIES: { label: string; key: ToolConfig["category"] }[] = [
  { label: "Image Utilities", key: "Image" },
  { label: "PDF Operations", key: "PDF" },
  { label: "Text Utilities", key: "Text" },
];
