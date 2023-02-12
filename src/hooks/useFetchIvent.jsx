import { fetchEventById } from 'components/shared/moviesApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchEvents = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEventById().then(setEvent);
  }, [id]);

  return event;
};
