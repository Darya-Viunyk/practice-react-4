import { HomePage } from 'pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layuot/Layuot';
import { EventsPage } from 'pages/EventsPage';
import { EventsSupPage } from 'pages/EventsSubPage';
import { SearchPage } from 'pages/SearchPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":id" element={<EventsSupPage />} />
        </Route>
        <Route path="search" element={<SearchPage />}>
          <Route path=":id" element={<EventsSupPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
