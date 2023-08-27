// import { Base } from '../templates/Base';
import Link from 'next/link';
import { Button } from '../../components/button/Button';
import { useRouter } from 'next/router';
import {ReqBody} from '../../services/auth/processLogin';


import Login from '../../components/textfield'
// import { VerticalFeatures } from '../../templates/VerticalFeatures';
import { useState } from 'react';
import { setAuthToken, getAuthToken } from '@/utils/auth';

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
    const router = useRouter();
    const handleLogin = () => {
        // Perform authentication logic
        // If successful, set the authentication token as a cookie
        // setCookie('authToken', 'your-auth-token');
        setAuthToken("test123");
        window.alert('User: ' + getAuthToken() + ' has logged in..' );
      };


      const [formState, setFormState] = useState({ userID: '', password: '' });

      const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState((prev) => ({
          ...prev,
          [name]: value
        }));
      };

    return (  

        <div className="h-screen w-screen flex">
            <div className="md:container md:mx-auto w-1/2 h-screen bg-sky-600 inline-block">
                <div className="md:container md:mx-auto h-1/2 flex justify-center mt-16">
                    <img className="h-9/12 w-7/12 align-top " src={`${router.basePath}${"/assets/images/peer.png"}`}/>
                </div>
                <div className="flex justify-center">
                    <div className= "md:container md:mx-auto block">
                        <h2 className="text-center text-6xl text-white">
                            LamboTutors
                        </h2>
                        <h3 className="text-center text-3xl text-white m-16">
                            Empowering Education,<br></br> One Connection at a Time
                        </h3>
                    </div>
                </div>
            </div>
            <div className="md:container md:mx-auto w-1/2 h-screen block">
                <div className="md:container md:mx-auto mt-14 flex justify-center">
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
                <div className="md:container md:mx-auto flex justify-center mt-12">
                    {/* <Login/> */}

                <div className="md:container md:mx-auto flex justify-center w-full h-full">
                <form className ="w-6/12 h-6/12">
                    <input
                    value={formState.userID}
                    onChange={handleChange}
                    name="userID"
                    type="text"
                    placeholder="Email Address"
                    className="h-1/12 w-full bg-gray-200 p-2 border-sky-300 border-t-2"
                    />
                    <br /><br />
                    <input
                    value={formState.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="h-1/12 w-full bg-gray-200 p-2 border-sky-300 border-t-2"
                    />
                </form>
                </div>
                </div>
                <div className="w-full h-24 md:container md:mx-auto flex justify-center mt-12">
                    <Link href="../tutor">
                        <Button classProps="h-16 w-96" onClick={handleLogin}>
                            Login
                        </Button>
                    </Link>
                </div>
                <div className="md:container md:mx-auto flex justify-center mt-2">
                    <p className="underline text-center text-base text-lime-800;">
                        <Link href="https://creativedesignsguru.com/category/nextjs/">
                            I forgot my password. Click here to reset.
                        </Link>
                    </p>
                </div>
                <div className="w-full h-24 md:container md:mx-auto flex justify-center mt-8">
                    <Button classProps="h-16 w-96 btn-secondary">
                        Register Account
                    </Button>
                </div>
            </div>
        </div>


    )
};

export default Home;