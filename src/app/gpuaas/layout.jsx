import { Exo_2 } from 'next/font/google';
import { aeoFaqs } from './components/data';

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--gpu-exo',
  display: 'swap',
});

export const metadata = {
  title: 'GPU as a Service - NVIDIA Blackwell, H200, AMD MI300X | Thynkwise',
  description:
    'Access NVIDIA Blackwell, H200, H100, AMD Instinct, and Intel Gaudi across bare metal, VMs, Kubernetes clusters, turnkey DGX systems, or on-premise deployment with Thynkwise managed GPU services.',
  keywords:
    'GPU as a service, GPUaaS, NVIDIA H100 cloud, NVIDIA Blackwell B200, AMD MI300X cloud, Intel Gaudi 3, AI compute cloud, GPU cluster rental, bare metal GPU, GPU Kubernetes, DGX cloud, HPC cloud services',
  authors: [{ name: 'Thynkwise Technologies' }],
  robots: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1',
  alternates: { canonical: 'https://www.thynkwise.ai/gpuaas' },
  openGraph: {
    type: 'website',
    title: 'GPU as a Service - NVIDIA Blackwell, H200, AMD MI300X | Thynkwise',
    description:
      'Access NVIDIA, AMD, and Intel GPU infrastructure via bare metal, VMs, clusters, DGX systems, or on-premise deployment.',
    url: 'https://www.thynkwise.ai/gpuaas',
    siteName: 'Thynkwise',
    images: [{ url: 'https://www.thynkwise.ai/assets/og-gpu.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thynkwise',
    title: 'GPU as a Service - NVIDIA Blackwell, H200, AMD MI300X | Thynkwise',
    description:
      'Access managed GPU infrastructure for AI training, inference, HPC, rendering, and sovereign deployments.',
    images: ['https://www.thynkwise.ai/assets/og-gpu.jpg'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thynkwise.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.thynkwise.ai/services' },
    { '@type': 'ListItem', position: 3, name: 'GPUaaS', item: 'https://www.thynkwise.ai/gpuaas' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: aeoFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function GpuaasLayout({ children }) {
  return (
    <div className={exo2.variable}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </div>
  );
}
