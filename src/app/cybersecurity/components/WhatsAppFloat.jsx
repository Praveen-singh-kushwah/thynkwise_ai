import { whatsappPath } from './data';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919999999999"
      className="cy-wa-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24">
        <path d={whatsappPath} fill="#fff" />
      </svg>
    </a>
  );
}
