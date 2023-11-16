import { cn } from '@/utils';

import { Logo } from '../ui';

const Header = ({ className, ...props }) => {
  return (
    <header
      className={cn(
        'mx-auto flex w-full max-w-bounds justify-between gap-12 border-b px-12 py-6',
        className,
      )}
      {...props}
    >
      <Logo />
    </header>
  );
};

export default Header;
