import { useRef, type ElementType, type ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  y?: number;
}

export default function Reveal({ children, as: Tag = 'div', className, y }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref, { y });

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
