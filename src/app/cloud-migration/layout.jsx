export const metadata = {
  title: 'Cloud Migration Services — AWS, Azure, GCP & Hybrid | Thynkwise',
  description: 'End-to-end cloud migration services: assessment, roadmap, lift-and-shift, re-platforming, re-architecting, and post-migration managed operations across AWS, Azure, GCP, and sovereign clouds.',
  keywords: 'cloud migration services, AWS migration, Azure migration, GCP migration, lift and shift cloud, re-platforming cloud, cloud assessment, hybrid cloud migration, database migration cloud, zero-downtime migration, cloud migration strategy',
  authors: [{ name: 'Thynkwise Technologies' }],
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  alternates: { canonical: 'https://www.thynkwise.ai/cloud-migration' },
  openGraph: {
    type: 'website',
    title: 'Cloud Migration Services — AWS, Azure, GCP & Hybrid | Thynkwise',
    description: 'End-to-end cloud migration services: assessment, roadmap, lift-and-shift, re-platforming, re-architecting, and post-migration managed operations across AWS, Azure, GCP, and sovereign clouds.',
    url: 'https://www.thynkwise.ai/cloud-migration',
    siteName: 'Thynkwise',
    images: [{ url: 'https://www.thynkwise.ai/assets/og-migration.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thynkwise',
    title: 'Cloud Migration Services — AWS, Azure, GCP & Hybrid | Thynkwise',
    description: 'End-to-end cloud migration services: assessment, roadmap, lift-and-shift, re-platforming, re-architecting, and post-migration managed operations across AWS, Azure, GCP, and sovereign clouds.',
    images: ['https://www.thynkwise.ai/assets/og-migration.jpg'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thynkwise.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.thynkwise.ai/services' },
    { '@type': 'ListItem', position: 3, name: 'Cloud Migration', item: 'https://www.thynkwise.ai/cloud-migration' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is cloud migration?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud migration is the process of moving applications, data, and infrastructure from on-premise data centres or legacy systems to cloud platforms like AWS, Azure, or Google Cloud. It includes assessment, planning, data migration, application refactoring, and cutover.' } },
    { '@type': 'Question', name: 'How long does a cloud migration take?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud migration timelines vary by complexity. A single application lift-and-shift can take 2–6 weeks. A full enterprise data centre migration typically takes 3–12 months. Thynkwise provides a detailed timeline after the initial discovery assessment.' } },
    { '@type': 'Question', name: 'What is the difference between lift-and-shift and re-platforming?', acceptedAnswer: { '@type': 'Answer', text: 'Lift-and-shift (rehosting) moves workloads to cloud with minimal changes, preserving existing architecture. Re-platforming makes targeted optimisations (e.g., moving to managed databases) without full re-architecture. Re-architecting redesigns applications natively for cloud.' } },
    { '@type': 'Question', name: 'Does Thynkwise migrate databases to cloud?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Thynkwise migrates Oracle, SQL Server, MySQL, PostgreSQL, MongoDB, and other databases to cloud-native managed services like Amazon RDS, Azure SQL, Cloud SQL, and Aurora — with minimal downtime using CDC and replication strategies.' } },
    { '@type': 'Question', name: 'What is zero-downtime cloud migration?', acceptedAnswer: { '@type': 'Answer', text: 'Zero-downtime migration uses continuous replication and traffic cutover techniques to migrate applications and databases to cloud without service interruption. Thynkwise uses AWS DMS, Azure Database Migration Service, and Google Datastream for zero-downtime migrations.' } },
  ],
};

export default function CloudMigrationLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}