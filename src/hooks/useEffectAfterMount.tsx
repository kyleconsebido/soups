import { useRef, useEffect } from "react";

export function useEffectAfterMount(
  effect: React.EffectCallback,
  deps: React.DependencyList
) {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) return effect();
    else isMounted.current = true;
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(
    () => () => {
      isMounted.current = false;
    },
    []
  );
}
