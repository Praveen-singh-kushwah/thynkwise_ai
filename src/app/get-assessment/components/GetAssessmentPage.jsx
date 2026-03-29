'use client';

import { useEffect, useState } from 'react';
import useScrollReveal from '../../components/useScrollReveal';
import HeroSection from './HeroSection';
import FaqSection from './FaqSection';
import QuizSection from './QuizSection';
import ContactFormSection from './ContactFormSection';
import ResultsSection from './ResultsSection';

function getQuestionKey(question, index) {
  return question?.id || question?.documentId || question?.step_number || index;
}

function getDefaultSelection(question) {
  const options = question?.options || [];

  if (question?.selection_type === 'multi_card') {
    return options.filter((option) => option.is_default_selected).map((option) => option.value);
  }

  const explicitDefault = options.find((option) => option.is_default_selected);

  if (explicitDefault) {
    return explicitDefault.value;
  }

  return options[0]?.value || '';
}

function getInitialAnswers(questions) {
  return questions.reduce((acc, question, index) => {
    acc[getQuestionKey(question, index)] = getDefaultSelection(question);
    return acc;
  }, {});
}

function getAnswerByStep(answers, questions, stepNumber) {
  const questionIndex = questions.findIndex((item) => item.step_number === stepNumber);

  if (questionIndex === -1) {
    return '';
  }

  return answers[getQuestionKey(questions[questionIndex], questionIndex)];
}

export default function GetAssessmentPage({ data }) {
  useScrollReveal();

  const questions = data?.assessment_quiz?.questions || [];
  const [currentStep, setCurrentStep] = useState('quiz');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(() => getInitialAnswers(questions));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formValues, setFormValues] = useState({
    firstName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    role: '',
  });

  useEffect(() => {
    setAnswers(getInitialAnswers(questions));
    setCurrentStep('quiz');
    setCurrentQuestionIndex(0);
    setIsSubmitting(false);
    setSubmitError('');
    setFormValues({
      firstName: '',
      companyName: '',
      businessEmail: '',
      phone: '',
      role: '',
    });
  }, [data]);

  const progressPercent = currentStep === 'contact'
    ? 93
    : currentStep === 'results'
      ? 100
    : questions.length
      ? ((currentQuestionIndex + 1) / questions.length) * 100
      : 0;

  return (
    <div className="get-assessment-page">
      <HeroSection hero={data?.hero} progressPercent={progressPercent} />
      {currentStep === 'quiz' ? (
        <QuizSection
          quiz={data?.assessment_quiz}
          currentQuestionIndex={currentQuestionIndex}
          answers={answers}
          onNext={() => {
            setCurrentQuestionIndex((currentIndex) => {
              if (currentIndex >= questions.length - 1) {
                setCurrentStep('contact');
                return currentIndex;
              }

              return currentIndex + 1;
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onPrevious={() => {
            setCurrentQuestionIndex((currentIndex) => Math.max(currentIndex - 1, 0));
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSelectSingle={(questionKey, value) => {
            setAnswers((currentAnswers) => ({
              ...currentAnswers,
              [questionKey]: value,
            }));
          }}
          onToggleMulti={(questionKey, value) => {
            setAnswers((currentAnswers) => {
              const currentValues = Array.isArray(currentAnswers[questionKey]) ? currentAnswers[questionKey] : [];
              const nextValues = currentValues.includes(value)
                ? currentValues.filter((item) => item !== value)
                : [...currentValues, value];

              return {
                ...currentAnswers,
                [questionKey]: nextValues,
              };
            });
          }}
        />
      ) : null}
      {currentStep === 'contact' ? (
        <ContactFormSection
          section={data?.contact_form}
          formValues={formValues}
          onChange={(field, value) => {
            setFormValues((currentValues) => ({
              ...currentValues,
              [field]: value,
            }));
          }}
          onBack={() => {
            setCurrentStep('quiz');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSubmit={async () => {
            setSubmitError('');

            const payload = {
              firstName: formValues.firstName,
              companyName: formValues.companyName,
              businessEmail: formValues.businessEmail,
              whatsappPhone: formValues.phone,
              role: formValues.role,
              answers: {
                currentCloudSituation: getAnswerByStep(answers, questions, 1),
                monthlyCloudSpend: getAnswerByStep(answers, questions, 2),
                currentCloudProviders: getAnswerByStep(answers, questions, 3),
                biggestCloudPainPoint: getAnswerByStep(answers, questions, 4),
                applicableRegulations: getAnswerByStep(answers, questions, 5),
                cloudOperationsModel: getAnswerByStep(answers, questions, 6),
                investmentHorizon: getAnswerByStep(answers, questions, 7),
                priorityOutcome: getAnswerByStep(answers, questions, 8),
              },
              results: {
                readinessScore: data?.results_section?.score_card?.score_value,
                readinessGrade: data?.results_section?.score_card?.grade_text,
                scoreDescription: data?.results_section?.score_card?.description,
                recommendedActions: (data?.results_section?.recommendation_cards || []).map((item) => item.title),
              },
              metadata: {
                submittedFrom: 'get-assessment-page',
              },
            };

            setIsSubmitting(true);

            const response = await fetch('/api/get-assessment-submission', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            }).catch(() => null);

            setIsSubmitting(false);

            if (!response) {
              setSubmitError('Unable to submit your assessment right now. Please try again.');
              return;
            }

            const responseBody = await response.json().catch(() => null);

            if (!response.ok) {
              setSubmitError(responseBody?.message || 'Unable to submit your assessment right now.');
              return;
            }

            setCurrentStep('results');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          isSubmitting={isSubmitting}
          errorMessage={submitError}
        />
      ) : null}
      {currentStep === 'results' ? <ResultsSection section={data?.results_section} /> : null}
      <FaqSection section={data?.faq} />
    </div>
  );
}
