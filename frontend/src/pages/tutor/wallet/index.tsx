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
import { WalletDetailsRow } from '../../../components/feature/WalletDetailsRow';
import { useEffect, useState } from 'react';


const Index = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  // async function fetchData() {
  //   const response = await fetch('your-api-endpoint'); // Replace with your actual API endpoint
  //   const data = await response.json();
  //   return data;
  // }

  async function fetchData() {
    // Simulate fetching data from an API
    const fakeApiResponse = [
      {
        id: 1,
        name: 'Jimmy Neutron',
        description: 'Description for Item 1',
        mod: 'CS203 CSD',
        date: '28 Aug 2023',
        time: '5:30pm-7:30pm',
        price: '20.10'
      },
      {
        id: 2,
        name: 'John Doe',
        description: 'Description for Item 2',
        mod: 'IS112 DBMS',
        date: '08 Aug 2023',
        time: '3:30pm-5:30pm',
        price: '74.20'
      },
      // Add more mock data items as needed
    ];
  
    // Simulate an asynchronous operation by wrapping the mock data in a Promise
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeApiResponse);
      }, 500); // Simulate a delay of 1 second
    });
  }

  useEffect(() => {
    // Fetch data and update the state
    fetchData().then(result => {
      setData(result);
    });
  }, []); // Empty dependency array means this effect runs only once on component mount


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
        <div className='flex mb-8'>
            <div className="text-left w-1/2">
                <h2 className="text-4xl font-bold text-gray-900">Wallet</h2>
                <div className=" text-xl">View Earnings</div>
            </div>
            <div className='flex justify-end w-1/2 text-primary-800'>
                <div className='bg-primary-200 px-8 py-2 rounded-3xl'>
                    <h2 className="text-4xl font-bold">$1,550.56</h2>
                    <div className="text-xl text-right leading-4 pb-2 text-primary-700">Total Balance</div>
                </div>
            </div>
        </div>

          {data.map(item => (
            <WalletDetailsRow key={item.id} name={item.name} desc={item.description} mod={item.mod} date={item.date} time={item.time} price={item.price}/>
          ))}

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

export default Index;