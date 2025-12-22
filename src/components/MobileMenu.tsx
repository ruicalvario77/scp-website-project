// src/components/MobileMenu.tsx (Updated)
import { X, ChevronRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  return (
    <div className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      
      <div className="flex justify-between items-center p-6 border-b border-gray-200 h-26.5">
        <img src="/scp-logo-nav.svg" alt="SCP Resource Finance Logo" className="h-8" />
        <button onClick={onClose} className="p-2 text-brand-navy">
          <X size={24} /> 
        </button>
      </div>

      <div className="flex flex-col p-6 space-y-6 bg-white">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={onClose} 
            className="text-section-p text-brand-navy hover:text-brand-gold transition-colors block border-b border-gray-100 pb-4"
          >
            {item.name}
          </a>
        ))}
      </div>

       {/* Login Button: Changed p-6 to pt-4 (16px top padding) to better match link spacing */}
       <div className="p-6 pt-4 bg-white flex justify-center">
        <button className="flex items-center space-x-2 border border-brand-gold text-brand-navy rounded-full pl-6 pr-2 py-2 text-nav-title hover:bg-brand-gold hover:text-white transition-colors group cursor-pointer">
            <span>LOGIN</span>
            <span className="bg-brand-gold p-2 rounded-full group-hover:bg-white transition-colors">
              <ChevronRight className="w-4 h-4 text-white group-hover:text-brand-gold" />
            </span>
          </button>
       </div>

    </div>
  );
}
