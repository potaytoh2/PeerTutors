// import { Base } from '../templates/Base';
import Link from 'next/link';
import { Background } from '../background/Background';
import { Button } from '@/button/Button';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Logo } from '../templates/Logo';
import { useRouter } from 'next/router';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from '../templates/Banner';
import { Footer } from '../templates/Footer';
import Login from '../components/textfield'
// import { VerticalFeatures } from '../../templates/VerticalFeatures';

const Profile = () => {
    const router = useRouter();
    return (  

        <div className="">
            Nice Profile Page
          <Button classProps='mt-8' onClick={() => router.replace("./")}>
            Back
          </Button>
        </div>


    )
};

export default Profile;