import { whatsappPath } from './data';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919999999999"
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24">
        <path d={whatsappPath} />
      </svg>
    </a>
  );
}
