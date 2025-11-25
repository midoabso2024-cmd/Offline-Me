import { useState, useEffect, RefObject } from 'react';

const useOnScreen = (ref: RefObject<HTMLElement>, rootMargin: string = '0px', threshold: number = 0.1): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          // Stop observing the element once it's visible
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, rootMargin, threshold]);

  return isIntersecting;
};

export default useOnScreen;
