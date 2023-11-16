'use client';

import { CheckListContext } from '@/contexts';
import { useLocalStorage } from '@/hooks';

const LOCAL_STORAGE_KEY = 'check-list-';

const CheckListAccordion = ({ id = '', items, ...props }) => {
  const [{ clientInfo, rows, extraInfo }, setLocalStorage] = useLocalStorage(
    LOCAL_STORAGE_KEY + id.toLowerCase(),
    { clientInfo: {}, rows: {}, extraInfo: '' },
  );
  const handleSetState = (key, id, value) =>
    setLocalStorage((state) => ({
      ...state,
      [key]: { ...state[key], [id]: value },
    }));

  return (
    <CheckListContext.Provider
      value={{
        clientInfo: {
          setData: (...params) => handleSetState('clientInfo', ...params),
          data: clientInfo,
        },
        rows: {
          setData: (...params) => handleSetState('rows', ...params),
          data: rows,
        },
        extraInfo: {
          setData: (value) => {
            setLocalStorage((state) => ({
              ...state,
              extraInfo: value,
            }));
          },
          data: extraInfo,
        },
      }}
      {...props}
    />
  );
};

export default CheckListAccordion;
