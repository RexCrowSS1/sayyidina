import { useMemo } from 'react';

/**
 * useSplitText — Splits text into individual <span> wrapped characters.
 * 
 * Returns an array of objects with { char, index } for each character,
 * where spaces become non-breaking spaces. Used for staggered 
 * letter-by-letter animations.
 * 
 * @param {string} text - The text to split
 * @returns {{ chars: Array<{ char: string, index: number }> }}
 */
export function useSplitText(text) {
  const chars = useMemo(() => {
    return text.split('').map((char, index) => ({
      char: char === ' ' ? '\u00A0' : char,
      index,
    }));
  }, [text]);

  return { chars };
}
