import { useDebugValue, useEffect, useRef } from "react";

const usePrevious = (value) => {
  const ref = useRef;
  
  useDebugValue("--- Custom Hook e useDebugValue ---");
  useDebugValue("O número anterior é: " + ref);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
