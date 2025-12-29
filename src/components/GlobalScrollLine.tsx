"use client";
import { useEffect, useState, RefObject } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function GlobalScrollLine({ containerRef, statRefs, endRef }: {
  containerRef: RefObject<HTMLElement | null>,
  statRefs: RefObject<HTMLElement | null>[],
  endRef: RefObject<HTMLElement | null>
}) {
  const [path, setPath] = useState("");

  // We use the 'endRef' (the Expertise heading) as the trigger point for the scroll animation.
  const { scrollYProgress } = useScroll({
    target: endRef,
    // Start animation when the trigger's top hits the viewport bottom, end when its center hits the viewport center.
    offset: ["start end", "center center"]
  });

  // Smooth out the scroll progress using a spring for a softer animation feel.
  const drawProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const updatePath = () => {
      const refs = statRefs.map(r => r.current);
      const end = endRef.current;
      const container = containerRef.current;

      // Exit early if we don't have all the necessary DOM nodes yet
      if (refs.some(r => !r) || !end || !container) return;

      const cRect = container.getBoundingClientRect();
      const r1 = refs[0]!.getBoundingClientRect(); 
      const r3 = refs[2]!.getBoundingClientRect(); 
      const rEnd = end.getBoundingClientRect();

      // Calculate the starting point relative to the main container
      const x1 = r1.left - cRect.left;
      const y1 = r1.bottom - cRect.top + 47; // Start slightly below the first stat

      // Calculate the horizontal turn point, aligning with the end of the 3rd stat block
      const x3Turn = r3.right - cRect.left; 

      // Calculate the final destination coordinates, stopping before the target heading
      const targetX = (rEnd.left - cRect.left) + 150;
      const targetY = rEnd.top - cRect.top + (rEnd.height / 2);

      // Define the SVG path using Move (M) and Line (L) commands
      const d = `
        M ${x1} ${y1} 
        L ${x3Turn} ${y1} 
        L ${x3Turn} ${targetY} 
        L ${targetX} ${targetY}
      `;
      setPath(d);
    };

    // Update the path on initial load and whenever the window is resized
    updatePath();
    window.addEventListener('resize', updatePath);
    return () => window.removeEventListener('resize', updatePath);
  }, [statRefs, endRef, containerRef]); // Re-run effect if these refs change

  // Map the smooth scroll progress (0 to 1) to a constrained path length range (0.45 to 1)
  const pathLength = useTransform(drawProgress, [0, 1], [0.45, 1]);

  return (
    <svg 
      // SVG setup: absolute positioning, covers parent, and hidden on mobile as it's a desktop-only feature
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-30 hidden md:block" 
      fill="none"
      aria-hidden="true" 
    >
      <motion.path
        d={path}
        stroke="#3066C2" 
        strokeWidth="1"
        strokeLinecap="round"
        style={{ pathLength }} 
      />
    </svg>
  );
}
