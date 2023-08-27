import Talk from 'talkjs';
import { useEffect, useState, useRef } from 'react';

type IMyChatComponentProps = {
    classProps?: string; // Made optional
  };


export default function MyChatComponent(props: IMyChatComponentProps) {
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
            name: 'Jessica Wells',
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
    <div style={{height: '80vh'}} className={`mt-4 px-4 py-4 flex max-w-screen ${props.classProps || ''}`}>
        <div className="flex-1 h-auto" ref={inboxEl}></div>
    </div>
  
  );
}
