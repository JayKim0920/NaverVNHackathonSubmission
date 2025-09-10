import React from 'react';
import useEvents from '../hooks/useEvents';
import type { Event } from '../types/event';
import dayjs from 'dayjs';

const ProjectView = () => {
  const { events } = useEvents();

  // Groups events by category
  const groupedEvents = events.reduce((acc, event) => {
    const category = event.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(event);
    return acc;
  }, {} as Record<Event['category'], Event[]>);

  return (
    <div className="project-view">
      <h2>See project by category</h2>
      {Object.keys(groupedEvents).length > 0 ? (
        Object.entries(groupedEvents).map(([category, events]) => (
          <div key={category} className="category-section">
            <h3>{category}</h3>
            <ul className="event-list">
              {events.map(event => (
                <li key={event.id} className={`event-item category-${category}`}>
                  <span className="event-title">{event.title}</span>
                  <span className="event-time">
                    {dayjs(event.startTime).format('YYYY-MM-DD HH:mm')} - {dayjs(event.endTime).format('HH:mm')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p className="no-events-message">No events scheduled.</p>
      )}
    </div>
  );
};

export default ProjectView;