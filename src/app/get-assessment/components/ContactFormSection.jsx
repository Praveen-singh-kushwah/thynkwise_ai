export default function ContactFormSection({
  section,
  formValues,
  onChange,
  onBack,
  onSubmit,
  isSubmitting,
  errorMessage,
}) {
  if (!section) {
    return null;
  }

  const roleOptions = section.role_options || [];

  return (
    <section className="ga-quiz">
      <div className="quiz-wrap">
        <div className="contact-form show">
          {section.step_label ? <div className="q-counter">{section.step_label}</div> : null}
          {section.title ? <h2 className="q-title">{section.title}</h2> : null}
          {section.description ? <p className="q-sub">{section.description}</p> : null}

          <div className="form-row-2">
            <input
              type="text"
              placeholder={section.first_name_placeholder || 'First Name *'}
              value={formValues.firstName}
              onChange={(event) => onChange('firstName', event.target.value)}
            />
            <input
              type="text"
              placeholder={section.company_name_placeholder || 'Company Name *'}
              value={formValues.companyName}
              onChange={(event) => onChange('companyName', event.target.value)}
            />
          </div>

          <input
            type="email"
            placeholder={section.business_email_placeholder || 'Business Email *'}
            value={formValues.businessEmail}
            onChange={(event) => onChange('businessEmail', event.target.value)}
          />

          <input
            type="tel"
            placeholder={section.phone_placeholder || 'WhatsApp / Phone *'}
            value={formValues.phone}
            onChange={(event) => onChange('phone', event.target.value)}
          />

          <select
            value={formValues.role}
            onChange={(event) => onChange('role', event.target.value)}
          >
            <option value="">{section.role_placeholder || 'Your Role *'}</option>
            {roleOptions.map((item, index) => (
              <option key={item.id || `${item.value}-${index}`} value={item.value || item.label}>
                {item.label}
              </option>
            ))}
          </select>

          <div className="ga-contact-actions">
            <button type="button" className="btn-prev" onClick={onBack}>
              {section.back_button_text || '← Back'}
            </button>
            <button
              type="button"
              className="btn-next ga-contact-submit"
              onClick={onSubmit}
              disabled={isSubmitting}
            >
              {section.submit_button_text || 'Show My Assessment Results →'}
            </button>
          </div>

          {section.privacy_note ? <p className="ga-contact-note">{section.privacy_note}</p> : null}
          {errorMessage ? <p className="ga-contact-error">{errorMessage}</p> : null}
        </div>
      </div>
    </section>
  );
}
