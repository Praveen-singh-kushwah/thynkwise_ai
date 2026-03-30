'use client';

import { useState } from 'react';
import Link from 'next/link';

const FIELD_KEYS = {
  firstName: 'firstName',
  lastName: 'lastName',
  workEmail: 'workEmail',
  company: 'company',
  role: 'role',
  phone: 'phone',
  currentCloud: 'currentCloud',
  monthlySpend: 'monthlySpend',
  industry: 'industry',
  challenge: 'challenge',
  service: 'service',
  contactMethod: 'contactMethod',
  message: 'message',
};

const initialFormData = {
  [FIELD_KEYS.firstName]: '',
  [FIELD_KEYS.lastName]: '',
  [FIELD_KEYS.workEmail]: '',
  [FIELD_KEYS.company]: '',
  [FIELD_KEYS.role]: '',
  [FIELD_KEYS.phone]: '',
  [FIELD_KEYS.currentCloud]: '',
  [FIELD_KEYS.monthlySpend]: '',
  [FIELD_KEYS.industry]: '',
  [FIELD_KEYS.challenge]: '',
  [FIELD_KEYS.service]: '',
  [FIELD_KEYS.contactMethod]: '',
  [FIELD_KEYS.message]: '',
};

const defaultFormSection = {
  heading: "Tell us what you're working on.",
  description: '3 quick questions. The more specific you are, the more useful our response will be.',
  step_indicators: [
    { step_number: 1, label: 'About You' },
    { step_number: 2, label: 'Your Cloud Situation' },
    { step_number: 3, label: 'What You Need' },
  ],
  about_you_step: {
    first_name_label: 'First Name',
    first_name_placeholder: 'Rahul',
    last_name_label: 'Last Name',
    last_name_placeholder: 'Sharma',
    work_email_label: 'Work Email',
    work_email_placeholder: 'rahul@company.com',
    company_label: 'Company',
    company_placeholder: 'Company Pvt. Ltd.',
    role_label: 'Your Role',
    role_placeholder: 'Select role',
    role_options: [
      { label: 'CTO / CIO', value: 'cto-cio' },
      { label: 'VP Engineering', value: 'vp-engineering' },
      { label: 'Head of IT / Infrastructure', value: 'head-of-it-infrastructure' },
      { label: 'CISO / Security Head', value: 'ciso-security-head' },
      { label: 'Cloud Architect', value: 'cloud-architect' },
      { label: 'Finance / CFO', value: 'finance-cfo' },
      { label: 'Founder / CEO', value: 'founder-ceo' },
      { label: 'Other', value: 'other' },
    ],
    phone_label: 'Mobile (WhatsApp preferred)',
    phone_placeholder: '+91 98765 43210',
    continue_button_text: 'Continue → Cloud Situation',
  },
  cloud_situation_step: {
    current_cloud_label: 'Current Cloud Provider(s)',
    current_cloud_placeholder: 'Select current setup',
    current_cloud_options: [
      { label: 'Not yet on cloud - evaluating', value: 'not-yet-on-cloud-evaluating' },
      { label: 'AWS only', value: 'aws-only' },
      { label: 'Azure only', value: 'azure-only' },
      { label: 'Google Cloud only', value: 'google-cloud-only' },
      { label: 'AWS + Azure', value: 'aws-azure' },
      { label: 'AWS + GCP', value: 'aws-gcp' },
      { label: 'Azure + GCP', value: 'azure-gcp' },
      { label: 'All three hyperscalers', value: 'all-three-hyperscalers' },
      { label: 'On-premise + partial cloud', value: 'on-premise-partial-cloud' },
      { label: 'ESDS / Indian DC only', value: 'esds-indian-dc-only' },
      { label: 'Other / Mixed', value: 'other-mixed' },
    ],
    monthly_spend_label: 'Monthly Cloud Spend (approx)',
    monthly_spend_placeholder: 'Select range',
    monthly_spend_options: [
      { label: 'Under ₹1L / month', value: 'under-1l' },
      { label: '₹1L - ₹5L / month', value: '1l-5l' },
      { label: '₹5L - ₹25L / month', value: '5l-25l' },
      { label: '₹25L - ₹1Cr / month', value: '25l-1cr' },
      { label: 'Over ₹1Cr / month', value: 'over-1cr' },
      { label: 'Not sure / evaluating', value: 'not-sure-evaluating' },
    ],
    industry_label: 'Industry / Sector',
    industry_placeholder: 'Select sector',
    industry_options: [
      { label: 'Banking / NBFC', value: 'banking-nbfc' },
      { label: 'Insurance', value: 'insurance' },
      { label: 'Fintech / Payments', value: 'fintech-payments' },
      { label: 'SaaS / Technology', value: 'saas-technology' },
      { label: 'E-Commerce / D2C', value: 'ecommerce-d2c' },
      { label: 'Manufacturing', value: 'manufacturing' },
      { label: 'Healthcare / Pharma', value: 'healthcare-pharma' },
      { label: 'Logistics / Supply Chain', value: 'logistics-supply-chain' },
      { label: 'Media / Entertainment', value: 'media-entertainment' },
      { label: 'Government / PSU', value: 'government-psu' },
      { label: 'Education / EdTech', value: 'education-edtech' },
      { label: 'Other', value: 'other' },
    ],
    challenge_label: 'Biggest Cloud Challenge Right Now',
    challenge_placeholder: 'Select primary challenge',
    challenge_options: [
      { label: 'Cloud costs too high - need FinOps', value: 'cloud-costs-too-high' },
      { label: 'Migrating from on-premise to cloud', value: 'migrating-on-premise-to-cloud' },
      { label: 'RBI / DPDP / compliance concerns', value: 'compliance-concerns' },
      { label: 'No reliable 24/7 managed support', value: 'no-reliable-managed-support' },
      { label: 'Managing multiple clouds is complex', value: 'managing-multiple-clouds-is-complex' },
      { label: 'Security posture - gaps in coverage', value: 'security-posture-gaps' },
      { label: 'Team lacks cloud expertise', value: 'team-lacks-cloud-expertise' },
      { label: 'Evaluating which cloud to choose', value: 'evaluating-which-cloud-to-choose' },
      { label: 'DR / Business continuity concerns', value: 'dr-business-continuity-concerns' },
      { label: 'Other', value: 'other' },
    ],
    back_button_text: '← Back',
    continue_button_text: 'Continue → What You Need',
  },
  requirements_step: {
    service_label: 'What are you looking for?',
    service_placeholder: 'Select primary need',
    service_options: [
      { label: 'Managed Cloud Services (ongoing)', value: 'managed-cloud-services' },
      { label: 'Cloud Migration Project', value: 'cloud-migration-project' },
      { label: 'BFSI Cloud Compliance Setup', value: 'bfsi-cloud-compliance-setup' },
      { label: 'FinOps / Cost Optimisation', value: 'finops-cost-optimisation' },
      { label: 'AWS / Azure / GCP Pricing', value: 'aws-azure-gcp-pricing' },
      { label: 'Free Cloud Assessment', value: 'free-cloud-assessment' },
      { label: '30-min Demo', value: '30-min-demo' },
      { label: 'Architecture Review', value: 'architecture-review' },
      { label: 'DevOps / SRE Support', value: 'devops-sre-support' },
      { label: 'Security / DPDP Compliance', value: 'security-dpdp-compliance' },
      { label: 'ESDS / Sovereign Cloud', value: 'esds-sovereign-cloud' },
      { label: 'Other', value: 'other' },
    ],
    contact_method_label: 'Preferred Contact Method',
    contact_method_placeholder: 'Select preference',
    contact_method_options: [
      { label: 'WhatsApp (fastest)', value: 'whatsapp' },
      { label: 'Phone call', value: 'phone-call' },
      { label: 'Email', value: 'email' },
      { label: 'Video call / Google Meet', value: 'video-call-google-meet' },
      { label: 'On-site meeting', value: 'on-site-meeting' },
    ],
    message_label: 'Anything else we should know?',
    message_placeholder:
      'Tell us about your current setup, compliance needs, migration timeline, cost concerns, or what kind of response would be most helpful.',
    privacy_note:
      'We use this information only to respond to your enquiry and prepare a relevant recommendation. No spam. No hand-off to third-party resellers.',
    back_button_text: '← Back',
    submit_button_text: 'Send to Thynkwise Team →',
  },
  success_state: {
    icon: 'success',
    title_template: "We've received your message, {{first_name}}.",
    description:
      "A Thynkwise cloud specialist will contact you via your preferred channel within 4 business hours - in IST. You'll be speaking to someone who has read what you wrote, not a ticket number.",
    what_happens_next_title: 'What happens next:',
    what_happens_next_items: [
      {
        label: 'Your enquiry is reviewed by a sector-specialist (BFSI, SaaS, or enterprise) within 1 hour',
        value: 'sector-specialist-review',
      },
      {
        label: "You'll receive a WhatsApp or email acknowledgement within 4 business hours",
        value: 'acknowledgement-within-4-hours',
      },
      {
        label: 'If you requested a demo or assessment, a calendar link goes out same day',
        value: 'calendar-link-same-day',
      },
      {
        label: 'Initial response includes a brief summary of what Thynkwise recommends for your situation - before any sales call',
        value: 'initial-recommendation-summary',
      },
    ],
    primary_button_text: 'WhatsApp Us Now',
    primary_button_link: 'https://wa.me/919999999999',
  },
  quick_actions: [
    {
      icon: 'chat',
      label: 'WhatsApp Now',
      subtext: 'Avg 8-min response',
      link: 'https://wa.me/919999999999',
      style_tone: 'whatsapp',
    },
    {
      icon: 'phone',
      label: 'Call Direct',
      subtext: '+91 99999 99988',
      link: 'tel:+919999999988',
      style_tone: 'call',
    },
  ],
  quick_actions_note: 'Support hours: Mon-Sat, 9AM-8PM IST · WhatsApp: 24/7 for P1 incidents on managed services',
};

