'use client';

import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(initialValue);

  const handleSetData = (value) =>
    setData((state) => {
      value = typeof value === 'function' ? value(state) : value;

      setLocalStorage(key, value);

      return value;
    });

  useEffect(() => {
    const storageData = getLocalStorage(key);

    if (storageData) setData(storageData);
  }, [key]);

  return [data, handleSetData];
};

const getLocalStorage = (key) => {
    const data = window.localStorage.getItem(key);

    return JSON.parse(data);
  },
  setLocalStorage = (key, value) => {
    const data = JSON.stringify(value);

    return window.localStorage.setItem(key, data);
  };

export default useLocalStorage;
export { getLocalStorage, setLocalStorage };
