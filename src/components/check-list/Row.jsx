'use client';

import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons';
import { Slot } from '@radix-ui/react-slot';
import { useContext } from 'react';

import { Button, Input } from '@/components/ui';
import { TableCell, TableRow } from '@/components/ui/table';
import { CheckListContext } from '@/contexts';
import { cn } from '@/utils';

const CheckListAccordionTableRow = ({ disabled, cells, ...props }) => {
  const { id, item, ...cellsRest } = cells;

  const { data: rows, setData } = useContext(CheckListContext).rows;

  const data = rows[id] ?? cellsRest;

  const handleSetData = (key, value) =>
    setData(id, { ...data, [key]: value ?? !data[key] });

  return (
    <TableRow {...props}>
      <QntCell
        onChange={(ev) => handleSetData('qnt', ev.target.value)}
        value={data.qnt}
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
      <Input
        className={cn(
          'w-10 rounded-sm border bg-main p-0 text-center',
          className,
        )}
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
