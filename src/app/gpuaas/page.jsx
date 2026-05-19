import { cache } from 'react';
import './gpuaas.css';
import GpuaasPage from './components';
import { getGpuaasPage } from '@/lib/strapi/gpuaas-page';
import { getPageSeo } from '@/lib/strapi/page-seo';
import { buildCmsMetadata } from '@/lib/seo';

const getCachedGpuaasPage = cache(async () => getGpuaasPage());
const getCachedGpuaasSeo = cache(async () => getPageSeo('/api/gpuaas-page', 'gpuaas-page'));

export async function generateMetadata() {
  const gpuaasData = await getCachedGpuaasSeo();

  return buildCmsMetadata(gpuaasData, {
    path: '/gpuaas',
    title: 'GPU as a Service - NVIDIA Blackwell, H200, AMD MI300X | Thynkwise',
    description:
      'Access NVIDIA Blackwell, H200, H100, AMD Instinct, and Intel Gaudi across bare metal, VMs, Kubernetes clusters, turnkey DGX systems, or on-premise deployment with Thynkwise managed GPU services.',
    keywords:
      'GPU as a service, GPUaaS, NVIDIA H100 cloud, NVIDIA Blackwell B200, AMD MI300X cloud, Intel Gaudi 3, AI compute cloud, GPU cluster rental, bare metal GPU, GPU Kubernetes, DGX cloud, HPC cloud services',
    imageUrl: 'https://www.thynkwise.ai/assets/og-gpu.jpg',
  });
}

export default async function Page() {
  const gpuaasData = await getCachedGpuaasPage();

  return <GpuaasPage data={gpuaasData} />;
}
