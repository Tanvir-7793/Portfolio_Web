'use client';

import { useEffect, useState } from 'react';

type TypingEffectProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  gradientColors?: string[];
};

const defaultGradientColors = [
  'from-violet-500 to-fuchsia-500',
  'from-cyan-400 to-blue-500',
  'from-emerald-400 to-cyan-500',
  'from-amber-400 to-pink-500',
  'from-indigo-400 to-purple-500',
  'from-rose-400 to-pink-500',
  'from-sky-400 to-blue-500',
  'from-fuchsia-500 to-purple-500'
];

export default function TypingEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
  gradientColors = defaultGradientColors,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingPause, setTypingPause] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const handleTyping = () => {
      if (typingPause) return;
      
      if (!isDeleting && displayText === currentWord) {
        // Pause at the end of typing a word
        setTypingPause(true);
        setTimeout(() => {
          setTypingPause(false);
          setIsDeleting(true);
        }, delayBetweenWords);
        return;
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        } else {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }
      }, isDeleting ? deletingSpeed : typingSpeed);

      return () => clearTimeout(timeout);
    };

    const timeout = setTimeout(handleTyping, typingPause ? delayBetweenWords : (isDeleting ? deletingSpeed : typingSpeed));
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords, typingPause]);

  // Calculate gradient class based on word index for smooth transitions
  const gradientClass = gradientColors[wordIndex % gradientColors.length];
  
  return (
    <span className="relative">
      <span 
        className={`bg-clip-text text-transparent bg-gradient-to-r ${gradientClass} font-medium`}
      >
        {displayText}
      </span>
      <span className={`animate-pulse bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>|</span>
    </span>
  );
}
