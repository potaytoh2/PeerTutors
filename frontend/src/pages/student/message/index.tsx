import Talk from 'talkjs';
import { useEffect, useState, useRef } from 'react';
import { Button } from '@/button/Button';
import Link from 'next/link';
import { Background } from '../../../background/Background';
import { Section } from '../../../layout/Section';
import { NavbarTwoColumns } from '../../../components/navigation/NavbarTwoColumns';
import { Logo } from '@/templates/Logo';

import { Meta } from '../../../layout/Meta';
import { AppConfig } from '../../../utils/AppConfig';
import { Banner } from '../../../templates/Banner';
import { Footer } from '../../../templates/Footer';
import { useRouter } from 'next/router';

type IMyChatComponentProps = {
    classProps?: string; // Made optional
  };


export default function MyChatComponent(props: IMyChatComponentProps) {

  const router = useRouter();

  // wait for TalkJS to load
  const inboxEl = useRef<HTMLDivElement | null>(null);
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));
  }, []);

  useEffect(() => {
    
    if (talkLoaded && inboxEl.current) {
        console.log("haha")
        //create users here
        const currentUser = new Talk.User({
            id: '1',
            name: 'Henry Mill',
            email: 'henrymill@example.com',
            photoUrl: 'henry.jpeg',
            welcomeMessage: 'Hello!',
            role: 'default',
          });
        
          const otherUser = new Talk.User({
            id: '2',
            name: 'jessica Wells',
            email: 'jessicawells@example.com',
            photoUrl: 'jessica.jpeg',
            welcomeMessage: 'Hello!',
            role: 'default',
          });

        const session = new Talk.Session({
            appId: 't7RBsadH',
            me: currentUser,
          });

        const conversationId = Talk.oneOnOneId(currentUser, otherUser);
        const conversation = session.getOrCreateConversation(conversationId);
        conversation.setParticipant(currentUser);
        conversation.setParticipant(otherUser);

        const inbox = session.createInbox();
        inbox.mount(inboxEl.current);
      
          return () => session.destroy();
        }
      // Safe to use the SDK here
  }, [talkLoaded]);
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
        

      <div style={{height: '80vh'}} className={`mt-4 px-4 py-4 flex max-w-screen ${props.classProps || ''}`}>
          <div className="flex-1 h-auto" ref={inboxEl}></div>
      </div>

          <Button classProps='mt-8' onClick={() => router.replace("./")}>
            Back
          </Button>
      </Section>
      {/* <VerticalFeatures /> */}
      <Banner />
      <Footer />
    </div>

  );
}
