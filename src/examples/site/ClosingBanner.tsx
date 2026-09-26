import { ArrowRightIcon, Banner, Button } from '../../index';
import { shared } from '../cms';

export function ClosingBanner({ title = shared.closingBannerTitle }: { title?: string }) {
  return (
    <div className="container-page pb-[clamp(40px,5vw,64px)]">
      <Banner
        title={title}
        action={
          <Button asChild variant="inverse" size="lg">
            <a href="/contact">
              Book a call <ArrowRightIcon />
            </a>
          </Button>
        }
      />
    </div>
  );
}
