import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import PageTransition from '../components/animations/PageTransition';
import MainLayout from '../layouts/MainLayout';
import EpisodeListPage from '../pages/EpisodeListPage';
import Home from '../pages/Home';
import StudyGuidePage from '../pages/StudyGuidePage';

export default function App() {
  const location = useLocation();

  const withTransition = (Component) => (
    <PageTransition>
      <Component />
    </PageTransition>
  );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route index element={withTransition(Home)} />
          <Route path="podcast/:podcastId" element={withTransition(EpisodeListPage)} />
          <Route path="podcast/:podcastId/episodes" element={<Navigate to="../" replace />} />
          <Route path="podcast/:podcastId/episode/:episodeId/study-guides" element={withTransition(StudyGuidePage)} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
