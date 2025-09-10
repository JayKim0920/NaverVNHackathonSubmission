import React, { useState } from 'react';
import useEvents from '../hooks/useEvents';
import type { Event } from '../types/event';

interface EventModalProps {
  onClose: () => void;
  initialEvent?: Event;
}

const EventModal: React.FC<EventModalProps> = ({ onClose, initialEvent }) => {
  // fetch required functions from useEvents hook
  const { createEvent, updateEvent, deleteEvent } = useEvents();

  // initialize event status to initialEvent
  const [title, setTitle] = useState(initialEvent?.title || '');
  const [category, setCategory] = useState<Event['category']>(initialEvent?.category || 'personal');
  const [startTime, setStartTime] = useState(initialEvent?.startTime || '');
  const [endTime, setEndTime] = useState(initialEvent?.endTime || '');

  // form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !startTime || !endTime) {
      alert('Please fill in all fields.');
      return;
    }

    const eventData = {
      title,
      category,
      startTime,
      endTime,
    };

    if (initialEvent) {
      // Update if event exists
      updateEvent(initialEvent.id, eventData);
    } else {
      // Generate new event
      createEvent(eventData);
    }
    
    onClose();
  };
  
  // Delete button handler
  const handleDelete = () => {
    if (initialEvent && window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(initialEvent.id);
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{initialEvent ? 'Edit event' : 'Create new event'}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input 
              type="text" 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Type:</label>
            <select 
              value={category} 
              onChange={e => setCategory(e.target.value as Event['category'])}
            >
              <option value="class">Class</option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="group_project">Group Project</option>
              <option value="others">others</option>
            </select>
          </div>
          <div>
            <label>Start time:</label>
            <input 
              type="datetime-local" 
              value={startTime} 
              onChange={e => setStartTime(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>End time:</label>
            <input 
              type="datetime-local" 
              value={endTime} 
              onChange={e => setEndTime(e.target.value)} 
              required 
            />
          </div>
          
          <button type="submit">{initialEvent ? 'Edit Event' : 'Add Event'}</button>
          <button type="button" onClick={onClose}>Cancel</button>
          {initialEvent && (
            <button type="button" onClick={handleDelete} className="delete-button">
              Delete
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default EventModal;