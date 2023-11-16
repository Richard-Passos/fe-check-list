'use client';

import { useContext } from 'react';

import { CheckListContext } from '@/contexts';
import { cn } from '@/utils';

import { Textarea } from '../ui';

const CheckListAccordionExtraInfo = ({ className, ...props }) => {
  const { data, setData } = useContext(CheckListContext).extraInfo;

  return (
    <Textarea
      className={cn('resize-y rounded-md', className)}
      onChange={(ev) => setData(ev.target.value)}
      placeholder='Informações extras'
      value={data}
      {...props}
    />
  );
};

export default CheckListAccordionExtraInfo;
