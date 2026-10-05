import { MessageCircle } from 'lucide-react';
import { BRAND_PHONE_INTL } from '@/lib/seoData';

const TEXT = encodeURIComponent('Hello Relient team! I am visiting relient.solutions and would like to discuss a project with you.');

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp"
      href={`https://wa.me/${BRAND_PHONE_INTL.replace('+', '')}?text=${TEXT}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Relient on WhatsApp"
    >
      <MessageCircle size={18} />
      <span>WhatsApp</span>
    </a>
  );
}
