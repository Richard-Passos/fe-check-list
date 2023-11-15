'use client';

import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons';
import { Slot } from '@radix-ui/react-slot';
import { useState } from 'react';

import { Button, Input } from '@/components/ui';
import { TableCell, TableRow } from '@/components/ui/table';
import { cn, isFunctionThanCall } from '@/utils';

const CheckListAccordionTableRow = ({
  disabled = {},
  cells = {},
  ...props
}) => {
  const { qnt, item, go, back } = cells;

  const [state, setState] = useState({ qnt, go, back });

  return (
    <TableRow {...props}>
      <QntCell
        setState={setState}
        state={state}
      />

      <TableCell className='w-full'>{item}</TableCell>

      <ToggleCell
        disabled={disabled}
        setState={setState}
        state={state}
        value='go'
      />

      <ToggleCell
        disabled={disabled}
        setState={setState}
        state={state}
        value='back'
      />
    </TableRow>
  );
};

const QntCell = ({ state, setState, className, ...props }) => {
  return (
    <TableCell {...props}>
      <Input
        className={cn(
          'w-10 rounded-sm border bg-main p-0 text-center',
          className,
        )}
        disabled={props.disabled}
        onChange={(ev) => {
          setState((state) => ({ ...state, qnt: ev.target.value }));

          isFunctionThanCall(props.onChange, ev);
        }}
        onFocus={(ev) => {
          setState((state) => ({ ...state, qnt: '' }));

          isFunctionThanCall(props.onFocus, ev);
        }}
        placeholder='0'
        type='text'
        value={state.qnt}
      />
    </TableCell>
  );
};

const ToggleCell = ({ value, state, setState, className, ...props }) => {
  return (
    <TableCell
      className={cn('w-28 text-center', className)}
      {...props}
    >
      <Button
        className='aspect-square h-6 px-0'
        disabled={props.disabled[value]}
        onClick={(ev) => {
          setState((state) => ({ ...state, [value]: !state[value] }));

          isFunctionThanCall(props.onClick, ev);
        }}
        onFocus={(ev) => {
          setState((state) => ({ ...state, [value]: '' }));

          isFunctionThanCall(props.onFocus, ev);
        }}
        variants={{
          color: state[value] ? 'success' : 'danger',
          size: 'sm',
        }}
      >
        {state[value] ? (
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

const Icon = ({ className, children, ...props }) => {
  return (
    <Slot
      className={cn('h-3.5 w-3.5', className)}
      {...props}
    >
      {children}
    </Slot>
  );
};

export default CheckListAccordionTableRow;
