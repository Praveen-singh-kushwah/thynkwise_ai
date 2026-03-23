export const heroAvailability = [
  { arch: 'B200', name: 'NVIDIA B200 SXM', specs: ['192 GB HBM3e', '8 TB/s', 'Blackwell'], status: 'HOT' },
  { arch: 'H200', name: 'NVIDIA H200 SXM', specs: ['141 GB HBM3e', '4.8 TB/s', 'Hopper'], status: 'AVAIL' },
  { arch: 'H100', name: 'NVIDIA H100 SXM5', specs: ['80 GB HBM3', '3.35 TB/s', 'Hopper'], status: 'AVAIL' },
  { arch: 'MI3', name: 'AMD MI325X', specs: ['256 GB HBM3e', '6 TB/s', 'CDNA3'], status: 'AVAIL' },
  { arch: 'MI3', name: 'AMD MI300X', specs: ['192 GB HBM3', '5.3 TB/s', 'CDNA3'], status: 'AVAIL' },
  { arch: 'G3', name: 'Intel Gaudi 3', specs: ['128 GB HBM2e', '3.7 TB/s', 'Gaudi'], status: 'AVAIL' },
];

export const whoDeploysItems = [
  { icon: '\u{1F916}', title: 'AI / ML Teams', description: 'Training LLMs, fine-tuning foundation models, and running ML pipelines on high-density GPU clusters with managed interconnect and storage.' },
  { icon: '\u26A1', title: 'GenAI / LLM Startups', description: 'Inference serving, RAG pipelines, and multi-model API gateways on GPU VMs or Kubernetes GPU platforms with elastic scale.' },
  { icon: '\u{1F52C}', title: 'HPC & Research Institutions', description: 'CFD, molecular dynamics, climate modelling, and simulation workloads on multi-node GPU clusters with SLURM and InfiniBand.' },
  { icon: '\u{1F3E2}', title: 'Enterprise AI Teams', description: 'Private LLM deployment, document intelligence, fraud detection, and predictive analytics on private or hybrid GPU infrastructure.' },
  { icon: '\u{1F3AC}', title: 'VFX & Rendering Studios', description: 'Ray-traced rendering, media pipelines, and neural rendering on RTX and inference-optimised GPU farms.' },
  { icon: '\u{1F3D7}', title: 'On-Premise / Hybrid Deployers', description: 'Hardware procurement, rack-and-stack, driver install, cluster fabric setup, and full managed operations in your own facility.' },
];

export const deliveryModels = [
  { number: '01', icon: '\u{1F5A5}', title: 'Bare Metal GPU Servers', description: 'Dedicated physical hardware with full GPU performance for training and latency-sensitive inference.', tags: ['No virtualisation overhead', 'Single-tenant', 'Direct GPU I/O', 'PCIe / SXM', 'NVLink'] },
  { number: '02', icon: '\u{1F4BB}', title: 'GPU Virtual Machines', description: 'GPU-passthrough or partitioned GPU VMs for dev/test, shared inference, and cost-optimised environments.', tags: ['NVIDIA vGPU', 'MIG', 'SR-IOV', 'Elastic scaling', 'Snapshot friendly'] },
  { number: '03', icon: '\u{1F433}', title: 'Containerised GPU on Kubernetes', description: 'GPU workloads orchestrated with Kubernetes, GPU Operator, and multi-tenant scheduling.', tags: ['GPU Operator', 'K8s device plugin', 'Kubeflow', 'Time-slicing', 'Spot tolerant'] },
  { number: '04', icon: '\u{1F517}', title: 'Multi-Node GPU Clusters', description: 'Scale-out clusters linked by NVLink and InfiniBand for distributed training and high-throughput HPC.', tags: ['NVLink', 'NVSwitch', '400G InfiniBand', 'NCCL managed', 'Large-scale training'] },
  { number: '05', icon: '\u{1F3D7}', title: 'DGX / HGX Turnkey Systems', description: 'Pre-architected DGX and HGX systems with software stack, orchestration, and production rollout managed end to end.', tags: ['DGX', 'HGX', 'AI Enterprise', 'Mission Control', 'SuperPOD ready'] },
  { number: '06', icon: '\u{1F3E2}', title: 'On-Premise / Hybrid Deployment', description: 'Hardware ownership with managed services overlay, including data-centre design, procurement, and hybrid burst models.', tags: ['Hardware procurement', 'DC design', 'Colocation ready', 'Hybrid burst', 'CapEx + OpEx'] },
];

