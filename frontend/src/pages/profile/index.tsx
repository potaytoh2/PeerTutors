// import { Base } from '../templates/Base';
import Link from 'next/link';
import { Background } from '@/background/Background';
import { Button } from '@/button/Button';
import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/components/navigation/NavbarTwoColumns';
import { Logo } from '@/templates/Logo';
import { useRouter } from 'next/router';
import { Meta } from '@/layout/Meta';
import { AppConfig } from '@/utils/AppConfig';
import { Banner } from '@/templates/Banner';
import { Footer } from '@/templates/Footer';

const Profile = () => {
    const router = useRouter();
    return (  
<div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Background color="bg-gray-100">
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
          </NavbarTwoColumns>
        </Section>
      </Background>

      <Section yPadding="pt-10 pb-32">
        <div className="mb-6 text-left">
          <img className='w-32 h-32' src={`${router.basePath}/assets/images/icons8-user-profile-96.png`}/>
          <h2 className="text-4xl font-bold text-gray-900">Bob Marley</h2>
          <div className=" text-xl">Profile Details</div>
        </div>
        <hr />
        <div className='mt-5'>
          <h2 className='text-gray-900 font-semibold mb-5'>Personal Information</h2>
          <h3 className='mb-2'>Email: bobmarley@gmail.com</h3>
          <h3 className='mb-2'>Contact: +65 9838 8888</h3>
          <h3 className='mb-2'>Gender: M</h3>
        </div>

          <Button classProps='mt-8' onClick={() => router.replace("./")}>
            Back
          </Button>
      </Section>
      {/* <VerticalFeatures /> */}
      <Banner />
      <Footer />
    </div>


    )
};

export default Profile;