import { forwardRef } from 'react';

import { cn } from '@/utils';

const TableCell = ({ className, ...props }, ref) => {
  return (
    <td
      className={cn(
        'p-2 align-middle sm:p-4 [&:has([role=checkbox])]:pr-0',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TableCell);