const defaultChannelsSection = {
  channels: [
    {
      icon: 'chat',
      title: 'WhatsApp Sales Team',
      subtitle: 'Fastest · Avg 8-min response',
      description:
        "Send a message describing your cloud challenge. You'll get a response from a named cloud specialist - not a bot, not a FAQ link. Works 24/7 for managed services P1 incidents.",
      cta_text: 'Open WhatsApp →',
      link: 'https://wa.me/919999999999',
      style_tone: 'whatsapp',
    },
    {
      icon: 'calendar',
      title: 'Book a 30-Min Demo',
      subtitle: 'Live · Calendar booking',
      description:
        'A structured 30-minute session covering AWS, Azure, or GCP pricing in local currency, your migration or compliance scenario, and a realistic cost estimate. No slides, no deck - live platform access.',
      cta_text: 'Book Demo →',
      link: '/book-demo',
      style_tone: 'demo',
    },
    {
      icon: 'assessment',
      title: 'Free Cloud Assessment',
      subtitle: 'Delivered in 3 business days',
      description:
        'A written assessment of your current cloud situation: cost optimisation opportunities, compliance gaps, architecture recommendations, and a clear local currency proposal. No commitment required.',
      cta_text: 'Get Free Assessment →',
      link: '/get-assessment',
      style_tone: 'assessment',
    },
  ],
};

