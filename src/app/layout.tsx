import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Excavation & Hydro Seeding | Northwoods Land Work | Northern MI',
  description: 'Professional excavation, hydro seeding, septic installation, land clearing, grading, drainage, and driveways in Northern Michigan. Serving Charlevoix, Petoskey, Traverse City, Gaylord, and Cheboygan.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-dark-text font-body">{children}</body>
    </html>
  );
}
