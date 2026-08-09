import { useLayoutEffect, type RefObject } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

export interface ScrollRevealOptions {
  /** CSS selector for children to reveal individually. Omit to animate the container as one block. */
  selector?: string;
  /** Vertical offset (px) the target starts from. */
  y?: number;
  /** Stagger (seconds) between items when `selector` targets multiple elements. */
  stagger?: number;
  /** ScrollTrigger start position. */
  start?: string;
  /** ScrollTrigger end position — controls when the target fades back out. */
  end?: string;
  /** Values in this array retrigger the reveal setup (e.g. when list content changes). */
  deps?: unknown[];
}

/**
 * Fades a container (or its matching children) in with a subtle rise as it scrolls
 * into view, and back out as it scrolls out of view (either direction). No-ops
 * instantly under prefers-reduced-motion.
 */
export function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  {
    selector,
    y = 24,
    stagger = 0.1,
    start = 'top 85%',
    end = 'bottom top',
    deps = [],
  }: ScrollRevealOptions = {},
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const targets = selector ? container.querySelectorAll(selector) : container;

      if (prefersReducedMotion) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger,
          scrollTrigger: {
            trigger: container,
            start,
            end,
            toggleActions: 'play reverse play reverse',
          },
        },
      );
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, deps);
}
