import { LegalPage } from '../site/LegalPage';
import { termsPage } from '../cms';

export function TermsPage() {
  return <LegalPage doc={termsPage} other={{ label: 'Privacy Policy', href: '/privacy' }} />;
}
