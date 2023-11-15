import { forwardRef } from 'react';

import { cn } from '@/utils';

const TableHead = ({ className, ...props }, ref) => {
  return (
    <th
      className={cn(
        'p-2 text-left align-middle font-medium sm:p-4 [&:has([role=checkbox])]:pr-0',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TableHead);
