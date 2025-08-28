"use client";
import Link from "next/link";
import { Instagram, Youtube, Music2 } from "lucide-react"; // Music2 = TikTok style
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="mt-10 border-t border-zinc-200 dark:border-white/10 bg-gray-100 dark:bg-[#0b0c12] text-gray-700 dark:text-gray-300 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + slogan */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">PcGameOn</h2>
          <p className="mt-2 text-sm">{t('footerSlogan')}</p>
        </div>

        {/* Useful links */}
        <div>
          <h3 className="mb-3 font-semibold uppercase text-sm text-gray-900 dark:text-white">
            {t('knowUs')}
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-black dark:hover:text-white">{t('about')}</Link></li>
            <li><Link href="/contact" className="hover:text-black dark:hover:text-white">{t('contact')}</Link></li>
            <li><Link href="/privacy" className="hover:text-black dark:hover:text-white">{t('privacy')}</Link></li>
            <li><Link href="/terms" className="hover:text-black dark:hover:text-white">{t('terms')}</Link></li>
          </ul>
        </div>

        {/* Social media */}
        <div>
          <h3 className="mb-3 font-semibold uppercase text-sm text-gray-900 dark:text-white">
            {t('followUs')}
          </h3>
          <div className="flex gap-4">
            <a href="#" target="_blank" aria-label="TikTok" className="hover:text-black dark:hover:text-white">
              <Music2 className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" aria-label="Instagram" className="hover:text-black dark:hover:text-white">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" aria-label="YouTube" className="hover:text-black dark:hover:text-white">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-zinc-200 dark:border-white/10 py-4 text-center text-xs text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} PcGameOn. {t('rights')}
      </div>
    </footer>
  );
}
