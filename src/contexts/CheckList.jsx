'use client';

import { createContext } from 'react';

const CheckListContext = createContext({
  clientInfo: {},
  rows: {},
  extraInfo: {},
});

export default CheckListContext;
