// import { Base } from '../templates/Base';
import Link from 'next/link';
import { Background } from '../../background/Background';
import { Button } from '../../button/Button';
import { Section } from '../../layout/Section';
import { NavbarTwoColumns } from '../../components/navigation/NavbarTwoColumns';
import { Logo } from '../../templates/Logo';
import { useRouter } from 'next/router';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Banner } from '../../templates/Banner';
import { Footer } from '../../templates/Footer';
// import { VerticalFeatures } from '../../templates/VerticalFeatures';

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

                    <Section yPadding="pt-10 pb-32">
                        <div className="mb-8 text-left">
                            <h2 className="text-4xl font-bold text-gray-900">Student Apps</h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <Link href="student/search">
                                <Button classProps='w-full h-30'>
                                    <div className='flex items-center space-x-2 px-2 py-2'>
                                        <div className='w-24 h-100' >
                                            <img className="h-24 w-24" src={`${router.basePath}${"/assets/images/tabs/undraw_search_engines_ij7q.svg"}`}/>
                                        </div>
                                        <span className="flex-grow text-center">Search For Tutors</span>
                                    </div>
                                </Button>
                            </Link>
                            <Link href="/student/requests">
                                <Button classProps='w-full h-30'>
                                    <div className='flex items-center space-x-2 px-2 py-2'>
                                        <div className='w-24 h-100'>
                                            <img className="h-24 w-24" src={`${router.basePath}${"/assets/images/tabs/undraw_diary_re_4jpc.svg"}`}/>
                                        </div>
                                        <span className="flex-grow text-center">View Appointment Requests</span>
                                    </div>
                                </Button>
                            </Link>
                            <Link href="/student/upcoming">
                                <Button classProps='w-full h-30'>
                                    <div className='flex items-center space-x-2 px-2 py-2'>
                                        <div className='w-24 h-100'>
                                            <img className="h-24 w-24" src={`${router.basePath}${"/assets/images/tabs/undraw_going_up_re_86kg.svg"}`}/>
                                        </div>
                                        <span className="flex-grow text-center">Upcoming Appointments</span>
                                    </div>
                                </Button>
                            </Link>
                            {/* <Link href="https://creativedesignsguru.com/category/nextjs/">
                                <Button classProps='w-full h-full'>
                                    <div className='flex items-center space-x-2 px-2 py-2'>
                                        <div className='w-24 h-100'>
                                            <img className="h-24 w-24" src={`${router.basePath}${"/assets/images/tabs/undraw_transfer_money_re_6o1h.svg"}`}/>
                                        </div>
                                        <span className="flex-grow text-center">View Wallet</span>
                                    </div>
                                </Button>
                            </Link> */}
                            <Link href="/student/history">
                                <Button classProps='w-full h-full'>
                                    <div className='flex items-center space-x-2 px-2 py-2'>
                                        <div className='w-24 h-100'>
                                            <img className="h-24 w-24" src={`${router.basePath}${"/assets/images/tabs/undraw_completed_03xt.svg"}`}/>
                                        </div>
                                        <span className="flex-grow text-center">View History</span>
                                    </div>
                                </Button>
                            </Link>
                            <Link href="/student/message">
                                <Button classProps='w-full h-full'>
                                    <div className='flex items-center space-x-2 px-2 py-2'>
                                        <div className='w-24 h-100'>
                                            <img className="h-24 w-24" src={`${router.basePath}${"/assets/images/tabs/undraw_audio_conversation_re_3t38.svg"}`}/>
                                        </div>
                                        <span className="flex-grow text-center">View Messages</span>
                                    </div>
                                </Button>
                            </Link>
                        </div>
                    </Section>
                </Background>
            {/* <VerticalFeatures /> */}
            <Banner />
            <Footer />
    </div>
    )
};

export default Index;