const defaultOfficesSection = {
  heading: 'Our Offices',
  city_count_label: '8 Cities',
  offices: [
    {
      city_icon: 'mumbai',
      city_name: 'Mumbai',
      location_tag: 'HQ',
      tag_tone: 'hq',
      address: '<p>Level 12, One BKC, Bandra Kurla Complex,<br>Mumbai, Maharashtra - 400 051</p>',
      phone: '+91 22 6600 0001',
      phone_link: 'tel:+912266000001',
      email: 'contact@thynkwise.ai',
      email_link: 'mailto:contact@thynkwise.ai',
    },
    {
      city_icon: 'bengaluru',
      city_name: 'Bengaluru',
      location_tag: 'SRE Hub',
      tag_tone: 'sre',
      address: '<p>4th Floor, Prestige Shantiniketan,<br>Whitefield, Bengaluru - 560 048</p>',
      phone: '+91 80 6600 0001',
      phone_link: 'tel:+918066000001',
      email: 'contact@thynkwise.ai',
      email_link: 'mailto:contact@thynkwise.ai',
    },
    {
      city_icon: 'delhi',
      city_name: 'Delhi NCR',
      location_tag: 'Office',
      tag_tone: 'office',
      address: '<p>Unit 501, DLF Cyber City Phase II,<br>Gurugram, Haryana - 122 002</p>',
      phone: '+91 124 4000 001',
      phone_link: 'tel:+911244000001',
      email: 'contact@thynkwise.ai',
      email_link: 'mailto:contact@thynkwise.ai',
    },
    {
      city_icon: 'hyderabad',
      city_name: 'Hyderabad',
      location_tag: 'Azure CoE',
      tag_tone: 'office',
      address: '<p>3rd Floor, Building 9, Raheja Mindspace,<br>Madhapur, Hyderabad - 500 081</p>',
      phone: '+91 40 6600 0001',
      phone_link: 'tel:+914066000001',
      email: 'contact@thynkwise.ai',
      email_link: 'mailto:contact@thynkwise.ai',
    },
    {
      city_icon: 'chennai',
      city_name: 'Chennai',
      location_tag: 'DR Hub',
      tag_tone: 'sre',
      address: '<p>Level 8, Prince Infocity II, Old Mahabalipuram Rd,<br>Chennai, Tamil Nadu - 600 096</p>',
      phone: '+91 44 6600 0001',
      phone_link: 'tel:+914466000001',
      email: 'contact@thynkwise.ai',
      email_link: 'mailto:contact@thynkwise.ai',
    },
    {
      city_icon: 'pune',
      city_name: 'Pune',
      location_tag: 'FinOps CoE',
      tag_tone: 'office',
      address: '<p>5th Floor, World Trade Centre, Kharadi,<br>Pune, Maharashtra - 411 014</p>',
      phone: '+91 20 6600 0001',
      phone_link: 'tel:+912066000001',
      email: 'contact@thynkwise.ai',
      email_link: 'mailto:contact@thynkwise.ai',
    },
  ],
};

