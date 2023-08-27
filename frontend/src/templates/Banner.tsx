import Link from 'next/link';

import { Button } from '../components/button/Button';
import { CTABanner } from '../components/cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Get Started with LamboTutors"
      subtitle="Start your Free Trial and unlock the world of knowledge sharing."
      button={
        <Link href="https://github.com/FiddleMe/PeerTutors/tree/main">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
