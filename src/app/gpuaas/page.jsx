import './gpuaas.css';
import GpuaasPage from './components';
import { getGpuaasPage } from '@/lib/strapi/gpuaas-page';

export default async function Page() {
  const gpuaasData = await getGpuaasPage();

  return <GpuaasPage data={gpuaasData} />;
}
