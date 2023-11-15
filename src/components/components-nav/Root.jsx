'use client';

import { usePathname } from 'next/navigation';

import { cn, normalizeCompName } from '@/utils';

import { NavigationMenu, NavigationMenuLink } from '../ui/navigation-menu';
import { navigationMenuTriggerVariants } from '../ui/navigation-menu/Trigger';

const COMPONENTS = [
    'accordion',
    'alert',
    'alert-dialog',
    'aspect-ratio',
    'avatar',
    'badge',
    'button',
    'calendar',
    'card',
    'checkbox',
    'collapsible',
    'combobox',
    'command',
    'context-menu',
    'date-picker',
    'dialog',
    'dropdown-menu',
    'form',
    'hover-card',
    'image',
    'input',
    'label',
    'link',
    'menubar',
    'navigation-menu',
    'popover',
    'progress',
    'radio-group',
    'scroll-area',
    'select',
    'separator',
    'sheet',
    'skeleton',
    'slider',
    'switch',
    'table',
    'tabs',
    'text',
    'textarea',
    'timerbar',
    'toast',
    'toggle',
    'tooltip',
  ],
  COMPONENTS_DEFAULT_PATH = '/components/';

const ComponentsNav = ({ className, ...props }) => {
  const pathname = usePathname().replace(COMPONENTS_DEFAULT_PATH, '');

  return (
    <NavigationMenu
      className={cn('max-w-none flex-col gap-1', className)}
      {...props}
    >
      {COMPONENTS.map((component) => (
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerVariants(),
            'w-full justify-start',
            normalizeCompName(pathname) === normalizeCompName(component) &&
              'bg-muted',
          )}
          href={COMPONENTS_DEFAULT_PATH + component}
          key={component}
        >
          {normalizeCompName(component)}
        </NavigationMenuLink>
      ))}
    </NavigationMenu>
  );
};

export default ComponentsNav;
