import React from "react";

//TODO Refactor into a hook
export const useAnimatedVisibility = (
  ref: React.MutableRefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void,
  isVisible: boolean) => {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref, isVisible]);
};