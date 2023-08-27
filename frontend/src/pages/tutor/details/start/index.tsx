// import { Base } from '../templates/Base';
import Link from 'next/link';
import { Background } from '../../../../background/Background';
import { Button } from '../../../../button/Button';
import { Section } from '../../../../layout/Section';
import { NavbarTwoColumns } from '../../../../components/navigation/NavbarTwoColumns';
import { Logo } from '../../../../templates/Logo';
import { useRouter } from 'next/router';

import { Meta } from '../../../../layout/Meta';
import { AppConfig } from '../../../../utils/AppConfig';
import { Banner } from '../../../../templates/Banner';
import { Footer } from '../../../../templates/Footer';
import { useEffect, useState } from 'react';


const SessionStart = () => {
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
        <div className='flex'>
            <div className="w-2/3">
                <div className="mb-8 text-left">
                    <h2 className="text-4xl font-bold text-gray-900">Session Started</h2>
                    <div className=" text-xl">Recording Started...</div>
                </div>
            </div>
            <div className='w-1/3 text-right'>
              <h2 className="text-4xl font-bold text-gray-900">28 Aug 2023
              </h2>
              <h2 className="text-xl font-bold pb-4">5:30pm-7:30pm</h2>
            </div>
            </div>

          <div className='border rounded border-2 p-4'>
            <div className='w-full'>
            <textarea disabled className='w-full h-40' style={{ resize: 'none' }}></textarea>
            </div>
            
        <div className="flex">
          <div className="w-1/2">
            <Button classProps="mt-8" onClick={() => router.back()}>
              Back
            </Button>
          </div>
          <div className="w-1/2 flex justify-end items-end">
            <Button classProps="mt-2" onClick={() => router.replace("/tutor")}>
              Upload Recording
            </Button>
            <Button classProps="mt-2 ml-2 btn-secondary" onClick={() => router.replace("/tutor")}>
              Mark as Completed
            </Button>
          </div>
        </div>
          </div>

        {/* {data.map(item => (
            <UpcomingDetailsRow key={item.id} title={item.title} desc={item.description} mod={item.mod}/>
          ))} */}
      </Section>
      {/* <VerticalFeatures /> */}
      <Banner />
      <Footer />
    </div>
  )
};

export default SessionStart;