import { useState, useEffect } from "react";

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    return () => {};
  }, []);

  // running on mount
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < window.innerHeight - 20;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    // setting the event handler from web API
    document.addEventListener("scroll", onScroll);

    // cleaning up from the web API
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
