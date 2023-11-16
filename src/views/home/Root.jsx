import { cn } from '@/utils';

import CheckList from './CheckList';

const HomeView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'mx-auto flex min-h-screen w-full max-w-bounds flex-col items-center px-1 py-24 sm:px-6',
        className,
      )}
      {...props}
    >
      <CheckList />
    </main>
  );
};

export default HomeView;
