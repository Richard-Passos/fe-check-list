'use client';

import { useContext } from 'react';

import { Label } from '@/components/ui';
import { CheckListContext } from '@/contexts';
import { cn } from '@/utils';

import InputMask from '../input-mask';

const CheckListAccordionClientInfo = ({ defaultData, className, ...props }) => {
  const { data: values, setData } = useContext(CheckListContext).clientInfo;

  const data = defaultData.map(({ id, ...data }) => ({
    ...data,
    id,
    value: values?.[id] ?? '',
  }));

  return (
    <ul
      className={cn('grid grid-cols-1 gap-6 px-3 sm:grid-cols-2', className)}
      {...props}
    >
      {data.map(({ id, label, ...inputProps }) => (
        <Item
          inputProps={{
            ...inputProps,
            id,
            ...(inputProps.unmask
              ? { onChange: (ev) => setData(id, ev.target.value) }
              : { onAccept: (value) => setData(id, value) }),
          }}
          key={id}
          label={label}
        />
      ))}
    </ul>
  );
};

const Item = ({ inputProps = {}, className, style, label, ...props }) => {
  const { id } = inputProps;

  return (
    <li
      className={cn('flex items-center gap-4', className)}
      style={{
        gridArea: id,
        ...style,
      }}
      {...props}
    >
      <Label
        className='shrink-0 lowercase first:capitalize'
        htmlFor={id}
      >
        {label}:
      </Label>

      <InputMask {...inputProps} />
    </li>
  );
};

export default CheckListAccordionClientInfo;
