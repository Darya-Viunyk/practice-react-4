import { fetchEvents } from 'components/shared/moviesApi';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const EventsPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);
  const elements = events.map(event => (
    <li key={event.id}>
      <Link to={event.id}>{event.name}</Link>
    </li>
  ));
  return (
    <>
      <ul>{elements}</ul>
      <Outlet />
    </>
  );
};
