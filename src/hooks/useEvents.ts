import { useState, useEffect } from 'react';
import type { Event } from '../types/event';

// Key to locan storage
const STORAGE_KEY = 'life-sync-events';

const useEvents = () => {
  // useState Hook to manage event state
  const [events, setEvents] = useState<Event[]>([]);

  // Calls data from Localstorage upon app startup
  useEffect(() => {
    try {
      const storedEvents = localStorage.getItem(STORAGE_KEY);
      if (storedEvents) {
        setEvents(JSON.parse(storedEvents));
      }
    } catch (error) {
      console.error("Failed to load events from localStorage", error);
    }
  }, []);

  // Store on localstorage whenever there is an update
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    } catch (error) {
      console.error("Failed to save events to localStorage", error);
    }
  }, [events]); // Effect runs whenever there is a change

  // Create
  const createEvent = (newEvent: Omit<Event, 'id'>) => {
    const eventWithId: Event = {
      ...newEvent,
      id: Date.now().toString(), // Creates simple unique ID
    };
    setEvents((prevEvents: any) => [...prevEvents, eventWithId]);
  };

  // Update
  const updateEvent = (id: string, updatedEvent: Partial<Event>) => {
    setEvents((prevEvents: any[]) =>
      prevEvents.map(event =>
        event.id === id ? { ...event, ...updatedEvent } : event
      )
    );
  };

  // Delete
  const deleteEvent = (id: string) => {
    setEvents((prevEvents: any[]) => prevEvents.filter(event => event.id !== id));
  };

  return {
    events,
    createEvent,
    updateEvent,
    deleteEvent,
  };
};

export default useEvents;