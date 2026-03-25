'use client';

import { useState } from 'react';
import Link from 'next/link';
import useScrollReveal from '../../components/useScrollReveal';
import CmsImage from '../../components/CmsImage';
import { getStrapiMediaUrl } from '@/lib/strapi/media';
import AeoFaqSection from './AeoFaqSection';

const defaultContent = {
  badgeText: '30-Minute Cloud Strategy Demo',
  title: "See Exactly How Much You'll Save on Cloud",
  description:
    "Book a free, no-obligation demo with a certified Thynkwise cloud architect. We will analyze your current AWS, Azure or Google Cloud spend and show you a live savings estimate in Indian Rupees.",
  list_point: [
    {
      title: 'Live Cost Savings Analysis',
      subtitle:
        'We pull your actual usage data and model 28-35% savings in real-time during the call.',
      fallbackIcon: '\uD83D\uDCC8',
    },
    {
      title: 'DPDP and RBI Compliance Readiness',
      subtitle:
        'We run a quick compliance check for your industry - BFSI, healthcare, or government.',
      fallbackIcon: '\uD83D\uDEE1',
    },
    {
      title: 'Named Cloud Architect in Your City',
      subtitle:
        'Mumbai, Bengaluru, Delhi NCR, Hyderabad, Pune, Chennai - your architect is local.',
      fallbackIcon: '\uD83D\uDC68\u200D\uD83D\uDCBC',
    },
    {
      title: 'WhatsApp Follow-Up Included',
      subtitle:
        'Post-demo, get your savings report on WhatsApp. No email threads. No waiting.',
      fallbackIcon: '\uD83D\uDCAC',
    },
  ],
  points: [
    { point: 'AWS Advanced Partner' },
    { point: 'Azure CSP India' },
    { point: 'GCP Premier Partner' },
    { point: 'MeitY Empanelled' },
    { point: 'ISO 27001' },
  ],
  feedback: {
    message:
      '"In 30 minutes Thynkwise showed me INR 18 lakhs I was burning on idle EC2 instances. The demo paid for itself before we even signed."',
    name: 'Ankit Mehta',
    role: 'CTO',
    company: 'SaaS Company',
    location: 'Pune',
  },
  faq: [
    {
      question: 'What happens in a Thynkwise demo?',
      answer:
        'A Thynkwise cloud architect walks you through our managed services platform, shows live monitoring dashboards, explains our SLA model, and maps capabilities to your workloads.',
    },
    {
      question: 'Is the demo free?',
      answer:
        'Yes. All demos are complimentary and tailored to your industry, cloud platform, and infrastructure requirements.',
    },
  ],
};

const industries = [
  'BFSI (Banking / Insurance)',
  'Healthcare and Pharma',
  'E-Commerce / D2C',
  'Government / PSU',
  'SaaS / Technology',
  'Manufacturing',
  'Logistics',
  'Education / EdTech',
  'Other',
];

const companySizes = [
  '1-50 employees',
  '51-200 employees',
  '201-500 employees',
  '500+ employees',
];

const providers = [
  'Amazon Web Services',
  'Microsoft Azure',
  'Google Cloud',
  'On-Premises / Other',
];

const spends = [
  'Under INR 1 Lakh',
  'INR 1-5 Lakhs',
  'INR 5-20 Lakhs',
  'INR 20-50 Lakhs',
  'INR 50L+',
];

const slots = [
  '9:00-9:30 AM',
  '10:00-10:30 AM',
  '11:00-11:30 AM',
  '12:00-12:30 PM',
  '2:00-2:30 PM',
  '3:00-3:30 PM',
  '4:00-4:30 PM',
  '5:00-5:30 PM',
  'WhatsApp me to schedule',
];

const formats = [
  'Google Meet / Zoom (link sent via email)',
  'In-Person at Thynkwise Office',
  'WhatsApp Video Call',
  'Site Visit to My Office',
];

