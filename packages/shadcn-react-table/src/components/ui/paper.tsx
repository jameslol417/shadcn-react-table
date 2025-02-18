import { forwardRef } from 'react';
import { cn } from '../../utils/tailwind';

type PaperProps = React.ComponentProps<'div'>;

// TODO: add Paper functionality from Mantine or MUI
const Paper = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return <div className={cn(className)} ref={ref} {...props}></div>;
  },
);
Paper.displayName = 'Paper';

export { Paper, PaperProps };
