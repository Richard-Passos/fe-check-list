'use client';

import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons';
import { Slot } from '@radix-ui/react-slot';
import { useContext } from 'react';

import { Button } from '@/components/ui';
import { TableCell, TableRow } from '@/components/ui/table';
import { CheckListContext } from '@/contexts';
import { cn } from '@/utils';

import InputMask from '../input-mask';

const CheckListAccordionTableRow = ({ disabled, cells, ...props }) => {
  const { id, item, ...cellsRest } = cells;

  const { data: rows, setData } = useContext(CheckListContext).rows;

  const data = rows[id] ?? cellsRest;

  const handleSetData = (key, value) =>
    setData(id, { ...data, [key]: value ?? !data[key] });

  return (
    <TableRow {...props}>
      <QntCell
        onAccept={(value) => handleSetData('qnt', value)}
        value={data.qnt.toString()}
      />

      <TableCell className='w-full'>{item}</TableCell>

      <ToggleCell
        disabled={disabled.go}
        isTrue={data.go}
        onClick={() => handleSetData('go')}
      />

      <ToggleCell
        disabled={disabled.back}
        isTrue={data.back}
        onClick={() => handleSetData('back')}
      />
    </TableRow>
  );
};

const QntCell = ({ className, ...props }) => {
  return (
    <TableCell>
      <InputMask
        className={cn(
          'w-10 rounded-sm border bg-main p-0 text-center focus-visible:border-border focus-visible:outline',
          className,
        )}
        mask={/^(-|\d{1,4})$/}
        placeholder='0'
        {...props}
      />
    </TableCell>
  );
};

const ToggleCell = ({ className, isTrue, ...props }) => {
  return (
    <TableCell className={cn('w-28 text-center', className)}>
      <Button
        className='aspect-square h-6 px-0'
        variants={{
          color: isTrue ? 'success' : 'danger',
          size: 'sm',
        }}
        {...props}
      >
        {isTrue ? (
          <Icon>
            <CheckIcon />
          </Icon>
        ) : (
          <Icon>
            <Cross2Icon />
          </Icon>
        )}
      </Button>
    </TableCell>
  );
};

const Icon = ({ className, ...props }) => {
  return (
    <Slot
      className={cn('h-3.5 w-3.5', className)}
      {...props}
    />
  );
};

export default CheckListAccordionTableRow;
