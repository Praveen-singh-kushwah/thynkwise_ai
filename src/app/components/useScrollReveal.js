'use client';
import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    document.querySelectorAll('.rv').forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);
}