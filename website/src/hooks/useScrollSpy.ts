import { useEffect, useState, type RefObject } from 'react';

export interface ScrollSpySection {
  id: string;
  ref: RefObject<HTMLElement | null>;
}

/**
 * Tracks which of the given sections is currently in view while the user
 * scrolls, recomputed fresh from live element positions on every scroll tick
 * so it can't miss a transition when a short section is scrolled past quickly.
 */
export function useScrollSpy(sections: ScrollSpySection[]): string {
  const [active, setActive] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    let frame = 0;

    const recalc = () => {
      frame = 0;
      const center = window.innerHeight / 2;
      let current: string | null = null;

      for (const { id, ref } of sections) {
        const el = ref.current;
        if (!el) continue;
        if (el.getBoundingClientRect().top <= center) {
          current = id;
        }
      }

      if (current) setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(recalc);
    };

    recalc();
    // `scroll` doesn't bubble, and `html { overflow-x: hidden }` (global.css) makes
    // documentElement its own scrolling box rather than window — capture is required
    // for a window-level listener to still receive it.
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return active;
}
