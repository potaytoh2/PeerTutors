import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { Button } from '../components/button/Button';
import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter();
  const bgImagePath = `${router.basePath}/assets/images/bg.jpg`;

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
              GitHub
            </Link>
          </li>
          <li>
            <Link href="/">Sign in</Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      {/* <div style={{ backgroundImage: `url(${bgImagePath})` }} className="bg-cover bg-center w-full h-full"> */}
      <Section yPadding="pt-20 pb-32">
          <HeroOneButton
            title={
              <>
                {'Embark Your Journey with\n'}
                <span className="text-primary-500">LamboTutors</span>
              </>
            }
            description="Your Ultimate Peer-to-Peer Tutoring Solution!"
            button={
              <Link href="student">
                <Button xl>Register Now!</Button>
              </Link>
            }
          />
      </Section>
      {/* </div> */}
    </Background>
  );
}

export { Hero };
