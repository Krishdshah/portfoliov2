// src/components/About.jsx
import { useState, useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

function About() {
  const fullText = "Hello! I'm Krish, a developer fascinated by the convergence of artificial intelligence and full-stack engineering. My focus is on building intelligent, scalable applications, from crafting intuitive front-ends to architecting robust back-end systems that can support machine learning models. I'm actively exploring the capabilities of generative AI and data-driven development, always with a mindset toward creating smarter, more efficient solutions. My background in cybersecurity drives me to ensure these systems are not just innovative, but also secure and reliable.";
  
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [highlightedIndices, setHighlightedIndices] = useState(new Set()); // Use a Set for highlighted chars

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Memoize keywords to avoid recalculation on every render
  const keywordsToHighlight = useMemo(() => [
    'artificial intelligence',
    'full-stack engineering',
    'machine learning models',
    'generative AI',
    'cybersecurity',
    'secure and reliable'
  ], []);

  // First Effect: Handle the initial typing of the paragraph
  useEffect(() => {
    if (inView) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          i++;
          setDisplayedText(fullText.slice(0, i));
        } else {
          clearInterval(typingInterval);
          setIsTypingDone(true);
        }
      }, 25);
      return () => clearInterval(typingInterval);
    }
  }, [inView, fullText]);

  // Second Effect: Handle the character-by-character highlighting after typing is done
  useEffect(() => {
    if (isTypingDone) {
      // 1. Find all indices of characters that need to be highlighted
      const indices = [];
      keywordsToHighlight.forEach(keyword => {
        let startIndex = fullText.indexOf(keyword);
        while (startIndex !== -1) {
          for (let i = 0; i < keyword.length; i++) {
            indices.push(startIndex + i);
          }
          startIndex = fullText.indexOf(keyword, startIndex + 1);
        }
      });

      // 2. Start an interval to highlight one character at a time
      let highlightIndex = 0;
      const highlightInterval = setInterval(() => {
        if (highlightIndex < indices.length) {
          setHighlightedIndices(prev => new Set(prev).add(indices[highlightIndex]));
          highlightIndex++;
        } else {
          clearInterval(highlightInterval);
        }
      }, 15); // Highlighting speed

      return () => clearInterval(highlightInterval);
    }
  }, [isTypingDone, fullText, keywordsToHighlight]);

  return (
    <div ref={ref} className="about-container-inner">
      <h2 className="about-title">// ABOUT_ME</h2>
      <div className="about-content">
        <p className="about-text">
          {/* If typing isn't done, show the typing animation */}
          {!isTypingDone ? (
            <>
              {displayedText}
              <span className="cursor">_</span>
            </>
          ) : (
            /* If typing is done, render the text with character-by-character highlighting */
            fullText.split('').map((char, index) => (
              <span
                key={index}
                className={highlightedIndices.has(index) ? 'highlight-text' : ''}
              >
                {char}
              </span>
            ))
          )}
        </p>
      </div>
    </div>
  );
}

export default About;