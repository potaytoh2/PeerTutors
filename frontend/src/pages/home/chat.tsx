import { Logo } from '../../templates/Logo';
import { Section } from '../../layout/Section';
import MyChatComponent  from '../../components/chat/Chat';
import React, { useState } from 'react';
import {StudentHeader} from '../../components/navigation/StudentHeader'


export default function Chat(){
    
    return(   
        <Section yPadding="py-6">
            <StudentHeader logo={<Logo xl />}/>
            <MyChatComponent/>
        </Section>
    )
}