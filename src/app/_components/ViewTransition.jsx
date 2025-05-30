'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ViewTransition({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    console.log("🔄 ViewTransition component mounted");
    console.log("📍 Current pathname:", pathname);
    // Add view transition support for navigation
    const handleLinkClick = (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) {
        return;
      }

      // Check if View Transition API is supported
      if ('startViewTransition' in document) {
        e.preventDefault();

        document.startViewTransition(() => {
          window.history.pushState({}, '', href);
          window.location.href = href;
        });
      }
    };

    // Add click listener to document for all links
    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div className="view-transition-container">
      {children}
    </div>
  );
}
