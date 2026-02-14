'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useScrollPosition } from './hooks';
import { BtnGold } from './atoms';
import { NAV_LINKS } from '@/data/navigation';

export default function Header() {
  const y = useScrollPosition();
  const [open, setOpen] = useState(false);
  const scrolled = y > 40;
  const pathname = usePathname();
  const mobileNavRef = useRef(null);
  const toggleRef = useRef(null);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Escape key closes menu + basic focus trap
  const handleKeyDown = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key === 'Tab' && mobileNavRef.current) {
        const focusable = mobileNavRef.current.querySelectorAll(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [open]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [open, handleKeyDown]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy shadow-lg shadow-navy/20' : 'bg-navy/90 backdrop-blur-sm'}`}
      role="banner"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 flex items-center justify-between h-[68px] md:h-[84px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3.5 group" aria-label="Taylor Hampton Solicitors — Home">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rotate-45 rounded-[3px] bg-navy-brand border border-gold/25 group-hover:border-gold/50 transition-colors duration-300" />
            <span className="absolute inset-0 flex items-center justify-center font-serif italic text-white text-[0.85rem] tracking-tight" aria-hidden="true">th</span>
          </div>
          <div className="hidden sm:block leading-none">
            <span className="block font-serif text-white text-[1.08rem] font-bold tracking-[0.02em]">Taylor Hampton</span>
            <span className="block text-gold-light text-[0.72rem] tracking-[0.22em] uppercase mt-0.5">Solicitors UK Immigration</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
          {NAV_LINKS.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`px-3.5 py-2 text-[1rem] tracking-[0.02em] rounded-sm transition-colors duration-200 ${pathname === n.href ? 'text-gold' : 'text-white/90 hover:text-white'}`}
              aria-current={pathname === n.href ? 'page' : undefined}
            >
              {n.label}
            </Link>
          ))}
          <BtnGold href="/contact" className="ml-4 !py-[10px] !px-6 !text-[0.88rem]">
            Get in Touch
          </BtnGold>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white/80 hover:text-white p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!open}
      >
        <nav ref={mobileNavRef} className="bg-navy border-t border-white/[0.06] px-6 py-5 space-y-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`block w-full text-left px-4 py-3 rounded-sm text-[0.88rem] transition-colors ${pathname === n.href ? 'text-gold bg-white/[0.04]' : 'text-white/90 hover:text-white hover:bg-white/[0.03]'}`}
              aria-current={pathname === n.href ? 'page' : undefined}
              tabIndex={open ? 0 : -1}
            >
              {n.label}
            </Link>
          ))}
          <BtnGold href="/contact" className="!w-full !justify-center mt-4">
            Get in Touch
          </BtnGold>
        </nav>
      </div>
    </header>
  );
}
