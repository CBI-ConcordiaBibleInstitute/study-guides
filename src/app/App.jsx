import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import EpisodeListPage from '../pages/EpisodeListPage';
import Home from '../pages/Home';
import PodcastPage from '../pages/PodcastPage';
import StudyGuidePage from '../pages/StudyGuidePage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="podcast/:podcastId" element={<PodcastPage />} />
        <Route path="podcast/:podcastId/episodes" element={<EpisodeListPage />} />
        <Route path="podcast/:podcastId/episode/:episodeId/study-guides" element={<StudyGuidePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
