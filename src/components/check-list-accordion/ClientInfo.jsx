import { Input, Label } from '@/components/ui';
import { cn } from '@/utils';

const data = [
  { id: 'client', text: 'Cliente', placeholder: 'Nome da empresa' },
  { id: 'name', text: 'Obra', placeholder: 'Nome da obra' },
  { id: 'goDate', text: 'Saída', placeholder: '01/01/2023' },
  { id: 'returnDate', text: 'Retorno', placeholder: '08/01/2023' },
];

const CheckListAccordionClientInfo = ({ className, ...props }) => {
  return (
    <section
      className={cn('grid grid-cols-1 gap-6 px-6 sm:grid-cols-2', className)}
      {...props}
    >
      {data.map(({ id, text, placeholder }) => (
        <div
          className='flex items-center gap-4'
          key={id}
        >
          <Label
            className='capitalize'
            htmlFor={id}
          >
            {text}:
          </Label>

          <Input
            id={id}
            placeholder={placeholder}
          />
        </div>
      ))}
    </section>
  );
};

export default CheckListAccordionClientInfo;
