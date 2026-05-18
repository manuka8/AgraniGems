import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GarnetDetails from '@/components/garnets/GarnetDetails';

export default async function GarnetsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-[#400103] min-h-screen text-white selection:bg-gold selection:text-[#050505]">
      <Navbar />
      <GarnetDetails />
      <Footer />
    </main>
  );
}