function normalizeIcon(icon) {
  const normalized = String(icon || '')
    .trim()
    .toLowerCase();

  if (normalized.includes('chat') || normalized.includes('whatsapp')) return '💬';
  if (normalized.includes('phone') || normalized.includes('call')) return '📞';
  if (normalized.includes('calendar') || normalized.includes('demo')) return '📅';
  if (normalized.includes('assessment') || normalized.includes('search') || normalized.includes('magnify')) return '🔍';
  if (normalized.includes('email') || normalized.includes('mail')) return '✉️';
  if (normalized.includes('success') || normalized.includes('check')) return '✅';
  if (normalized.includes('mumbai')) return '🏙️';
  if (normalized.includes('bengaluru')) return '🌆';
  if (normalized.includes('delhi')) return '🏛️';
  if (normalized.includes('hyderabad')) return '🔵';
  if (normalized.includes('chennai')) return '🌊';
  if (normalized.includes('pune')) return '🏢';
  if (icon && icon.length <= 3) return icon;

  return '';
}

function isExternalLink(href) {
  return (
    href?.startsWith('http://') ||
    href?.startsWith('https://') ||
    href?.startsWith('mailto:') ||
    href?.startsWith('tel:')
  );
}

function ActionLink({ href, className, children, ...props }) {
  if (!href) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  if (isExternalLink(href)) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}

