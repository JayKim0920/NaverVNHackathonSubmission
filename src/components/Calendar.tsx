import React, { useState } from 'react';
import useEvents from '../hooks/useEvents';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import EventModal from './EventModal';
import type { Event } from '../types/event';

dayjs.extend(localizedFormat);

const Calendar = () => {
  const { events } = useEvents();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(undefined);

  // Generate calendar
  const today = dayjs();
  const startOfMonth = today.startOf('month');
  const endOfMonth = today.endOf('month');

  const calendarDays = [];
  let day = startOfMonth.startOf('week');

  while (day.isBefore(endOfMonth.endOf('week'))) {
    calendarDays.push(day);
    day = day.add(1, 'day');
  }

  // Modal open handler
  const openModal = (event?: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Modal close handler
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(undefined); // Initialize event on modal close
  };

  return (
    <div className="calendar-view">
      {/* New event button */}
      <button onClick={() => openModal()}>+ Add event</button>
      
      {/* Calendar header */}
      <h2>{today.format('MMMM YYYY')}</h2>
      
      {/* Day header */}
      <div className="week-days-header">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(dayName => (
          <div key={dayName}>{dayName}</div>
        ))}
      </div>

      {/* Day grid */}
      <div className="days-grid">
        {calendarDays.map((dayObj, index) => {
          const dayEvents = events.filter(event => 
            dayjs(event.startTime).isSame(dayObj, 'day')
          );
          
          return (
            <div key={index} className="day-cell">
              <span className="day-number">{dayObj.format('D')}</span>
              <div className="events-container">
                {dayEvents.map(event => (
                  <div 
                    key={event.id} 
                    className={`event-item category-${event.category}`}
                    onClick={() => openModal(event)} // Opens modal on click
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal render */}
      {isModalOpen && <EventModal onClose={closeModal} initialEvent={selectedEvent} />}
    </div>
  );
};

export default Calendar;