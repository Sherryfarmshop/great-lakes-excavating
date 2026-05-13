import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Excavation, Septic, Driveway & Land Work FAQs | Northwoods Land Work',
  description: 'Answers to common questions about excavation, septic system installation, driveway grading, land clearing, drainage, culverts, trenching, brush hogging, demolition, retaining walls, and hydro seeding in Northern Michigan.',
};

const faqSections = [
  {
    heading: 'Excavation & Site Prep Questions',
    faqs: [
      {
        q: 'Do you provide excavation services near me?',
        a: 'Yes. Northwoods Land Work provides excavation services across Northern Michigan, including Charlevoix, Petoskey, Cheboygan, Gaylord, Traverse City, and surrounding areas.',
      },
      {
        q: 'What dirt work services do you offer?',
        a: 'We provide site prep, foundation excavation, rough grading, final grading, trenching, land clearing, driveway prep, drainage work, culvert installation, septic excavation, and final lawn restoration with hydro seeding.',
      },
      {
        q: 'What does site prep include?',
        a: 'Site prep may include land clearing, excavation, grading, driveway access, drainage improvements, trenching, foundation excavation, and preparing the property for building or final finish work.',
      },
    ],
  },
  {
    heading: 'Septic System Questions',
    faqs: [
      {
        q: 'Do you install septic systems in Northern Michigan?',
        a: 'Yes. We install and replace septic systems for residential and rural properties across Northern Michigan.',
      },
      {
        q: 'How much does septic system installation cost?',
        a: 'Septic system installation cost depends on soil conditions, system design, permits, tank size, drain field size, site access, excavation needs, and final restoration.',
      },
      {
        q: 'Do you handle excavation for septic tanks and drain fields?',
        a: 'Yes. We handle excavation, tank placement, drain field installation, backfilling, grading, and hydro seeding after septic work when needed.',
      },
    ],
  },
  {
    heading: 'Driveway Questions',
    faqs: [
      {
        q: 'Do you install gravel driveways?',
        a: 'Yes. We install new gravel driveways for homes, farms, cabins, pole barns, new builds, and rural properties.',
      },
      {
        q: 'Can you fix driveway washouts?',
        a: 'Yes. We repair washed-out gravel driveways by correcting drainage, regrading the surface, improving the base when needed, and adding fresh gravel.',
      },
      {
        q: 'Do you install driveway culverts?',
        a: 'Yes. We install and replace residential driveway culverts to help water flow properly and reduce driveway washouts, standing water, and erosion.',
      },
    ],
  },
  {
    heading: 'Hydro Seeding Questions',
    faqs: [
      {
        q: 'Do you offer hydro seeding after excavation or septic work?',
        a: 'Yes. We provide hydro seeding after excavation, septic system work, driveway installation, grading, drainage work, and other land improvement projects across Northern Michigan.',
      },
      {
        q: 'Is hydro seeding good for slopes and ditches?',
        a: 'Yes. Hydro seeding works well for slopes, ditches, driveway edges, septic fields, and bare soil where grass needs to be established.',
      },
      {
        q: 'What areas are good for hydro seeding?',
        a: 'Hydro seeding is a good option for new lawns, freshly graded yards, new construction sites, septic field restoration, driveway edges, slopes, ditches, excavation repair, farms, and large bare areas.',
      },
    ],
  },
  {
    heading: 'Land Clearing Questions',
    faqs: [
      {
        q: 'Do you offer small land clearing jobs?',
        a: 'Yes. We handle small land clearing jobs, overgrown lots, brush removal, rural property clearing, and larger excavator land clearing projects.',
      },
      {
        q: 'How much does land clearing cost?',
        a: 'Land clearing cost depends on property size, tree and brush density, access, debris removal, stump work, grading, and whether hydro seeding is needed afterward.',
      },
      {
        q: 'Do you clear land for new driveways, homes, and pole barns?',
        a: 'Yes. We provide land clearing and site preparation for new driveways, homes, garages, pole barns, outbuildings, and rural property improvements.',
      },
    ],
  },
  {
    heading: 'Drainage & Culvert Questions',
    faqs: [
      {
        q: 'Do you install drainage culverts?',
        a: 'Yes. We install and replace drainage culverts, residential driveway culverts, underground drainage pipe, and culvert pipe for driveways.',
      },
      {
        q: 'Can culverts help stop driveway washouts?',
        a: 'Yes. A properly sized and installed culvert helps move water under or away from the driveway, reducing washouts, erosion, and standing water.',
      },
      {
        q: 'What types of drainage pipe do you work with?',
        a: 'Depending on the property, we may work with corrugated culvert pipe, galvanized culvert pipe, concrete culvert pipe, perforated drainage pipe, underground drainage pipe, and other drainage materials suited for the job.',
      },
    ],
  },
  {
    heading: 'Trenching Questions',
    faqs: [
      {
        q: 'What trenching services do you offer?',
        a: 'We provide trenching for water lines, electrical lines, drainage systems, culverts, and other underground utility or land improvement needs.',
      },
      {
        q: 'Do you offer residential trenching services?',
        a: 'Yes. We provide residential trenching services for homes, cabins, farms, recreational properties, and rural properties across Northern Michigan.',
      },
      {
        q: 'Do you backfill after trenching?',
        a: 'Yes. We can handle trenching, backfilling, grading, and hydro seeding after the trench work is complete.',
      },
    ],
  },
  {
    heading: 'Brush Hogging Questions',
    faqs: [
      {
        q: 'What areas do you brush hog?',
        a: 'We brush hog overgrown fields, trails, fence lines, roadsides, farm lanes, vacant lots, and rural properties.',
      },
      {
        q: 'Do you offer one-time brush hogging?',
        a: 'Yes. We offer one-time brush hogging for seasonal cleanup, property reclaiming, and overgrown areas.',
      },
      {
        q: 'Is brush hogging good for overgrown rural land?',
        a: 'Yes. Brush hogging is useful for cutting down tall grass, weeds, and light brush so your property is cleaner, safer, and easier to access.',
      },
    ],
  },
  {
    heading: 'Demolition Questions',
    faqs: [
      {
        q: 'Do you tear down old homes and barns?',
        a: 'Yes. We provide old home demolition, barn removal, garage demolition, shed removal, debris cleanup, and site preparation.',
      },
      {
        q: 'Do you clean up after demolition?',
        a: 'Yes. We can handle teardown, debris removal, site cleanup, grading, and preparation for the next use.',
      },
      {
        q: 'Do you prepare the site after demolition?',
        a: 'Yes. After demolition, we can grade the area, improve drainage, prepare the site for rebuilding, and hydro seed disturbed soil when needed.',
      },
    ],
  },
  {
    heading: 'Retaining Wall Questions',
    faqs: [
      {
        q: 'Do you build retaining walls?',
        a: 'Yes. We provide residential retaining wall work, including excavation, base preparation, drainage, retaining wall blocks, backfill, and grading.',
      },
      {
        q: 'Why does a retaining wall need drainage?',
        a: 'Drainage helps relieve water pressure behind the wall, which can reduce movement, settling, and long-term wall failure.',
      },
      {
        q: 'Can a retaining wall help with slopes or driveway edges?',
        a: 'Yes. Retaining walls can help with soil support, slope control, driveway edge support, erosion control, and improved land use.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-[#EFE8DC]">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#1F2A22] font-black uppercase tracking-wider mb-6">
            Excavation, Septic, Driveway &amp; Land Work FAQs
          </h1>

          <p className="text-[#1F2A22]/80 text-lg leading-relaxed mb-12 max-w-3xl">
            Have questions about excavation, septic systems, driveway grading, land clearing, drainage, culverts, trenching, brush hogging, demolition, retaining walls, or hydro seeding? Northwoods Land Work serves Charlevoix, Petoskey, Cheboygan, Gaylord, Traverse City, and surrounding Northern Michigan areas.
          </p>

          {faqSections.map((section) => (
            <div key={section.heading} className="mb-14">
              <h2 className="font-heading text-2xl text-[#1F2A22] font-bold mb-6 border-b-2 border-[#D9651A] pb-2">
                {section.heading}
              </h2>
              <div className="space-y-6">
                {section.faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="text-lg font-bold text-[#1F2A22] mb-2">{faq.q}</h3>
                    <p className="text-[#1F2A22]/80 text-base leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Still Have Questions */}
          <div className="bg-[#1F2A22] rounded-lg p-10 text-center mt-16">
            <h2 className="font-heading text-2xl sm:text-3xl text-[#F2E8D8] font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-[#D4C9B5] text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Northwoods Land Work helps homeowners, builders, farms, and rural property owners with excavation, septic systems, driveways, drainage, land clearing, demolition, trenching, brush hogging, retaining walls, and hydro seeding across Northern Michigan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="inline-block bg-[#D9651A] hover:bg-[#c05716] text-[#F2E8D8] px-8 py-4 rounded text-lg font-bold tracking-wide transition-colors shadow-lg">
                Get a Quote
              </a>
              <a href="/#services" className="inline-block border-2 border-[#D9651A] text-[#D9651A] hover:bg-[#D9651A] hover:text-[#F2E8D8] px-8 py-4 rounded text-lg font-bold tracking-wide transition-colors">
                View Our Services
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
