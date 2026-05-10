import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Excavation, Hydro Seeding & Land Work | Northwoods Land Work | Northern Michigan',
  description: 'Professional excavation, hydro seeding, site preparation, septic installation, land clearing, grading, drainage, and driveways in Northern Michigan. Serving Charlevoix, Petoskey, Gaylord, Traverse City, and Cheboygan.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-dark-text font-body">{children}</body>
    </html>
  );
}
