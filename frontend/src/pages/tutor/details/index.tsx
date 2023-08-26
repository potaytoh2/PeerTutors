// import { Base } from '../templates/Base';
import Link from 'next/link';
import { Background } from '../../../background/Background';
import { Button } from '../../../button/Button';
import { Section } from '../../../layout/Section';
import { NavbarTwoColumns } from '../../../navigation/NavbarTwoColumns';
import { Logo } from '../../../templates/Logo';
import { useRouter } from 'next/router';

import { Meta } from '../../../layout/Meta';
import { AppConfig } from '../../../utils/AppConfig';
import { Banner } from '../../../templates/Banner';
import { Footer } from '../../../templates/Footer';
import { UpcomingDetailsRow } from '../../../feature/UpcomingDetailsRow';
import { useEffect, useState } from 'react';


const Index = () => {
  const router = useRouter();


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
          <h2 className="text-4xl font-bold text-gray-900">Student Name</h2>
          <div className=" text-xl">Date Time</div>
          <div className=" text-xl mt-4 text-gray-900">Session Description</div>
        </div>

          {/* {data.map(item => (
            <UpcomingDetailsRow key={item.id} title={item.title} desc={item.description} mod={item.mod}/>
          ))} */}

          <Button classProps='mt-8' onClick={() => router.back()}>
            Back
          </Button>
      </Section>
      {/* <VerticalFeatures /> */}
      <Banner />
      <Footer />
    </div>
  )
};

export default Index;