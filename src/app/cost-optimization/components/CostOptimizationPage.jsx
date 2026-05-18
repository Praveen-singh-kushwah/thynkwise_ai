'use client';

import useScrollReveal from '../../components/useScrollReveal';
import AnswerBoxSection from './AnswerBoxSection';
import CalculatorSection from './CalculatorSection';
import CostLeaksSection from './CostLeaksSection';
import FaqSection from './FaqSection';
import FinopsProcessSection from './FinopsProcessSection';
import FinalCtaSection from './FinalCtaSection';
import GuaranteeSection from './GuaranteeSection';
import HeroSection from './HeroSection';
import OptimizationLayersSection from './OptimizationLayersSection';
import RoiTimelineSection from './RoiTimelineSection';
import SavingsProofSection from './SavingsProofSection';
import TestimonialsSection from './TestimonialsSection';
import TrustBandSection from './TrustBandSection';

export default function CostOptimizationPage({ data }) {
  useScrollReveal();

  return (
    <div className="cost-optimization-page">
      <HeroSection hero={data?.hero} />
      <AnswerBoxSection section={data?.answer_box} />
      <CostLeaksSection section={data?.cost_leaks_section} />
      <FinopsProcessSection section={data?.finops_process_section} />
      <SavingsProofSection section={data?.savings_proof_section} />
      <CalculatorSection section={data?.calculator_section} />
      <OptimizationLayersSection section={data?.optimization_layers_section} />
      <RoiTimelineSection section={data?.roi_timeline_section} />
      <GuaranteeSection section={data?.guarantee_section} />
      <TestimonialsSection section={data?.testimonials_section} />
      <TrustBandSection section={data?.trust_band} />
      <FaqSection section={data?.faq_section} />
      <FinalCtaSection section={data?.final_cta_section} />
    </div>
  );
}
