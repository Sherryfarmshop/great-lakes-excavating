import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Great Lakes Excavating & Brushwork | Northern Michigan',
  description: 'Professional excavation, land clearing, septic systems, demolition, and site work serving Northern Michigan. Licensed, insured, and locally trusted.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-dark-text font-body">{children}</body>
    </html>
  );
}
