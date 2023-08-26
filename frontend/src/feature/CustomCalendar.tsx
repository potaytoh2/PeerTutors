import className from 'classnames';
import React, { useState, useCallback, useMemo } from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import the CSS file
import events from './TempEvents';
import { Button } from '../button/Button';
import { useRouter } from 'next/router';

type customCalendarProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const CustomCalendar = (props: customCalendarProps) => {
  const router = useRouter();
  
  const localizer = momentLocalizer(moment);
  const [myEvents, setEvents] = useState(events)

  const handleClearClick = () => {
    setEvents([]);
  };

  const handleSubmit = () => {
    console.log(myEvents);
  }

  const handleSelectSlot = useCallback(
    ({ start, end }: { start: Date; end: Date }) => {
      const title = window.prompt('New Event name');
      if (title) {
        const newEvent = {
          id: events.length + 1, // Assign a unique id based on the length of events array
          title,
          start,
          end,
        }
        setEvents((prev) => [...prev, newEvent]);
      }
    },
    [setEvents]
  );

  const handleSelectEvent = useCallback(
    (event: { title: any; }) => window.alert(event.title),
    []
  )

  // const { defaultDate, scrollToTime } = useMemo(
  //   () => ({
  //     defaultDate: new Date(2015, 3, 12),
  //     scrollToTime: new Date(1970, 1, 1, 6),
  //   }),
  //   []
  // )

  const featureClass = className(
    // 'mt-20',
    // 'flex',
    // 'flex-wrap',
    // 'items-center',
    // {
    //   'flex-row-reverse': props.reverse,
    // },
  );

  return (
    <div className={featureClass}>
      <div className=''>
        <Calendar 
          // defaultDate={defaultDate}
          defaultView={Views.WEEK}
          events={myEvents}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          selectable
          // scrollToTime={scrollToTime}

          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 450 }} />
      </div>

        <div className='flex justify-end space-x-4 pt-8'>
          <Button onClick={handleSubmit}>
            Submit
          </Button>
          <Button classProps='btn-secondary' onClick={() => router.back()}>
            Cancel
          </Button>
          <Button classProps='btn-secondary' onClick={handleClearClick}>
            Clear
          </Button>
        </div>
    </div>
  );
};

export { CustomCalendar };
