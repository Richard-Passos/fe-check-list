import { forwardRef } from 'react';

import { cn } from '@/utils';

const Input = ({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'h-10 w-full cursor-pointer border-b bg-transparent px-4 text-sm transition-colors file:mr-2 file:mt-2 file:cursor-pointer file:border-0 file:bg-transparent file:px-0 file:font-medium file:text-content placeholder:text-muted-content focus-visible:border-b-current focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-0 [&[type=color]]:overflow-hidden [&[type=color]]:px-0 [&[type=file]]:text-muted-content',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Input);
