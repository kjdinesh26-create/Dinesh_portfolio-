"use client";

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollStack.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem = ({ children, itemClassName = '' }: ScrollStackItemProps) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
}

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.05,
  itemStackDistance = 30,
  baseScale = 0.9,
  rotationAmount = 0,
  blurAmount = 4,
}: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>('.scroll-stack-card');
    const totalCards = cards.length;

    const ctx = gsap.context(() => {
      // Create a master timeline for the stack
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top+=100', // Adjust based on your header height
          end: `+=${totalCards * 100}%`, // Length of the scroll
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      cards.forEach((card, i) => {
        if (i === 0) {
          // First card starts visible
          return;
        }

        // Previous cards should scale down and blur as the new card comes in
        tl.to(cards.slice(0, i), {
          scale: (j: number) => baseScale - (i - j - 1) * itemScale,
          y: (j: number) => -(i - j - 1) * itemStackDistance,
          filter: (j: number) => `blur(${(i - j - 1) * blurAmount}px)`,
          opacity: (j: number) => 1 - (i - j - 1) * 0.2,
          duration: 1,
          ease: 'none'
        }, i);

        // Current card slides up
        tl.fromTo(card, 
          { y: '120vh', rotateX: 10, scale: 1.1 },
          { y: 0, rotateX: 0, scale: 1, duration: 1.5, ease: 'power2.inOut' },
          i
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [baseScale, itemScale, itemStackDistance, blurAmount]);

  return (
    <div className={`scroll-stack-container ${className}`.trim()} ref={containerRef}>
      <div className="scroll-stack-inner-gsap">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
