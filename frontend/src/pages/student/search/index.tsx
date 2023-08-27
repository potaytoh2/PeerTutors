// import { Base } from '../templates/Base';
import Link from 'next/link';
import { Background } from '../../../background/Background';
import { Button } from '../../../button/Button';
import { Section } from '../../../layout/Section';
import { NavbarTwoColumns } from '../../../components/navigation/NavbarTwoColumns';
import { Logo } from '../../../templates/Logo';
import { useRouter } from 'next/router';
import { Form, InputGroup } from 'react-bootstrap';

import { Meta } from '../../../layout/Meta';
import { AppConfig } from '../../../utils/AppConfig';
import { Banner } from '../../../templates/Banner';
import { Footer } from '../../../templates/Footer';
import { SearchDetailsRow } from '../../../components/feature/SearchDetailsRow';
import { useEffect, useState } from 'react';


const Index = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  // async function fetchData() {
  //   const response = await fetch('your-api-endpoint'); // Replace with your actual API endpoint
  //   const data = await response.json();
  //   return data;
  // }

  const [search, setSearch] = useState('');


  async function fetchData() {
    // Simulate fetching data from an API
    const fakeApiResponse = [
      {
        id: 1,
        name: 'Bob Marley',
        description: 'Description for Item 1',
        mod: 'CS203 CSD',
        date: '10 Jan 2023',
        time: '5:30pm-7:30pm',
      },
      {
        id: 2,
        name: 'John Doe',
        description: 'Description for Item 2',
        mod: 'IS112 DBMS',
        date: '08 Feb 2023',
        time: '3:30pm-5:30pm',
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
        <div className='mb-8 flex'>
          <div className="text-left w-1/4">
            <h2 className="text-4xl font-bold text-gray-900">Search</h2>
            <div className=" text-xl">Find Available Sessions</div>
          </div>
          <div className='w-3/4 justify-end pt-4'>
            {/* <Form>
              <InputGroup className="my-3">
                <Form.Control onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
              </InputGroup>
            </Form> */}
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>

          {data.map(item => (
            <SearchDetailsRow key={item.id} name={item.name} desc={item.description} mod={item.mod} date={item.date} time={item.time}/>
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