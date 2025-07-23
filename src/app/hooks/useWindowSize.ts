import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize(debounceMs = 0): WindowSize {
  const [size, setSize] = useState<WindowSize>({
    width: typeof window === "undefined" ? 0 : window.innerWidth,
    height: typeof window === "undefined" ? 0 : window.innerHeight,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: number | undefined;

    const handleResize = () => {
      const update = () =>
        setSize({ width: window.innerWidth, height: window.innerHeight });

      if (debounceMs > 0) {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(update, debounceMs);
      } else {
        update();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [debounceMs]);

  return size;
}
