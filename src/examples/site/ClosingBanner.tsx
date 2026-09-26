import { ArrowRightIcon, Banner, Button } from '../../index';
import { shared } from '../cms';

export function ClosingBanner({
  title = shared.closingBannerTitle,
  description = shared.closingBannerDescription,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="container-page pb-[clamp(40px,5vw,64px)]">
      <Banner
        title={title}
        description={description}
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
