'use client';

import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { checkListContent } from '@/constants';

import { Accordion, Button, Table } from '../ui';
import Row from './Row';

const CheckListAccordion = (props) => {
  const [disabled, setDisabled] = useState({ go: false, back: false });

  return (
    <Accordion
      collapsible
      mode='single'
      {...props}
    >
      {checkListContent.map(({ title, content }) => (
        <Accordion.Item
          key={title}
          value={title}
        >
          <AccordionTrigger>{title}</AccordionTrigger>

          <Accordion.Content className='max-sm:[&>div]:p-0'>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.Head>QNT</Table.Head>
                  <Table.Head>ITEM</Table.Head>
                  <Table.Head className='min-w-[60px] px-0 text-center'>
                    <Button
                      onClick={() =>
                        setDisabled((state) => ({
                          ...state,
                          back: !state.back,
                        }))
                      }
                      variants={{
                        color: 'inverted',
                        style: 'ghost',
                        size: 'sm',
                      }}
                    >
                      IDA
                    </Button>
                  </Table.Head>
                  <Table.Head className='min-w-[60px] px-0 text-center'>
                    <Button
                      onClick={() =>
                        setDisabled((state) => ({ ...state, go: !state.go }))
                      }
                      variants={{
                        color: 'inverted',
                        style: 'ghost',
                        size: 'sm',
                      }}
                    >
                      VOLTA
                    </Button>
                  </Table.Head>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {content.map((cells) => (
                  <Row
                    cells={cells}
                    disabled={disabled}
                    key={cells.item}
                  />
                ))}
              </Table.Body>
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

export default CheckListAccordion;
