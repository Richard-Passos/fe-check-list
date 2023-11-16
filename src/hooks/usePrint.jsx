'use client';

import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

const usePrint = (config = {}) => {
  const { onBeforeGetContent, onAfterPrint } = config;

  const toPrintRef = useRef(),
    promiseResolveRef = useRef(null),
    [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    if (isPrinting && promiseResolveRef.current) {
      promiseResolveRef.current();
    }
  }, [isPrinting]);

  const handlePrint = useReactToPrint({
    content: () => toPrintRef.current,
    onBeforeGetContent: () =>
      new Promise((resolve) => {
        promiseResolveRef.current = resolve;

        setIsPrinting(true);
        onBeforeGetContent();
      }),
    onAfterPrint: () => {
      promiseResolveRef.current = null;

      onAfterPrint();
      setIsPrinting(false);
    },
  });

  return { toPrintRef, handlePrint };
};

export default usePrint;
