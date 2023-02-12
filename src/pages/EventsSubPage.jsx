import { useFetchEvents } from 'hooks/useFetchIvent';

export const EventsSupPage = () => {
  const event = useFetchEvents();
  return (
    <>
      {event && (
        <div>
          <p>{event.name}</p>
          <img src={event.images[0].url} alt="" width="200" />
        </div>
      )}
    </>
  );
};
