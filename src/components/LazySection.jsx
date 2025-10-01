// src/components/LazySection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './LazySection.css'; // New CSS file for fade-in effect

function LazySection({ children, id }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Start loading/animating when 10% of the component is visible
  });

  return (
    <div ref={ref} id={id} className={`lazy-section ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
}

export default LazySection;