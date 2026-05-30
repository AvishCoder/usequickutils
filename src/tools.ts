export interface FaqEntry {
  q: string;
  a: string;
}

export interface ToolConfig {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: "Image" | "PDF" | "Text";
  faq: FaqEntry[];
}

export const ALL_TOOLS: ToolConfig[] = [
  {
    slug: "compress-image-to-20kb",
    title: "Compress Image to 20KB",
    shortTitle: "Image to 20KB",
    description:
      "Downscale & compress JPEGs to exactly 20KB.",
    category: "Image",
    faq: [
      { q: "How does the 20KB compression work?", a: "It uses a two-stage pipeline: first intelligent downscaling reduces dimensions while preserving clarity, then a precision binary search finds the highest JPEG quality under 20KB." },
      { q: "Is my image uploaded to a server?", a: "No. Everything runs in your browser using HTML5 Canvas. Your file never leaves your device." },
      { q: "What image formats are supported?", a: "JPEG, PNG, and WebP images are all supported. The output is always a JPEG compressed to 20KB." },
      { q: "Will the image quality be very low at 20KB?", a: "The engine preserves as much quality as possible by downscaling before compressing. Text and fine details remain readable." },
    ],
  },
  {
    slug: "compress-image-to-50kb",
    title: "Compress Image to 50KB",
    shortTitle: "Image to 50KB",
    description:
      "Compress images to 50KB with quality preservation.",
    category: "Image",
    faq: [
      { q: "What is the difference between Lossless and Optimized mode?", a: "Lossless mode outputs a PNG with no quality loss. Optimized mode uses binary search to find the best JPEG quality under your target size." },
      { q: "Can I adjust the target size?", a: "Yes. Use the slider or input to set any target between 1 KB and 500 KB." },
      { q: "Does this tool upload my images?", a: "No. All processing happens locally in your browser. Nothing is uploaded." },
    ],
  },
  {
    slug: "resize-image-dimensions",
    title: "Resize Image Dimensions",
    shortTitle: "Passport Resizer",
    description:
      "Resize images to exact pixel dimensions.",
    category: "Image",
    faq: [
      { q: "Can I maintain the aspect ratio?", a: "Yes. The 'Lock Aspect Ratio' checkbox is enabled by default. When checked, changing one dimension automatically updates the other." },
      { q: "What image formats are supported?", a: "All common image formats including JPEG, PNG, WebP, and GIF. The output is a JPEG file." },
      { q: "Is this tool free to use?", a: "Yes, completely free. All processing is done in your browser with no server uploads." },
    ],
  },
  {
    slug: "webp-to-jpg-converter",
    title: "WebP to JPG Converter",
    shortTitle: "WebP to JPG Converter",
    description:
      "Convert WebP images to JPG or PNG instantly.",
    category: "Image",
    faq: [
      { q: "Why do I need to convert WebP to JPG?", a: "WebP is not supported by all platforms and editors. Converting to JPG or PNG ensures compatibility with older software, photo editors, and printing services." },
      { q: "Is the conversion quality adjustable?", a: "The tool uses 92% quality for JPG output and lossless compression for PNG, balancing file size and visual fidelity." },
      { q: "Are my images sent to a server?", a: "No. The entire conversion happens on your device using the Canvas API. Your files remain private." },
    ],
  },
  {
    slug: "image-to-pdf",
    title: "Image to PDF Converter",
    shortTitle: "Image to PDF",
    description:
      "Combine multiple images into a single PDF.",
    category: "PDF",
    faq: [
      { q: "How many images can I combine?", a: "There is no hard limit. Each image becomes a page in the PDF, automatically scaled to fit the page dimensions." },
      { q: "What image formats work with this tool?", a: "JPEG, PNG, WebP, and most common image formats are supported." },
      { q: "Is my data uploaded anywhere?", a: "No. Images are processed entirely in your browser. jsPDF is loaded from CDN to generate the PDF client-side." },
    ],
  },
  {
    slug: "unlock-password-pdf",
    title: "Unlock Password PDF",
    shortTitle: "Unlock Password PDF",
    description:
      "Remove PDF password protection.",
    category: "PDF",
    faq: [
      { q: "Can I remove a password from any PDF?", a: "This tool will soon support removing passwords from PDFs using pdf.js client-side decryption. Currently it is a placeholder." },
      { q: "Is my PDF sent to a server?", a: "When implemented, all processing will happen locally in your browser. Nothing is uploaded." },
      { q: "What if I forgot the PDF password?", a: "You need the correct password to unlock the file. There is no way to recover a lost PDF password." },
    ],
  },
  {
    slug: "add-password-pdf",
    title: "Add Password to PDF",
    shortTitle: "Add Password to PDF",
    description:
      "Encrypt PDF files with a password.",
    category: "PDF",
    faq: [
      { q: "What encryption algorithm is used?", a: "AES-256 encryption, the strongest standard for PDF password protection." },
      { q: "Can I remove the password later?", a: "Yes. Use the 'Unlock Password PDF' tool on this site with the correct password to remove encryption." },
      { q: "Is the original PDF modified?", a: "No. The tool creates a new encrypted copy. Your original file remains unchanged on your device." },
    ],
  },
  {
    slug: "case-converter",
    title: "Case Converter",
    shortTitle: "Case Converter",
    description:
      "Transform text between uppercase, lowercase, and more.",
    category: "Text",
    faq: [
      { q: "What text transforms are available?", a: "UPPERCASE, lowercase, Title Case, and Sentence case. Click any button to instantly apply the transform." },
      { q: "Is my text stored or logged?", a: "No. All processing happens in your browser. The text is never sent anywhere." },
      { q: "Can I copy the result easily?", a: "Yes. Click the 'Copy to Clipboard' button after transforming to copy the result instantly." },
    ],
  },
  {
    slug: "word-counter",
    title: "Word Counter",
    shortTitle: "Word Counter",
    description:
      "Count words, characters, sentences & paragraphs.",
    category: "Text",
    faq: [
      { q: "What does the word counter count?", a: "Words, characters (with and without spaces), sentences, and paragraphs — all updated in real-time as you type." },
      { q: "Is there a character limit?", a: "No limit. The tool handles any length of text smoothly since all processing is local." },
      { q: "Can I use this for SEO meta descriptions?", a: "Yes. It is great for checking meta description length (typically 150-160 characters) and other content limits." },
    ],
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
