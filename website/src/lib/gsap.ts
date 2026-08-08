import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger };
