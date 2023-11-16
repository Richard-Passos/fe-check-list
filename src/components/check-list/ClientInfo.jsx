'use client';

import { useContext } from 'react';

import { Input, Label } from '@/components/ui';
import { CheckListContext } from '@/contexts';
import { cn } from '@/utils';

const CheckListAccordionClientInfo = ({ defaultData, className, ...props }) => {
  const { data: values, setData } = useContext(CheckListContext).clientInfo;

  const data = defaultData.map(({ id, ...data }) => ({
    ...data,
    id,
    value: values?.[id] ?? '',
  }));

  return (
    <ul
      className={cn('grid grid-cols-1 gap-6 px-6 sm:grid-cols-2', className)}
      {...props}
    >
      {data.map(({ id, label, ...inputProps }) => (
        <Item
          inputProps={{
            ...inputProps,
            id,
            onChange: (ev) => setData(id, ev.target.value),
          }}
          key={id}
          label={label}
        />
      ))}
    </ul>
  );
};

const Item = ({ className, label, inputProps = {}, ...props }) => {
  const { id } = inputProps;

  return (
    <li
      className={cn('flex items-center gap-4', className)}
      {...props}
    >
      <Label
        className='capitalize'
        htmlFor={id}
      >
        {label}:
      </Label>

      <Input {...inputProps} />
    </li>
  );
};

export default CheckListAccordionClientInfo;