import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import EpisodePage from '../pages/EpisodePage';
import Home from '../pages/Home';
import PodcastPage from '../pages/PodcastPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="podcast/:podcastId" element={<PodcastPage />} />
        <Route path="podcast/:podcastId/episode/:episodeId" element={<EpisodePage />} />
      </Route>
    </Routes>
  );
}
