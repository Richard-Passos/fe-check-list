import { Inter } from 'next/font/google';

import { Header } from '@/components';
import '@/styles/globals.css';
import { cn } from '@/utils';

const font = Inter({ subsets: ['latin'], variable: '--font-app' });

const metadata = {
  title: 'Check-list — home',
  description: 'Uma check-list para materias de contruções pré definidos.',
};

const Layout = ({ children }) => {
  return (
    <html lang='pt-BR'>
      <body
        className={cn(
          'mx-auto min-h-screen overflow-x-clip bg-main font-app text-content',
          font.variable,
        )}
      >
        <Header />

        {children}
      </body>
    </html>
  );
};

export default Layout;
export { metadata };
