import { jsPDF } from 'jspdf';

export async function addDejaVuFonts(pdf: jsPDF) {
  const [normal, bold, italic, bolditalic] = await Promise.all([
    import('./DejaVuSansNormal').then((m) => m.default),
    import('./DejavuSansBold').then((m) => m.default),
    import('./DejaVuSansItalic').then((m) => m.default),
    import('./DejaVuSansBoldItalic').then((m) => m.default),
  ]);

  // Normal
  pdf.addFileToVFS('DejaVuSans.ttf', normal);
  pdf.addFont('DejaVuSans.ttf', 'DejaVuSans', 'normal');

  // Bold
  pdf.addFileToVFS('DejaVuSans-Bold.ttf', bold);
  pdf.addFont('DejaVuSans-Bold.ttf', 'DejaVuSans', 'bold');

  // Italic
  pdf.addFileToVFS('DejaVuSans-Oblique.ttf', italic);
  pdf.addFont('DejaVuSans-Oblique.ttf', 'DejaVuSans', 'italic');

  // BoldItalic
  pdf.addFileToVFS('DejaVuSans-BoldOblique.ttf', bolditalic);
  pdf.addFont('DejaVuSans-BoldOblique.ttf', 'DejaVuSans', 'bolditalic');
}
