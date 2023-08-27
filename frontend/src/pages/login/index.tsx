// import { Base } from '../templates/Base';
import Link from 'next/link';
import { Button } from '../../components/button/Button';
import { useRouter } from 'next/router';
import {useState} from 'react';
import {ReqBody} from '../../services/auth/processLogin';


import Login from '../../components/textfield'
// import { VerticalFeatures } from '../../templates/VerticalFeatures';

const Home = () => {
    const [isUser, setIsUser] = useState(false);
    const [receivedUsername, setReceivedUsername] = useState('');
    const [receivedPassword, setReceivedPassword] = useState('');

    const handleUsernameFromChild = (username:string) =>{
        setReceivedUsername(username);
    }

    const handlePasswordFromChild = (password:string) =>{
        setReceivedPassword(password);
    }

    const signInAttempt = async() =>{
        try {
            const requestBody: ReqBody = {
              email: receivedUsername,
              password: receivedPassword,
            };
            const response = await fetch('/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(requestBody),
            });
        
            if (response.status === 200) {
              const result = await response.json();
              setIsUser(true);
              console.log('User logged in:', result.data);
            } else {
              const errorData = await response.json();
              console.log('Error:', errorData.error);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };

        const register= async() =>{
            try {
                const requestBody: ReqBody = {
                  email: receivedUsername,
                  password: receivedPassword,
                };
                const response = await fetch('/api/login', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(requestBody),
                });
            
                if (response.status === 200) {
                  const result = await response.json();
                  setIsUser(true);
                  console.log('User logged in:', result.data);
                } else {
                  const errorData = await response.json();
                  console.log('Error:', errorData.error);
                }
              } catch (error) {
                console.error('Error:', error);
              }
            };
        
    const router = useRouter();
    return (  

        <div className="h-screen w-screen flex">
            <div className="md:container md:mx-auto w-1/2 h-screen bg-sky-600 inline-block">
                <div className="md:container md:mx-auto h-1/2 flex justify-center mt-16">
                    <img className="h-9/12 w-7/12 align-top " src={`${router.basePath}${"/assets/images/peer.png"}`}/>
                </div>
                <div className="h-1/2 flex justify-center">
                    <div className= "md:container md:mx-auto block">
                        <p className="text-center text-6xl text-white">
                            LamboTutors
                        </p>
                        <p className="text-center text-3xl text-white m-16">
                            Empowering Education,<br></br> One Connection at a Time
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:container md:mx-auto w-1/2 h-screen block">
                <div className="md:container md:mx-auto mt-36 flex justify-center">
                    <img className="h-1/6 w-1/6 align-top " src={`${router.basePath}${"/assets/images/logo.png"}`}/>
                </div>
                <div className="md:container md:mx-auto block">
                    <p className="font-bold text-center text-sky-600 text-4xl ">
                        Login
                    </p>
                    <p className="text-center text-sky-600 text-xl">
                        Sign in to your account
                    </p>
                </div>
                <div className="md:container md:mx-auto flex justify-center mt-16">
                    <Login onUsernameChange={handleUsernameFromChild} onPasswordChange={handlePasswordFromChild}/>
                </div>
                <div className="w-full h-24 md:container md:mx-auto flex justify-center mt-12">
                    <Link href="../tutor">  
                        <Button classProps="h-full w-96" onClick={signInAttempt}>
                            Login
                        </Button>
                    </Link>
                </div>
                <div className="md:container md:mx-auto flex justify-center mt-8">
                    <p className="underline text-center text-base text-lime-800;">
                        <Link href="https://creativedesignsguru.com/category/nextjs/">
                            I forgot my password. Click here to reset.
                        </Link>
                    </p>
                </div>
                <div className="w-full h-24 md:container md:mx-auto flex justify-center mt-8">
                    <Button classProps="h-full w-96" onClick={register}>
                        Register Account
                    </Button>
                </div>
            </div>
        </div>


    )
};

export default Home;