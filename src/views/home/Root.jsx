import { CheckList } from '@/components';
import { TextTitle } from '@/components/ui/text';
import { checkListContent } from '@/constants';
import { cn } from '@/utils';

const CLIENT_INFO_DEFAULT_DATA = [
  { id: 'client', label: 'Cliente', placeholder: 'Nome da empresa' },
  { id: 'name', label: 'Obra', placeholder: 'Nome da obra' },
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

const HomeView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'mx-auto flex min-h-screen w-full max-w-bounds flex-col items-center gap-2 px-1 py-24',
        className,
      )}
      {...props}
    >
      <div className='w-full max-w-screen-lg space-y-6 rounded-md bg-muted py-3 shadow-md sm:w-[90%] sm:px-3'>
        <TextTitle className='mx-auto p-6 pb-0 text-center uppercase'>
          Check-list atendimento externo
        </TextTitle>

        <CheckList id='external-service'>
          <CheckList.ClientInfo defaultData={CLIENT_INFO_DEFAULT_DATA} />

          <CheckList.Accordion items={checkListContent} />

          <CheckList.ExtraInfo />
        </CheckList>
      </div>
    </main>
  );
};

export default HomeView;
