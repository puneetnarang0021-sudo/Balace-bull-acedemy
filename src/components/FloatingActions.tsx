import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';

interface FloatingActionsProps {
  onOpenDemo: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenDemo }) => {
  return (
    <>
      {/* Floating WhatsApp Action Pill (Visible on Desktop & Tablet) */}
      <aside aria-label="Quick WhatsApp Contact" className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/919999633109?text=Hello%20Trader%20Punit%20Narang,%20I%20want%20to%20know%20more%20about%20the%20Stock%20Market%20Course%20at%20Balance%20Bull%20Academy."
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs shadow-xl shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
          aria-label="Chat with Trader Punit Narang on WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-neutral-950 text-neutral-950" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-emerald-500 animate-ping" />
          </div>
          <span className="whitespace-nowrap">WhatsApp Trader Punit Narang</span>
        </a>
      </aside>

      {/* Streamlined Mobile Bottom Action Bar (Fixed, max 48px height to strictly respect 15% mobile viewport cap) */}
      <nav aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href="tel:9999633109"
          className="flex-1 py-2 px-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-400 font-bold text-xs flex items-center justify-center gap-1.5 active:bg-neutral-800"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call 9999633109</span>
        </a>

        <a
          href="https://wa.me/919999633109?text=Hello%20Trader%20Punit%20Narang,%20I%20want%20to%20join%20Balance%20Bull%20Academy."
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2 px-2.5 rounded-lg bg-emerald-500 text-neutral-950 font-bold text-xs flex items-center justify-center gap-1.5 active:bg-emerald-400"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-neutral-950" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenDemo}
          className="flex-1 py-2 px-2.5 rounded-lg bg-amber-400 text-neutral-950 font-extrabold text-xs flex items-center justify-center gap-1 active:bg-amber-300"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Free Demo</span>
        </button>
      </nav>
    </>
  );
};
