'use client';

import { Share1Icon } from '@radix-ui/react-icons';
import { useState } from 'react';

import { CheckList } from '@/components';
import { Button } from '@/components/ui';
import { TextTitle } from '@/components/ui/text';
import { checkListContent } from '@/constants';
import { usePrint } from '@/hooks';
import { cn } from '@/utils';

const CLIENT_INFO_DEFAULT_DATA = [
  {
    id: 'client',
    label: 'Cliente',
    unmask: true,
    placeholder: 'Nome da empresa',
  },
  {
    id: 'name',
    label: 'Obra',
    unmask: true,
    placeholder: 'Nome da obra',
  },
  {
    id: 'departureDate',
    label: 'Saída',
    mask: '00/00/0000',
    placeholder: '01/01/2023',
  },
  {
    id: 'returnDate',
    label: 'Retorno',
    mask: '00/00/0000',
    placeholder: '08/01/2023',
  },
];

const HomeCheckList = ({ className, ...props }) => {
  const [isOpen, setIsOpen] = useState([]);

  const { toPrintRef, handlePrint } = usePrint({
    onBeforeGetContent: () =>
      setIsOpen(checkListContent.map((item) => item.title)),
    onAfterPrint: () => setIsOpen([]),
  });

  return (
    <article
      className={cn(
        'relative flex w-full max-w-screen-lg flex-col gap-y-6 rounded-md bg-muted py-3 shadow-md sm:px-3',
        className,
      )}
      ref={toPrintRef}
      {...props}
    >
      <TextTitle className='px-6 pt-3 uppercase leading-none sm:mx-auto sm:px-3 sm:text-center'>
        Check-list atendimento externo
      </TextTitle>

      <Button
        className='absolute right-3.5 top-3.5 aspect-square px-0'
        onClick={handlePrint}
        variants={{ color: 'primary', size: 'sm' }}
      >
        <Share1Icon className='h-4 w-4' />
      </Button>

      <CheckList id='external-service'>
        <CheckList.ClientInfo defaultData={CLIENT_INFO_DEFAULT_DATA} />

        <CheckList.Accordion
          items={checkListContent}
          onValueChange={setIsOpen}
          value={isOpen}
        />

        <CheckList.ExtraInfo />
      </CheckList>
    </article>
  );
};

export default HomeCheckList;
