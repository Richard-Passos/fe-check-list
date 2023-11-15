import { CheckListAccordion } from '@/components';
import { Textarea } from '@/components/ui';
import { TextTitle } from '@/components/ui/text';
import { cn } from '@/utils';

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

        <CheckListAccordion.ClientInfo />

        <CheckListAccordion />

        <Textarea
          className='rounded-md'
          placeholder='Informações extras'
        />
      </div>
    </main>
  );
};

export default HomeView;
