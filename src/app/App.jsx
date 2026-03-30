import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import PageTransition from '../components/animations/PageTransition';
import PageSkeleton from '../components/feedback/PageSkeleton';
import MainLayout from '../layouts/MainLayout';

const Home = lazy(() => import('../pages/Home'));
const EpisodeListPage = lazy(() => import('../pages/EpisodeListPage'));
const StudyGuidePage = lazy(() => import('../pages/StudyGuidePage'));

export default function App() {
  const location = useLocation();

  const withTransition = (Component) => (
    <PageTransition>
      <Suspense fallback={<PageSkeleton />}>
        <Component />
      </Suspense>
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
