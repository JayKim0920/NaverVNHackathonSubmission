import React from 'react';
import useEvents from '../hooks/useEvents';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

interface DayTimelineProps {
  date: string; // Date to show timeline ISO 8601
}

const DayTimeline: React.FC<DayTimelineProps> = ({ date }) => {
  const { events } = useEvents();
  const selectedDay = dayjs(date);

  // Filters event of selected date and arranges them according to start time
  const todayEvents = events
    .filter(event => selectedDay.isSame(dayjs(event.startTime), 'day'))
    .sort((a, b) => dayjs(a.startTime).diff(dayjs(b.startTime)));

  return (
    <div className="day-timeline-view">
      <h2>{selectedDay.format('DD MM YYYY')}</h2>
      {todayEvents.length > 0 ? (
        <ul className="timeline-list">
          {todayEvents.map(event => (
            <li key={event.id} className={`timeline-item category-${event.category}`}>
              <div className="timeline-time">
                {dayjs(event.startTime).format('HH:mm')} - {dayjs(event.endTime).format('HH:mm')}
              </div>
              <div className="timeline-details">
                <span className="event-title">{event.title}</span>
                <span className="event-category">({event.category})</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-events-message">No events are scheduled for selected date.</p>
      )}
    </div>
  );
};

export default DayTimeline;