// import { Base } from '../templates/Base';
import Link from 'next/link';
import { Background } from '../../../background/Background';
import { Button } from '../../../button/Button';
import { Section } from '../../../layout/Section';
import { NavbarTwoColumns } from '../../../components/navigation/NavbarTwoColumns';
import { Logo } from '../../../templates/Logo';
import { useRouter } from 'next/router';

import { Meta } from '../../../layout/Meta';
import { AppConfig } from '../../../utils/AppConfig';
import { Banner } from '../../../templates/Banner';
import { Footer } from '../../../templates/Footer';
import { useEffect, useState } from 'react';


const Index = () => {
  const router = useRouter();
  const parsedData = router.query.id;

  console.log('Received ID:', parsedData);

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
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
      </Background>

      <Section yPadding="pt-10 pb-32">
        <div className="mb-8 text-left">
          <h2 className="text-4xl font-bold text-gray-900">Session Details</h2>
        </div>

        <div className='border rounded border-2 p-4'>
          <div className='flex'>
            <div className='w-2/3'>
              <h2 className="text-4xl font-bold text-gray-900">28 Aug 2023
              </h2>
              <h2 className="text-3xl font-bold pb-4">5:30pm-7:30pm</h2>
              <h2 className='pt-2'>Location: Aperium Mall, Serangoon North Ave 5</h2>
              <h2 className='pt-2'>Expected Pay: $15/h</h2>
              <h2 className='pt-2'>Session Goal: To achieve A in my computer science mod because this is stupid</h2>
            </div>
            <div className="w-1/3 rounded p-4 bg-gray-200">
              <h2 className="text-2xl font-bold">Student Info</h2>
              <h3 className="text-4xl font-bold text-gray-900">{parsedData}</h3>
              <div className="">
                <h3 className='pt-2'>Email: sagondese.gmail.com</h3>
                <h3 className='pt-2'>Contact: +65 969696969</h3>
                <h3 className="text-3xl pt-2">⭐ ⭐ ⭐</h3>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2">
              <Button classProps="mt-8" onClick={() => router.back()}>
                Back
              </Button>
            </div>
            <div className="w-1/2 flex justify-end items-end">
              <Link href="./details/start">
              <Button classProps="mt-2">
                Start Session
              </Button>
              </Link>
              <Button classProps="mt-2 ml-2 btn-secondary" onClick={() => router.back()}>
                Cancel Session
              </Button>
            </div>
          </div>
        </div>
      </Section>
      <Banner />
      <Footer />
    </div>
  )
};

export default Index;