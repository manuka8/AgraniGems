import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-luxury-black min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 inline-block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">Contact Us</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Have a specific request or looking for a rare gemstone? Our experts are ready to assist you.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: <Mail />, label: 'Email Us', value: 'info@agranigems.com', sub: '24/7 Support' },
                  { icon: <Phone />, label: 'Call Us', value: '+94 11 234 5678', sub: 'Mon-Fri, 9am-6pm' },
                  { icon: <MapPin />, label: 'Visit Us', value: '123 Gem Street', sub: 'Beruwala, Sri Lanka' },
                  { icon: <Clock />, label: 'Opening Hours', value: '09:00 - 18:00', sub: 'Closed on Sundays' },
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <div className="text-gold mb-6">{item.icon}</div>
                    <h4 className="text-white/40 uppercase tracking-widest text-[10px] mb-2">{item.label}</h4>
                    <p className="text-white font-bold mb-1">{item.value}</p>
                    <p className="text-white/30 text-xs">{item.sub}</p>
                  </div>
                ))}
              </div>
              
              <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                {/* Mock Map */}
                <div className="absolute inset-0 bg-[#1a1c24] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gold mx-auto mb-4 animate-bounce" />
                    <p className="text-white/40 text-sm">Interactive Map Loading...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-xl">
              <h3 className="text-3xl font-serif font-bold text-white mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option className="bg-luxury-black">Gem Inquiry</option>
                    <option className="bg-luxury-black">Export Partnership</option>
                    <option className="bg-luxury-black">Event Registration</option>
                    <option className="bg-luxury-black">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 ml-4">Message</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-gold transition-colors h-40 resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full py-5 bg-gold text-luxury-black rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:scale-[1.02] transition-all duration-300">
                  <Send className="w-4 h-4" /> Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
