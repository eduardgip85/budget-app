import { useState } from "react";

export function useWebOptions() {
  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(1);

  const decreasePages = () => {
    setPages((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increasePages = () => {
    setPages((prev) => prev + 1);
  };

  const decreaseLanguages = () => {
    setLanguages((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const increaseLanguages = () => {
    setLanguages((prev) => prev + 1);
  };

  const resetWebOptions = () => {
    setPages(1);
    setLanguages(1);
  };

  return {
    pages,
    languages,
    decreasePages,
    increasePages,
    decreaseLanguages,
    increaseLanguages,
    resetWebOptions,
  };
}