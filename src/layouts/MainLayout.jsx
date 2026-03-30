import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-bg text-text-primary antialiased">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(137,35,52,0.3),transparent_35%),radial-gradient(circle_at_100%_0%,rgba(212,176,106,0.14),transparent_28%)]" />
      <Navbar />
      <main className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
