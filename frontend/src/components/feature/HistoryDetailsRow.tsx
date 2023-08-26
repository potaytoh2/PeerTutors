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
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const HistoryDetailsRow = (props: DetailsRowProps) => {

  const handleChat = () => {
    // setEvents([]);
    window.alert('Chatting with ...');
  };

  const handleReview = () => {
    // setEvents([]);
    window.alert('Review with ...');
  };

  const handleSubmit = () => {
    window.alert('Accepted with ...');
  }

  // const gotoDetails = () => {

  //   const data = [
  //     {
  //       id: props.id
  //     },
  //   ]

  //   router.push({
  //     pathname: './details', // Replace with your receiver page path
  //     query: { id: JSON.stringify(props.name) }
  //   });
  // };

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
    {/* <Link href="" onClick={gotoDetails}> */}
    {/* <Link href={{ pathname: './details', query: { id: props.name } }} passHref> */}
    <div className={featureClass}>
        <div className="w-full text-center sm:w-1/4 sm:px-6 py-4">
          <h3 className="text-3xl font-semibold text-gray-900">{props.date}</h3>
          <h3 className="text-xl leading-9">{props.time}</h3>
        </div>

        <div className="w-full text-center sm:w-1/4 sm:px-6 py-4">
          <h3 className="text-2xl font-semibold text-gray-900">{props.name}</h3>
          {/* <div className="text-xl leading-9">{props.desc}</div> */}
        </div>

        <div className="w-full text-center p-6 sm:w-1/4">
          <h3 className="text-xl font-semibold text-gray-900">{props.mod}</h3>
        </div>

        <div className="w-full p-6 sm:w-1/4">
          <div className='flex space-x-4'>
              {/* <Button onClick={handleSubmit}>
                Accept
              </Button> */}
              <Button classProps='btn-secondary' onClick={handleReview}>
                Review
              </Button>
              <Button classProps='btn-secondary' onClick={handleChat}>
                Chat
              </Button>
            </div>
          {/* <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} /> */}
        </div>
    </div>
    {/* </Link> */}
    </div>
  );
};

export { HistoryDetailsRow };
