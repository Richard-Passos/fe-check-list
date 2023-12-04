'use client';

import { CheckListContext } from '@/contexts';
import { useLocalStorage } from '@/hooks';

const LOCAL_STORAGE_KEY = 'check-list-';

const CheckList = ({ id = '', ...props }) => {
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
          setData: (...params) => handleSetState('rows', data, ...params),
          setManuallyUpdatedNumber: (...params) =>
            handleSetState('rows', manuallyUpdatedNumber, ...params),
          ...rows,
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

export default CheckList;
