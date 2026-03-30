import { cn } from '@/utils/cn';

interface SideLabelProps {
  text: string;
  side: 'left' | 'right';
  className?: string;
}

export function SideLabel({ text, side, className }: SideLabelProps) {
  return (
    <div className={cn(
      "side-label hidden lg:block",
      side === 'left' ? "side-label-left" : "side-label-right",
      className
    )}>
      {text}
    </div>
  );
}
