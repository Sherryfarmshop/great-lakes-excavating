import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Excavation Contractor Northern Michigan | Northwoods Landwork',
  description: 'Excavation, land clearing, drainage, trenching, and site work in Northern Michigan. Serving Charlevoix, Petoskey, Traverse City and surrounding areas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-dark-text font-body">{children}</body>
    </html>
  );
}
