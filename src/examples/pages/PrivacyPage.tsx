import { LegalPage } from '../site/LegalPage';
import { privacyPage } from '../cms';

export function PrivacyPage() {
  return <LegalPage doc={privacyPage} other={{ label: 'Terms of Service', href: '/terms' }} />;
}
