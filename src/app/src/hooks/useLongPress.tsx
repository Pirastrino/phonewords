import { useCallback, useRef } from 'react';

const useLongPress = (
  callback: (e: MouseEvent | TouchEvent) => void,
  ms: number = 300
) => {
  const timeout = useRef(null);

  const start = useCallback(
    //@ts-ignore
    (e) => (timeout.current = setTimeout(() => callback(e), ms)),
    [callback, ms]
  );

  //@ts-ignore
  const stop = useCallback(() => clearInterval(timeout.current), []);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
  };
};

export { useLongPress };
