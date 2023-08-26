import {TutorHeader} from '../../components/navigation/TutorHeader'
import { Logo } from '../../templates/Logo';
import { Section } from '../../layout/Section';

export default function Search(){
    return(
        <Section yPadding="py-6">
        <TutorHeader logo={<Logo xl />}/>
        </Section>
    )
}