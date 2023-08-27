// import { Base } from '../templates/Base';
import Link from 'next/link';
// import { Background } from '../background/Background';
import { Button } from '@/components/button/Button';
// import { Section } from '../layout/Section';
// import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
// import { Logo } from '../templates/Logo';
import { useRouter } from 'next/router';
// import { Meta } from '../layout/Meta';
// import { AppConfig } from '../utils/AppConfig';
// import { Banner } from '../templates/Banner';
// import { Footer } from '../templates/Footer';
import Login from '@/components/textfield'
// import { VerticalFeatures } from '../../templates/VerticalFeatures';

const Index = () => {
    const router = useRouter();
    return (  

        <div className="h-screen w-screen flex">
            <div className="md:container md:mx-auto w-1/2 h-screen bg-lime-700 inline-block">
                <div className="md:container md:mx-auto h-1/2 flex justify-center mt-16">
                    <img className="h-9/12 w-7/12 align-top " src={`${router.basePath}${"/assets/images/peer.png"}`}/>
                </div>
                <div className="h-1/2 flex justify-center">
                    <div className= "md:container md:mx-auto block">
                        <p className="text-center text-6xl text-white">
                            WenLambo
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
                    <p className="font-bold text-center text-lime-800 text-4xl ">
                        Login
                    </p>
                    <p className="text-center text-lime-800 text-xl">
                        Sign in to your account
                    </p>
                </div>
                <div className="md:container md:mx-auto flex justify-center mt-24">
                    <Login/>
                </div>
                <div className="md:container md:mx-auto flex justify-center mt-12">
                    <Button/>
                </div>
                <div className="md:container md:mx-auto flex justify-center mt-8">
                    <p className="underline text-center text-base text-lime-800;">
                        <Link href="https://creativedesignsguru.com/category/nextjs/">
                            I forgot my password. Click here to reset.
                        </Link>
                    </p>
                </div>
                <div className="md:container md:mx-auto flex justify-center mt-8">
                    <Button/>
                </div>
            </div>
        </div>


    )
};

export default Index;