export const architectureTabs = [
  {
    id: 'blackwell', label: 'NVIDIA Blackwell', shortCode: 'BW', title: 'NVIDIA Blackwell Architecture (2024-2025)',
    description: 'Blackwell-class systems for frontier LLM training, high-throughput inference, and rack-scale supercomputing.',
    tagPills: ['Latest Gen', 'In Production', 'High Density'],
    cards: [
      { badge: 'NEW', archPill: 'Blackwell Ultra', model: 'B300', name: 'NVIDIA B300 / Blackwell Ultra', subtitle: 'SXM6 · Dual-die · TSMC 4nm', specs: [{ label: 'Memory', value: '288 GB HBM3e' }, { label: 'Bandwidth', value: '>10 TB/s' }, { label: 'TDP', value: '1,400 W' }, { label: 'NVLink', value: 'NVLink 5.0' }], tags: ['Frontier LLM Training', 'MoE Models', '1T+ Params'] },
      { badge: 'HOT', archPill: 'Blackwell', model: 'B200', name: 'NVIDIA B200 SXM', subtitle: 'SXM6 · Dual-die · 208B transistors', specs: [{ label: 'Memory', value: '192 GB HBM3e' }, { label: 'Bandwidth', value: '8 TB/s' }, { label: 'FP8 Tensor', value: '9 PFLOPS' }, { label: 'NVLink', value: '1.8 TB/s' }], tags: ['Large Model Training', 'High-Throughput Inference', 'Robotics AI'] },
    ],
  },
  {
    id: 'hopper', label: 'NVIDIA Hopper', shortCode: 'HP', title: 'NVIDIA Hopper Architecture',
    description: 'Mature AI ecosystem with H200 and H100 variants for training, fine-tuning, and large-scale inference.',
    tagPills: ['High Availability', 'Mature Ecosystem'],
    cards: [
      { badge: 'FLAGSHIP', archPill: 'Hopper', model: 'H200', name: 'NVIDIA H200 SXM', subtitle: 'SXM5 · HBM3e upgrade', specs: [{ label: 'Memory', value: '141 GB HBM3e' }, { label: 'Bandwidth', value: '4.8 TB/s' }, { label: 'FP8 Tensor', value: '3,958 TFLOPS' }, { label: 'NVLink', value: '900 GB/s' }], tags: ['70B+ LLM Training', 'Long-context LLM', 'HPC'] },
      { archPill: 'Hopper', model: 'H100', name: 'NVIDIA H100 SXM5', subtitle: 'Reference training GPU', specs: [{ label: 'Memory', value: '80 GB HBM3' }, { label: 'Bandwidth', value: '3.35 TB/s' }, { label: 'FP8 Tensor', value: '1,979 TFLOPS' }, { label: 'NVLink', value: '900 GB/s' }], tags: ['LLM Fine-Tuning', 'Vision AI', 'GenAI R&D'] },
    ],
  },
  {
    id: 'amd', label: 'AMD Instinct', shortCode: 'AMD', title: 'AMD Instinct Architecture',
    description: 'HBM-dense AMD Instinct platforms optimised for large-model inference, HPC, and cost-per-token efficiency.',
    tagPills: ['High VRAM Density', 'ROCm Ready'],
    cards: [
      { badge: 'HOT', archPill: 'Instinct', model: 'MI325X', name: 'AMD MI325X', subtitle: 'CDNA3 · HBM3e', specs: [{ label: 'Memory', value: '256 GB HBM3e' }, { label: 'Bandwidth', value: '6 TB/s' }, { label: 'Form Factor', value: 'OAM' }, { label: 'Software', value: 'ROCm' }], tags: ['Large Context Inference', 'ROCm Training', 'HPC'] },
      { archPill: 'Instinct', model: 'MI300X', name: 'AMD MI300X', subtitle: 'CDNA3 · 192 GB HBM3', specs: [{ label: 'Memory', value: '192 GB HBM3' }, { label: 'Bandwidth', value: '5.3 TB/s' }, { label: 'Strength', value: 'Large Model Inference' }, { label: 'Software', value: 'ROCm' }], tags: ['Very Large Models', 'Inference Density', 'HPC'] },
    ],
  },
];