function SelectField({ label, placeholder, options = [], value, onChange }) {
  return (
    <div className="field">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={option.id || `${option.value}-${index}`} value={option.value || option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function ContactMainSection({ formSection, channelsSection, officesSection }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [openOfficeIndex, setOpenOfficeIndex] = useState(0);
  const [formData, setFormData] = useState(initialFormData);

  const resolvedFormSection = formSection || defaultFormSection;
  const resolvedChannelsSection = channelsSection || defaultChannelsSection;
  const resolvedOfficesSection = officesSection || defaultOfficesSection;

  const indicators = resolvedFormSection.step_indicators || [];
  const aboutStep = resolvedFormSection.about_you_step;
  const cloudStep = resolvedFormSection.cloud_situation_step;
  const requirementsStep = resolvedFormSection.requirements_step;
  const successState = resolvedFormSection.success_state;
  const quickActions = resolvedFormSection.quick_actions || [];
  const channels = resolvedChannelsSection.channels || [];
  const offices = resolvedOfficesSection.offices || [];
  const successTitle = successState?.title_template?.replace(
    '{{first_name}}',
    formData.firstName?.trim() || 'there',
  );

  const goNext = () => setCurrentStep((step) => Math.min(step + 1, 3));
  const goBack = () => setCurrentStep((step) => Math.max(step - 1, 1));

  const updateField = (field) => (event) => {
    setFormData((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div>
            <div className="form-card rv">
                <div className="form-head">
                  {resolvedFormSection.heading ? <h2>{resolvedFormSection.heading}</h2> : null}
                  {resolvedFormSection.description ? <p>{resolvedFormSection.description}</p> : null}
                </div>

                <div className="form-step-indicator">
                  {indicators.map((item, index) => {
                    const stepNumber = index + 1;
                    const statusClass =
                      stepNumber < currentStep ? 'done' : stepNumber === currentStep ? 'active' : 'pending';

                    return (
                      <div key={item.id || `${item.label}-${stepNumber}`} className="fsi-item-wrap">
                        <div className={`fsi-item ${stepNumber === currentStep ? 'active' : ''}`}>
                          <div className={`fsi-dot ${statusClass}`}>{stepNumber < currentStep ? '✓' : stepNumber}</div>
                          <span className="fsi-label">{item.label}</span>
                        </div>
                        {index < indicators.length - 1 ? (
                          <div className={`fsi-line ${stepNumber < currentStep ? 'done' : ''}`} />
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                {!submitted ? (
                  <form onSubmit={submitForm}>
                    <div className={`form-step ${currentStep === 1 ? 'active' : ''}`}>
                      <div className="field-row">
                        <div className="field">
                          <label>{aboutStep?.first_name_label}</label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={updateField(FIELD_KEYS.firstName)}
                            placeholder={aboutStep?.first_name_placeholder}
                          />
                        </div>
                        <div className="field">
                          <label>{aboutStep?.last_name_label}</label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={updateField(FIELD_KEYS.lastName)}
                            placeholder={aboutStep?.last_name_placeholder}
                          />
                        </div>
                      </div>
                      <div className="field-row single">
                        <div className="field">
                          <label>{aboutStep?.work_email_label}</label>
                          <input
                            type="email"
                            value={formData.workEmail}
                            onChange={updateField(FIELD_KEYS.workEmail)}
                            placeholder={aboutStep?.work_email_placeholder}
                          />
                        </div>
                      </div>
                      <div className="field-row">
                        <div className="field">
                          <label>{aboutStep?.company_label}</label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={updateField(FIELD_KEYS.company)}
                            placeholder={aboutStep?.company_placeholder}
                          />
                        </div>
                        <SelectField
                          label={aboutStep?.role_label}
                          placeholder={aboutStep?.role_placeholder}
                          options={aboutStep?.role_options}
                          value={formData.role}
                          onChange={updateField(FIELD_KEYS.role)}
                        />
                      </div>
                      <div className="field-row single">
                        <div className="field">
                          <label>{aboutStep?.phone_label}</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={updateField(FIELD_KEYS.phone)}
                            placeholder={aboutStep?.phone_placeholder}
                          />
                        </div>
                      </div>
                      <div className="form-nav">
                        <button type="button" className="btn-form-next" onClick={goNext}>
                          {aboutStep?.continue_button_text}
                        </button>
                      </div>
                    </div>

                    <div className={`form-step ${currentStep === 2 ? 'active' : ''}`}>
                      <div className="field-row single">
                        <SelectField
                          label={cloudStep?.current_cloud_label}
                          placeholder={cloudStep?.current_cloud_placeholder}
                          options={cloudStep?.current_cloud_options}
                          value={formData.currentCloud}
                          onChange={updateField(FIELD_KEYS.currentCloud)}
                        />
                      </div>
                      <div className="field-row">
                        <SelectField
                          label={cloudStep?.monthly_spend_label}
                          placeholder={cloudStep?.monthly_spend_placeholder}
                          options={cloudStep?.monthly_spend_options}
                          value={formData.monthlySpend}
                          onChange={updateField(FIELD_KEYS.monthlySpend)}
                        />
                        <SelectField
                          label={cloudStep?.industry_label}
                          placeholder={cloudStep?.industry_placeholder}
                          options={cloudStep?.industry_options}
                          value={formData.industry}
                          onChange={updateField(FIELD_KEYS.industry)}
                        />
                      </div>
                      <div className="field-row single">
                        <SelectField
                          label={cloudStep?.challenge_label}
                          placeholder={cloudStep?.challenge_placeholder}
                          options={cloudStep?.challenge_options}
                          value={formData.challenge}
                          onChange={updateField(FIELD_KEYS.challenge)}
                        />
                      </div>
                      <div className="form-nav">
                        <button type="button" className="btn-form-back" onClick={goBack}>
                          {cloudStep?.back_button_text}
                        </button>
                        <button type="button" className="btn-form-next" onClick={goNext}>
                          {cloudStep?.continue_button_text}
                        </button>
                      </div>
                    </div>

                    <div className={`form-step ${currentStep === 3 ? 'active' : ''}`}>
                      <div className="field-row single">
                        <SelectField
                          label={requirementsStep?.service_label}
                          placeholder={requirementsStep?.service_placeholder}
                          options={requirementsStep?.service_options}
                          value={formData.service}
                          onChange={updateField(FIELD_KEYS.service)}
                        />
                      </div>
                      <div className="field-row single">
                        <SelectField
                          label={requirementsStep?.contact_method_label}
                          placeholder={requirementsStep?.contact_method_placeholder}
                          options={requirementsStep?.contact_method_options}
                          value={formData.contactMethod}
                          onChange={updateField(FIELD_KEYS.contactMethod)}
                        />
                      </div>
                      <div className="field-row single">
                        <div className="field">
                          <label>{requirementsStep?.message_label}</label>
                          <textarea
                            value={formData.message}
                            onChange={updateField(FIELD_KEYS.message)}
                            placeholder={requirementsStep?.message_placeholder}
                          />
                        </div>
                      </div>
                      {requirementsStep?.privacy_note ? <p className="form-note">{requirementsStep.privacy_note}</p> : null}
                      <div className="form-nav">
                        <button type="button" className="btn-form-back" onClick={goBack}>
                          {requirementsStep?.back_button_text}
                        </button>
                        <button type="submit" className="btn-form-next">
                          {requirementsStep?.submit_button_text}
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="form-success show">
                    {successState?.icon ? <span className="fs-icon">{normalizeIcon(successState.icon) || successState.icon}</span> : null}
                    {successTitle ? <div className="fs-title">{successTitle}</div> : null}
                    {successState?.description ? <p className="fs-sub">{successState.description}</p> : null}
                    {successState?.what_happens_next_items?.length ? (
                      <div className="fs-what-next">
                        {successState.what_happens_next_title ? <h4>{successState.what_happens_next_title}</h4> : null}
                        <ul className="fs-steps">
                          {successState.what_happens_next_items.map((item, index) => (
                            <li key={item.id || `${item.value}-${index}`}>{item.label}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {successState?.primary_button_text ? (
                      <div className="fs-actions">
                        <ActionLink href={successState.primary_button_link} className="btn btn-wa">
                          {successState.primary_button_text}
                        </ActionLink>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>

            {quickActions.length ? (
              <div className="contact-quick-wrap rv d2">
                <div className="quick-row">
                  {quickActions.map((item, index) => (
                    <ActionLink
                      key={item.id || `${item.label}-${index}`}
                      href={item.link}
                      className={`qa-btn ${
                        item.style_tone === 'whatsapp' ? 'qa-wa' : item.style_tone === 'call' ? 'qa-call' : ''
                      }`}
                    >
                      <span className="qa-icon">{normalizeIcon(item.icon)}</span>
                      <div>
                        <div className="qa-label">{item.label}</div>
                        <div className="qa-sub">{item.subtext}</div>
                      </div>
                    </ActionLink>
                  ))}
                </div>
                {resolvedFormSection.quick_actions_note ? <p className="qa-note">{resolvedFormSection.quick_actions_note}</p> : null}
              </div>
            ) : null}
          </div>

          <div className="contact-sidebar">
            {channels.map((item, index) => (
              <ActionLink
                key={item.id || `${item.title}-${index}`}
                href={item.link}
                className={`channel-card ${
                  item.style_tone === 'whatsapp' ? 'ch-wa' : item.style_tone === 'demo' ? 'ch-demo' : 'ch-email'
                } rv d${Math.min(index + 1, 4)}`}
              >
                <div className="ch-head">
                  <div className="ch-icon">{normalizeIcon(item.icon)}</div>
                  <div>
                    <div className="ch-title">{item.title}</div>
                    <div className="ch-subtitle">{item.subtitle}</div>
                  </div>
                </div>
                {item.description ? <p className="ch-body">{item.description}</p> : null}
                {item.cta_text ? <span className="ch-cta">{item.cta_text}</span> : null}
              </ActionLink>
            ))}

            <div className="offices-card rv d4">
                <div className="offices-head">
                  {resolvedOfficesSection.heading ? <h3>{resolvedOfficesSection.heading}</h3> : null}
                  {resolvedOfficesSection.city_count_label ? <span>{resolvedOfficesSection.city_count_label}</span> : null}
                </div>
                {offices.map((item, index) => {
                  const isOpen = openOfficeIndex === index;

                  return (
                    <div key={item.id || `${item.city_name}-${index}`} className={`office-item ${isOpen ? 'open' : ''}`}>
                      <button
                        type="button"
                        className="office-toggle"
                        onClick={() => setOpenOfficeIndex(isOpen ? -1 : index)}
                      >
                        <span className="ot-city">
                          {normalizeIcon(item.city_icon) ? `${normalizeIcon(item.city_icon)} ` : ''}
                          {item.city_name}
                        </span>
                        <span className={`ot-tag ${item.tag_tone || 'office'}`}>{item.location_tag}</span>
                        <span className="ot-arrow">{isOpen ? '▴' : '▾'}</span>
                      </button>
                      <div className="office-detail">
                        <div className="od-inner">
                          {item.address ? (
                            <div className="od-addr" dangerouslySetInnerHTML={{ __html: item.address }} />
                          ) : null}
                          <div className="od-contacts">
                            {item.phone ? (
                              <ActionLink href={item.phone_link} className="od-contact">
                                📞 {item.phone}
                              </ActionLink>
                            ) : null}
                            {item.email ? (
                              <ActionLink href={item.email_link} className="od-contact">
                                ✉️ {item.email}
                              </ActionLink>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
