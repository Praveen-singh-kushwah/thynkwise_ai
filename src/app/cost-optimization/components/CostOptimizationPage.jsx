'use client';

import useScrollReveal from '../../components/useScrollReveal';
import AnswerBoxSection from './AnswerBoxSection';
import CostLeaksSection from './CostLeaksSection';
import FinopsProcessSection from './FinopsProcessSection';
import HeroSection from './HeroSection';

export default function CostOptimizationPage({ data }) {
  useScrollReveal();

  return (
    <div className="cost-optimization-page">
      <HeroSection hero={data?.hero} />
      <AnswerBoxSection section={data?.answer_box} />
      <CostLeaksSection section={data?.cost_leaks_section} />
      <FinopsProcessSection section={data?.finops_process_section} />
    </div>
  );
}
