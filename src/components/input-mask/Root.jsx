'use client';

import { IMaskMixin } from 'react-imask';

import { Input } from '../ui';

const InputMask = IMaskMixin(({ inputRef, ...props }) => {
  return (
    <Input
      ref={inputRef}
      {...props}
    />
  );
});

export default InputMask;
