import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] antialiased transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_8%_0%,var(--accent-soft),transparent_34%),radial-gradient(circle_at_100%_0%,rgba(201,163,95,0.14),transparent_25%)]" />
      <Navbar />
      <main className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