export const workloadTabs = [
  { id: 'train', label: 'AI Training', cards: [
    { icon: '\u{1F9E0}', title: 'LLM Fine-Tuning', description: 'Fine-tuning open or proprietary models with LoRA, QLoRA, FSDP, and DeepSpeed across multi-GPU nodes.', tags: ['H100', 'H200', 'PyTorch', 'DeepSpeed'] },
    { icon: '\u{1F3AF}', title: 'Diffusion Model Training', description: 'Training diffusion models and multimodal generators with high-memory GPUs and fast interconnect.', tags: ['A100', 'H100 PCIe', 'Diffusers', 'CUDA'] },
  ] },
  { id: 'infer', label: 'Inference', cards: [
    { icon: '\u26A1', title: 'High-Throughput LLM Inference', description: 'Serving LLMs with batching, KV cache optimisation, and SLA-based GPU allocation.', tags: ['L40S', 'H100 PCIe', 'vLLM', 'TensorRT-LLM'] },
    { icon: '\u{1F4F9}', title: 'Real-Time Video Analytics', description: 'Multi-stream vision inference with hardware decode and CUDA-accelerated analytics pipelines.', tags: ['L40S', 'A10G', 'DeepStream', 'CUDA'] },
  ] },
  { id: 'hpc', label: 'HPC', cards: [
    { icon: '\u{1F30A}', title: 'Computational Fluid Dynamics', description: 'GPU-accelerated CFD and engineering simulation on scale-out clusters with MPI and high-bandwidth fabrics.', tags: ['H100 SXM5', 'MI300X', 'OpenFOAM', 'ANSYS'] },
    { icon: '\u269B', title: 'Quantum Chemistry & DFT', description: 'Accelerated density functional theory and materials-science workloads for research labs and industry.', tags: ['A100 80GB', 'MI300X', 'VASP', 'CUDA'] },
  ] },
  { id: 'render', label: 'Rendering', cards: [
    { icon: '\u{1F3AC}', title: 'VFX & Feature Film Rendering', description: 'GPU render farms for ray tracing, compositing, neural rendering, and feature production pipelines.', tags: ['RTX 6000 Ada', 'L40', 'Arnold GPU', 'Redshift'] },
    { icon: '\u{1F3AE}', title: 'Game Development & Engine CI', description: 'GPU-accelerated build, bake, and preview environments for game and simulation teams.', tags: ['L40S', 'A40', 'UE5', 'CUDA'] },
  ] },
  { id: 'edge', label: 'Edge / On-Prem', cards: [
    { icon: '\u{1F3ED}', title: 'Industrial Quality Control', description: 'On-premise GPU inference for defect detection and real-time machine vision close to the production line.', tags: ['L4', 'A10G', 'DeepStream', 'TensorRT'] },
    { icon: '\u{1F512}', title: 'Air-Gapped AI', description: 'Classified or regulated AI deployments with hardware ownership, air-gap boundaries, and local inference.', tags: ['H100', 'Gaudi 2', 'vLLM', 'Private DC'] },
  ] },
];

export const frameworkStack = [
  { icon: '\u2699', title: 'Compute Runtimes', points: ['CUDA 12.x + cuDNN', 'AMD ROCm', 'Intel oneAPI', 'OpenCL / SYCL', 'GPU Direct RDMA'] },
  { icon: '\u{1F9E0}', title: 'Training Frameworks', points: ['PyTorch 2.x', 'TensorFlow / JAX', 'Megatron-LM', 'DeepSpeed', 'Hugging Face'] },
  { icon: '\u26A1', title: 'Inference Engines', points: ['TensorRT', 'TensorRT-LLM', 'vLLM', 'SGLang', 'Triton Inference Server'] },
  { icon: '\u{1F433}', title: 'Orchestration & Ops', points: ['Kubernetes + GPU Operator', 'Kubeflow / Argo', 'Run:ai / Volcano', 'MLflow / W&B', 'SLURM'] },
];

