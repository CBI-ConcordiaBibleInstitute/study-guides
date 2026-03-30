import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.2),transparent_30%),radial-gradient(circle_at_90%_0%,rgba(16,185,129,0.16),transparent_25%)]" />
      <Navbar />
      <main className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