const initialFormData = {
  fullName: '',
  designation: '',
  businessEmail: '',
  whatsappPhone: '',
  companyName: '',
  industry: '',
  companySize: '',
  currentCloudProvider: '',
  monthlyCloudSpend: '',
  discussionNotes: '',
  preferredDate: '',
  preferredTimeSlot: '',
  meetingFormat: formats[0],
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function mergeContent(data) {
  return {
    badgeText: data?.badgeText || defaultContent.badgeText,
    title: data?.title || defaultContent.title,
    description: data?.description || defaultContent.description,
    list_point: data?.list_point?.length
      ? data.list_point.map((item, index) => ({
          ...item,
          fallbackIcon:
            defaultContent.list_point[index % defaultContent.list_point.length].fallbackIcon,
        }))
      : defaultContent.list_point,
    points: data?.points?.length ? data.points : defaultContent.points,
    feedback: data?.feedback || defaultContent.feedback,
    faq: data?.faq?.length ? data.faq : defaultContent.faq,
  };
}

function renderFeedbackByline(feedback) {
  const parts = [feedback.name, feedback.role, feedback.company, feedback.location].filter(Boolean);
  return parts.join(' | ');
}

export default function BookDemoPage({ data }) {
  useScrollReveal();

  const content = mergeContent(data);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const minDate = new Date().toISOString().split('T')[0];

  const goStep = (nextStep) => {
    setFormError('');
    setStep(nextStep);
  };

  const updateField = (field, value) => {
    if (formError) {
      setFormError('');
    }

    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinueStep1 = () => {
    if (!formData.fullName.trim()) {
      setFormError('Please enter full name.');
      return;
    }
    if (!formData.designation.trim()) {
      setFormError('Please enter designation.');
      return;
    }
    if (!formData.businessEmail.trim() || !emailPattern.test(formData.businessEmail.trim())) {
      setFormError('Please enter a valid business email.');
      return;
    }
    if (!formData.whatsappPhone.trim()) {
      setFormError('Please enter WhatsApp or phone number.');
      return;
    }

    goStep(2);
  };

  const handleContinueStep2 = () => {
    if (!formData.companyName.trim()) {
      setFormError('Please enter company name.');
      return;
    }
    if (!formData.industry) {
      setFormError('Please select industry.');
      return;
    }
    if (!formData.companySize) {
      setFormError('Please select company size.');
      return;
    }

    goStep(3);
  };

  const submitDemo = async () => {
    setFormError('');
    setIsSubmitting(true);

    const payload = {
      ...formData,
      metadata: {
        timezone:
          typeof Intl !== 'undefined' ? Intl.DateTimeFormat().resolvedOptions().timeZone : '',
      },
    };

    try {
      const response = await fetch('/api/book-demo-submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const json = await response.json().catch(() => null);
        setFormError(json?.message || 'Unable to submit booking right now.');
        return;
      }

      setStep(4);
    } catch {
      setFormError('Network error while submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="book-demo-page">
      <div className="demo-wrap">
        <div className="demo-left">
          <div className="demo-left-content">
            <span className="badge bo demo-left-badge rv">{'\uD83D\uDCC5'} {content.badgeText}</span>
            <h1 className="rv d1">{content.title}</h1>
            <p className="rv d2">{content.description}</p>

            <div className="demo-why">
              {content.list_point.map((item, index) => {
                const iconUrl = getStrapiMediaUrl(item.icon);

                return (
                  <div key={item.id || `${item.title}-${index}`} className={`demo-why-item rv d${(index % 4) + 1}`}>
                    <div className="demo-why-icon">
                      {iconUrl ? (
                        <CmsImage
                          src={iconUrl}
                          alt={item.title}
                          style={{ width: 22, height: 22, objectFit: 'contain' }}
                        />
                      ) : (
                        item.fallbackIcon
                      )}
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="demo-logos rv d2">
              {content.points.map((item, index) => (
                <span key={item.id || `${item.point}-${index}`} className="demo-pill">
                  {item.point}
                </span>
              ))}
            </div>
          </div>

          <div className="demo-feedback rv d3">
            <p className="demo-feedback-label">{'\uD83C\uDFC6'} What clients say after their first demo</p>
            <p className="demo-feedback-message">{content.feedback.message}</p>
            <p className="demo-feedback-byline">{renderFeedbackByline(content.feedback)}</p>
          </div>
        </div>

        <div className="demo-right">
          <h2>Book Your Free Cloud Demo</h2>
          <p>Takes 2 minutes to book. We will confirm within 1 hour via WhatsApp.</p>

          <div className="progress">
            <div className={`pstep ${step === 1 ? 'active' : step > 1 ? 'done' : ''}`}>1. Contact</div>
            <div className={`pstep ${step === 2 ? 'active' : step > 2 ? 'done' : ''}`}>2. Company</div>
            <div className={`pstep ${step === 3 ? 'active' : step > 3 ? 'done' : ''}`}>3. Schedule</div>
          </div>

          {step === 1 && (
            <div className="fstep active">
              <div className="frow">
                <div className="fgroup">
                  <label>Full Name <span className="req">*</span></label>
                  <input
                    type="text"
                    className="finput"
                    placeholder="Rajesh Kumar"
                    value={formData.fullName}
                    onChange={(event) => updateField('fullName', event.target.value)}
                  />
                </div>
                <div className="fgroup">
                  <label>Designation <span className="req">*</span></label>
                  <input
                    type="text"
                    className="finput"
                    placeholder="CTO / IT Manager"
                    value={formData.designation}
                    onChange={(event) => updateField('designation', event.target.value)}
                  />
                </div>
              </div>
              <div className="fgroup">
                <label>Business Email <span className="req">*</span></label>
                <input
                  type="email"
                  className="finput"
                  placeholder="rajesh@company.in"
                  value={formData.businessEmail}
                  onChange={(event) => updateField('businessEmail', event.target.value)}
                />
              </div>
              <div className="fgroup">
                <label>WhatsApp / Phone <span className="req">*</span></label>
                <input
                  type="tel"
                  className="finput"
                  placeholder="+91 98765 43210"
                  value={formData.whatsappPhone}
                  onChange={(event) => updateField('whatsappPhone', event.target.value)}
                />
              </div>

              <div className="fbtns">
                <button type="button" className="btn btn-primary form-fill" onClick={handleContinueStep1}>
                  Continue {'\u2192'}
                </button>
              </div>
              {formError ? <p className="form-error">{formError}</p> : null}

              <div className="trust-row">
                <span className="trust-chip">{'\uD83D\uDD12'} 100% Confidential</span>
                <span className="trust-chip">{'\u2705'} No spam, ever</span>
                <span className="trust-chip">{'\uD83D\uDCAC'} WhatsApp confirmation</span>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="fstep active">
              <div className="fgroup">
                <label>Company Name <span className="req">*</span></label>
                <input
                  type="text"
                  className="finput"
                  placeholder="Acme Technologies Pvt. Ltd."
                  value={formData.companyName}
                  onChange={(event) => updateField('companyName', event.target.value)}
                />
              </div>
              <div className="frow">
                <div className="fgroup">
                  <label>Industry <span className="req">*</span></label>
                  <select
                    className="fsel"
                    value={formData.industry}
                    onChange={(event) => updateField('industry', event.target.value)}
                  >
                    <option value="">Select Industry</option>
                    {industries.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </div>
                <div className="fgroup">
                  <label>Company Size <span className="req">*</span></label>
                  <select
                    className="fsel"
                    value={formData.companySize}
                    onChange={(event) => updateField('companySize', event.target.value)}
                  >
                    <option value="">Select Size</option>
                    {companySizes.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </div>
              </div>
              <div className="frow">
                <div className="fgroup">
                  <label>Current Cloud Provider</label>
                  <select
                    className="fsel"
                    value={formData.currentCloudProvider}
                    onChange={(event) => updateField('currentCloudProvider', event.target.value)}
                  >
                    <option value="">Not sure / Multiple</option>
                    {providers.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </div>
                <div className="fgroup">
                  <label>Monthly Cloud Spend (INR)</label>
                  <select
                    className="fsel"
                    value={formData.monthlyCloudSpend}
                    onChange={(event) => updateField('monthlyCloudSpend', event.target.value)}
                  >
                    <option value="">Prefer not to say</option>
                    {spends.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </div>
              </div>
              <div className="fgroup">
                <label>What do you want to discuss in the demo?</label>
                <textarea
                  className="ftarea"
                  placeholder="e.g. Reduce AWS costs, DPDP compliance for BFSI, migration from on-prem..."
                  value={formData.discussionNotes}
                  onChange={(event) => updateField('discussionNotes', event.target.value)}
                />
              </div>
              <div className="fbtns">
                <button type="button" className="btn btn-outline" onClick={() => goStep(1)}>{'\u2190'} Back</button>
                <button type="button" className="btn btn-primary form-fill" onClick={handleContinueStep2}>
                  Continue {'\u2192'}
                </button>
              </div>
              {formError ? <p className="form-error">{formError}</p> : null}
            </div>
          )}

          {step === 3 && (
            <div className="fstep active">
              <div className="fgroup">
                <label>Preferred Date</label>
                <input
                  type="date"
                  className="finput"
                  min={minDate}
                  value={formData.preferredDate}
                  onChange={(event) => updateField('preferredDate', event.target.value)}
                />
              </div>
              <div className="fgroup">
                <label>Preferred Time Slot (IST)</label>
                <div className="slots">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`slot${formData.preferredTimeSlot === slot ? ' sel' : ''}`}
                      onClick={() => updateField('preferredTimeSlot', slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              <div className="fgroup">
                <label>Meeting Format</label>
                <select
                  className="fsel"
                  value={formData.meetingFormat}
                  onChange={(event) => updateField('meetingFormat', event.target.value)}
                >
                  {formats.map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>
              <div className="fbtns">
                <button type="button" className="btn btn-outline" onClick={() => goStep(2)}>{'\u2190'} Back</button>
                <button type="button" className="btn btn-primary form-fill" onClick={submitDemo} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : `${'\uD83D\uDCC5'} Confirm Demo Booking ${'\u2713'}`}
                </button>
              </div>
              {formError ? <p className="form-error">{formError}</p> : null}
              <p className="form-note">
                You will receive WhatsApp confirmation within 60 minutes | Zero obligation | Free cancellation
              </p>
            </div>
          )}

          {step === 4 && (
            <div className="fstep active">
              <div className="success-box">
                <div className="success-icon">{'\uD83C\uDF89'}</div>
                <h2>Demo Booked Successfully!</h2>
                <p>
                  Your cloud demo with a certified Thynkwise architect is confirmed. Expect a
                  WhatsApp message within 60 minutes with your meeting link and a pre-read
                  savings brief.
                </p>
                <div className="success-next">
                  <p className="success-next-title">{'\u23F1'} What happens next:</p>
                  <p>1. {'\uD83D\uDCAC'} WhatsApp confirmation with meeting link (within 60 min)</p>
                  <p>2. {'\uD83D\uDCE2'} SMS reminder 1 hour before your demo</p>
                  <p>3. {'\uD83D\uDCC8'} Pre-read: your cloud savings estimate</p>
                  <p>4. {'\uD83D\uDC68\u200D\uD83D\uDCBB'} Meet your named architect - live cost analysis</p>
                </div>
                <Link href="/get-assessment" className="btn btn-primary">
                  {'\u26A1'} Also Get Your Free Assessment {'\u2192'}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <AeoFaqSection items={content.faq} />
    </div>
  );
}
