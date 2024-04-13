import { useState, useEffect } from "react";

export function useCarousel(contentLength, startIndex = 0) {
  const [index, setIndex] = useState(startIndex);

  const handlePrevSlide = () =>
    setIndex(prevIndex => (prevIndex - 1 + contentLength) % contentLength);

  const handleNextSlide = () =>
    setIndex(prevIndex => (prevIndex + 1) % contentLength);

  return [index, handlePrevSlide, handleNextSlide];
}

export function useDialogCarousel(contentLength, startIndex = 0) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  const handlePrevSlide = e => {
    e.stopPropagation();
    setIndex(prevIndex => (prevIndex - 1 + contentLength) % contentLength);
  };

  const handleNextSlide = e => {
    e.stopPropagation();
    setIndex(prevIndex => (prevIndex + 1) % contentLength);
  };
  return [index, handlePrevSlide, handleNextSlide];
}
