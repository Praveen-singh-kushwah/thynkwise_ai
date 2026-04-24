import Link from 'next/link';

const fallbackSection = {
  title: 'Your pipeline problem has a system solution.',
  description:
    'Book a 30-minute discovery call. We map your current sales motion, identify the top three gaps and show you what a fixed system looks like, with timelines and outcomes upfront.',
  primary_cta: {
    button_text: 'WhatsApp: +91 97630 08800 ->',
    button_link: 'https://wa.me/919763008800',
    variant: 'whatsapp',
  },
  secondary_cta: {
    button_text: 'azra@thynkwise.co.in',
    button_link: 'mailto:azra@thynkwise.co.in',
    variant: 'email',
  },
};

function isExternalLink(url = '') {
  return /^https?:\/\//.test(url) || url.startsWith('mailto:') || url.startsWith('tel:');
}

function CtaAction({ action, variant }) {
  if (!action?.button_text || !action?.button_link) {
    return null;
  }

  const className = variant === 'primary' ? 'sc-btn sc-btn-orange' : 'sc-btn sc-btn-white';

  if (isExternalLink(action.button_link)) {
    return (
      <a href={action.button_link} className={className} target="_blank" rel="noreferrer">
        {action.button_text}
      </a>
    );
  }

  return (
    <Link href={action.button_link} className={className}>
      {action.button_text}
    </Link>
  );
}

export default function FinalCtaSection({ section }) {
  const data = section?.title ? section : fallbackSection;

  return (
    <section className="sc-final-cta">
      <div className="container">
        {data?.title ? <h2 className="rv">{data.title}</h2> : null}
        {data?.description ? <p className="rv d1">{data.description}</p> : null}
        <div className="sc-final-actions rv d2">
          <CtaAction action={data?.primary_cta} variant="primary" />
          <CtaAction action={data?.secondary_cta} variant="secondary" />
        </div>
      </div>
    </section>
  );
}