export const turnkeySystems = [
  { badgeText: 'Node', subtitle: 'Tier 1 - Single Node', title: 'DGX B200 / DGX H100', description: 'Complete 8-GPU AI computing system with software stack, orchestration, and rapid production rollout.', stats: [{ value: '8x', label: 'GPUs / node' }, { value: '1.5 TB', label: 'VRAM (B200)' }, { value: 'NVLink', label: 'Full mesh' }], points: ['Research Teams', 'SME AI Factory', 'Department GPU'] },
  { badgeText: 'POD', subtitle: 'Tier 2 - BasePOD', title: 'DGX BasePOD', description: 'Cluster of DGX nodes over high-speed InfiniBand with enterprise orchestration and managed operations.', stats: [{ value: '160+', label: 'GPUs total' }, { value: '400G', label: 'InfiniBand' }, { value: '24/7', label: 'Managed ops' }], points: ['Enterprise AI', 'Multi-tenant Training', 'Large Fine-Tune'] },
  { badgeText: 'SUPER', subtitle: 'Tier 3 - SuperPOD', title: 'DGX SuperPOD / GB300 NVL72', description: 'Rack-scale AI supercomputing for frontier model development, national labs, and hyperscale AI factories.', stats: [{ value: '32,768', label: 'Max GPU scale' }, { value: '~92 EF', label: 'Inference / rack' }, { value: 'Liquid', label: 'Cooling required' }], points: ['Frontier AI', 'National AI Lab', 'Hyperscale AI Factory'] },
];

export const statsBand = [
  { value: '$400B+', label: 'Global GPU cloud market\nprojected by 2030' },
  { value: '208B', label: 'Transistors per Blackwell\nB200 dual-die chiplet' },
  { value: '8 TB/s', label: 'Memory bandwidth\nNVIDIA B200 SXM6' },
  { value: '32K+', label: 'GPUs in a single DGX\nSuperPOD cluster' },
  { value: '~92 EF', label: 'ExaFLOPS inference per\nGB300 NVL72 rack' },
];

export const whyThynkwise = [
  { icon: '\u{1F504}', title: 'Architecture-Agnostic', description: 'Recommendations are based on workload fit and cost per result, not vendor lock-in.' },
  { icon: '\u{1F5A5}', title: 'Every Delivery Model', description: 'Bare metal, VM, container, cluster, turnkey, or on-premise - all managed under one operating model and SLA.' },
  { icon: '\u2699', title: 'Full Stack Management', description: 'Hardware provisioning, drivers, frameworks, distributed training setup, and inference operations are all covered.' },
  { icon: '\u{1F4B8}', title: 'Cost Architecture', description: 'Workloads are mapped to the minimum viable GPU tier instead of defaulting everything to the most expensive SKU.' },
  { icon: '\u{1F4C8}', title: 'Burst, Reserve, Spot', description: 'Blend on-demand, reserved, and interruption-tolerant capacity to control spend without sacrificing throughput.' },
  { icon: '\u{1F3D7}', title: 'On-Premise to Cloud Bridge', description: 'Move between owned hardware and cloud burst capacity without rebuilding your software stack for each environment.' },
];

export const outcomes = [
  { title: 'European Pharma R&D Lab', subtitle: 'BioTech - Drug Discovery', description1: 'We needed molecular dynamics simulation acceleration and GPU expertise fast.', container1: { value: '34x', label: 'Simulation speedup' }, container2: { value: '9 days', label: 'CPU months to GPU days' }, description2: 'Stack: 16x A100 80GB SXM4 bare metal · GROMACS GPU · MPI + NCCL · NVLink cluster', points: ['Bare Metal', 'A100 Cluster', 'HPC'] },
  { title: 'Series A - Global Product', subtitle: 'AI Company - LLM Startup', description1: 'We needed a managed H100 cluster with predictable economics and higher throughput.', container1: { value: '58%', label: 'GPU cost reduction' }, container2: { value: '3x', label: 'Training throughput' }, description2: 'Stack: 64x H100 SXM5 cluster · Megatron-LM · NDR InfiniBand · TensorRT-LLM inference', points: ['GPU Cluster', 'H100', 'LLM Training'] },
  { title: 'ADAS Vision Stack', subtitle: 'Manufacturing - Automotive OEM', description1: 'We needed on-premise control, predictable cost, and strict data residency for retraining.', container1: { value: '100%', label: 'Data stayed on premises' }, container2: { value: 'Fixed', label: 'Cost model achieved' }, description2: 'Stack: 4x H100 SXM5 DGX nodes · On-premise · NVIDIA Isaac Sim · PyTorch + TensorRT', points: ['On-Premise', 'DGX H100', 'ADAS'] },
];

