'use client';

import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { cn } from '@/utils';

import { Accordion, Button, Table } from '../ui';
import Row from './Row';

const CheckListAccordion = ({ items, ...props }) => {
  const [disabled, setDisabled] = useState({ go: false, back: false });

  const handleSetDisabled = (key) =>
    setDisabled((state) => ({
      ...state,
      [key]: !state[key],
    }));

  return (
    <Accordion
      type='multiple'
      {...props}
    >
      {items.map(({ title, content }) => (
        <Accordion.Item
          key={title}
          value={title}
        >
          <AccordionTrigger>{title}</AccordionTrigger>

          <Accordion.Content className='max-sm:[&>div]:p-0'>
            <Table>
              <TableHeader handleSetDisabled={handleSetDisabled} />

              <TableBody
                content={content}
                rowProps={{
                  disabled,
                }}
                title={title}
              />
            </Table>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

const AccordionTrigger = ({ children, ...props }) => {
  return (
    <Accordion.Header {...props}>
      <Accordion.Trigger>
        {children}

        <ChevronDownIcon
          aria-hidden
          className='h-4 w-4 transition-transform duration-300 group-data-open:rotate-180'
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
};

const TableHeader = ({ className, handleSetDisabled, ...props }) => {
  return (
    <Table.Header
      className={cn('print:table-row-group', className)}
      {...props}
    >
      <Table.Row>
        <Table.Head>QNT</Table.Head>

        <Table.Head>ITEM</Table.Head>

        <TableHeadToggle onClick={() => handleSetDisabled('go')}>
          IDA
        </TableHeadToggle>

        <TableHeadToggle onClick={() => handleSetDisabled('back')}>
          VOLTA
        </TableHeadToggle>
      </Table.Row>
    </Table.Header>
  );
};

const TableHeadToggle = ({ className, variants, ...props }) => {
  return (
    <Table.Head className={cn('min-w-[60px] px-0 text-center', className)}>
      <Button
        variants={{
          color: 'inverted',
          style: 'ghost',
          size: 'sm',
          ...variants,
        }}
        {...props}
      />
    </Table.Head>
  );
};

const TableBody = ({ content, title, rowProps, ...props }) => {
  content = content.sort((a, b) => a.item.localeCompare(b.item));

  const defaultId =
    title.replaceAll(' ', '-').replace(/-{2,}/g, '-').toLowerCase() + '-';

  return (
    <Table.Body {...props}>
      {content.map((cells, i) => (
        <Row
          cells={{
            ...cells,
            id: defaultId + i,
          }}
          key={defaultId + i}
          {...rowProps}
        />
      ))}
    </Table.Body>
  );
};

export default CheckListAccordion;
