"use client";
import { useRef, useEffect } from "react";

export interface ArrayRefsOptions<T> {
  fillWith?: T;
}

export function useDynamicArrayRefs<T>(
  array: unknown[],
  options?: ArrayRefsOptions<T>
): React.MutableRefObject<T[]> {
  const refs = useRef<T[]>(Array(array.length).fill(options?.fillWith));

  useEffect(() => {
    if (array.length < refs.current.length) {
      refs.current = refs.current.slice(0, array.length);
    } else if (array.length > refs.current.length) {
      refs.current = [
        ...refs.current,
        ...Array(array.length - refs.current.length).fill(options?.fillWith),
      ];
    }
  }, [array, options]);

  return refs;
}
