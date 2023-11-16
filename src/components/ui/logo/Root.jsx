import { Text } from '@/components/ui/text';
import { cn } from '@/utils';

const Logo = ({ className, ...props }) => {
  return (
    <Text
      asChild
      className={cn('text-xl font-semibold uppercase', className)}
      {...props}
    >
      <span>Logo</span>
    </Text>
  );
};

export default Logo;
