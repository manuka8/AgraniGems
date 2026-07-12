import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GarnetTypeDetails from '@/components/garnets/GarnetTypeDetails';

export default async function GarnetTypePage({
  params
}: {
  params: Promise<{ locale: string; type: string }>;
}) {
  const { locale, type } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-[#400103] min-h-screen text-white selection:bg-gold selection:text-[#050505]">
      <Navbar />
      <GarnetTypeDetails type={type} />
      <Footer />
    </main>
  );
}
