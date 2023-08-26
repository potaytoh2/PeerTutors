import className from 'classnames';
import { useRouter } from 'next/router';
import { Button } from '../button/Button';
import Link from 'next/link';

type DetailsRowProps = {
  id: string;
  name: string;
  desc: string;
  mod: string;
  date: string;
  time: string;
  price: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const WalletDetailsRow = (props: DetailsRowProps) => {

//   const handleChat = () => {
//     // setEvents([]);
//     window.alert('Chatting with ...');
//   };

//   const handleReject = () => {
//     // setEvents([]);
//     window.alert('Rejected with ...');
//   };

//   const handleSubmit = () => {
//     window.alert('Accepted with ...');
//   }

  const featureClass = className(
    'mt-4',
    'flex',
    'flex-wrap',
    'items-center',
    'border',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div>
    <div className={featureClass}>
        <div className="w-full text-center sm:w-1/4 sm:px-6 py-4">
          <h3 className="text-2xl font-semibold text-gray-900">{props.name}</h3>
          <h3 className="text-xl text-gray-900">{props.mod}</h3>
        </div>

        <div className="w-full text-center sm:w-1/4 sm:px-6 py-4">
          <h3 className="text-gray-900">{props.date}</h3>
          <h3 className="">{props.time}</h3>
        </div>

        <div className="w-full text-center p-6 sm:w-1/4">
          <h3 className="text-2xl font-semibold text-gray-900">${props.price}</h3>
        </div>

        <div className="w-full p-6 sm:w-1/4">
            <Button className="">Credited</Button>

        </div>
    </div>
    </div>
  );
};

export { WalletDetailsRow };