export const partnerSections = [
  { title: 'GPU Architecture Vendors', cards: [{ title: 'NVIDIA Corporation', description: 'B200 · H200 · H100 · L40S · L4 · A100 · DGX · HGX · CUDA' }, { title: 'AMD Inc.', description: 'MI355X · MI325X · MI300X · ROCm · CDNA Architecture' }, { title: 'Intel Corporation', description: 'Gaudi 3 · Gaudi 2 · oneAPI · SynapseAI' }] },
  { title: 'GPU Server OEM Partners', cards: [{ title: 'Super Micro', description: 'HGX systems · AI SuperClusters · Liquid-cooled GPU systems' }, { title: 'Dell Technologies', description: 'PowerEdge GPU servers · NVIDIA AI Enterprise ready' }, { title: 'HPE', description: 'ProLiant GPU · Apollo Systems · Cray HPC' }, { title: 'Lenovo', description: 'ThinkSystem GPU servers · 8-way GPU HPC nodes' }, { title: 'GIGABYTE', description: 'G-Series GPU servers · MI300X OAM · HGX compatible' }] },
  { title: 'Networking & Interconnect', cards: [{ title: 'NVIDIA InfiniBand', description: 'Quantum-2 NDR 400G · NVSwitch fabric' }, { title: 'Mellanox / NVIDIA', description: 'HDR/NDR InfiniBand · ConnectX-7' }, { title: 'Arista Networks', description: '800G GPU fabric · Cloud-grade switching' }, { title: 'Juniper Networks', description: 'AI data centre spine-leaf' }] },
];

export const partnerNote = 'Thynkwise is hardware-agnostic. Recommendations are based on workload fit, total cost of ownership, and delivery timeline - not hardware margins.';

export const mainFaqs = [
  { question: 'What is the difference between bare metal GPU and a GPU VM? When should I use each?', answer: 'Bare metal gives you full physical GPU performance and is ideal for large training jobs. GPU VMs are faster to provision and better for dev/test, smaller inference workloads, and shared team environments.' },
  { question: 'How do I choose between NVIDIA H100/H200 and AMD MI300X for LLM training?', answer: 'NVIDIA offers the most mature software ecosystem, while AMD MI300X offers larger memory footprints that can simplify very large model inference and some training patterns. Thynkwise benchmarks your workload before locking in the platform.' },
  { question: 'What does NVLink do and why does it matter for distributed training?', answer: 'NVLink massively increases GPU-to-GPU bandwidth compared with PCIe, reducing communication bottlenecks during gradient synchronisation and making large tensor-parallel training practical inside a node.' },
  { question: 'Can Thynkwise procure and deploy GPU hardware in our own data centre?', answer: 'Yes. Thynkwise supports hardware procurement, power and cooling planning, rack installation, software stack configuration, fabric setup, and managed operations for on-premise GPU environments.' },
  { question: 'What is NVIDIA MIG and when should I use it?', answer: 'MIG partitions a single GPU into multiple isolated instances. It is useful for shared inference, development environments, and strong tenant isolation, but not for large jobs that need a full GPU or NVLink topology.' },
];

export const aeoFaqs = [
  { question: 'What is GPU as a Service (GPUaaS)?', answer: 'GPU as a Service provides on-demand access to GPU compute for AI training, inference, HPC, rendering, and simulation without buying hardware upfront.' },
  { question: 'Which NVIDIA GPUs does Thynkwise offer?', answer: 'Thynkwise supports Blackwell, Hopper, Ada Lovelace, and Ampere generation NVIDIA GPUs across bare metal, VM, cluster, and turnkey delivery models.' },
  { question: 'What AMD GPUs are available through Thynkwise?', answer: 'AMD Instinct platforms such as MI355X, MI325X, and MI300X are supported for AI training, large-model inference, and HPC workloads.' },
  { question: 'What is the NVIDIA DGX system?', answer: 'NVIDIA DGX systems are purpose-built AI servers that combine multiple high-end GPUs, fast interconnect, and a reference AI software stack for accelerated production deployment.' },
  { question: 'Can I run Kubernetes workloads on GPUs through Thynkwise?', answer: 'Yes. Thynkwise provides Kubernetes-based GPU platforms with NVIDIA GPU Operator, scheduling, partitioning, and container support for standard AI frameworks.' },
  { question: 'What is the difference between GPU bare metal and GPU VMs?', answer: 'Bare metal gives exclusive access to the physical server and full performance, while GPU VMs allow partitioning and faster provisioning for flexible multi-tenant or smaller workloads.' },
];

export const stickyCopy = 'GPUaaS · Bare Metal · VM · Cluster · On-Premise · All GPU Architectures';

export const whatsappPath = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';
