import { tv } from 'tailwind-variants';
import {
  CheckIcon,
  CircleXIcon,
  FeatherIcon,
  InfoIcon,
  LightbulbIcon,
  TriangleAlertIcon,
} from 'lucide-react';
import type { VariantProps } from 'tailwind-variants';

const callout = tv({
  slots: {
    base: 'mt-6 overflow-hidden rounded-xl border px-5 py-4 flex items-start space-x-3',
    icon: 'mt-0.5 h-5 w-5',
    content: 'flex-1 overflow-x-auto first:mt-0 last:mb-0',
  },
  variants: {
    variant: {
      info: {
        base: 'border-zinc-500/20 bg-zinc-50/50 dark:border-zinc-500/30 dark:bg-zinc-500/10',
        icon: 'text-zinc-500',
        content: 'text-zinc-900 dark:text-zinc-200',
      },
      tip: {
        base: 'border-emerald-500/20 bg-emerald-50/50 dark:border-emerald-500/30 dark:bg-emerald-500/10',
        icon: 'text-emerald-600',
        content: 'text-emerald-900 dark:text-emerald-200',
      },
      warning: {
        base: 'border-amber-500/20 bg-amber-50/50 dark:border-amber-500/30 dark:bg-amber-500/10',
        icon: 'text-amber-600',
        content: 'text-amber-900 dark:text-amber-200',
      },
      success: {
        base: 'border-green-500/20 bg-green-50/50 dark:border-green-500/30 dark:bg-green-500/10',
        icon: 'text-green-600',
        content: 'text-green-900 dark:text-green-200',
      },
      error: {
        base: 'border-red-500/20 bg-red-50/50 dark:border-red-500/30 dark:bg-red-500/10',
        icon: 'text-red-600',
        content: 'text-red-900 dark:text-red-200',
      },
      note: {
        base: 'border-sky-500/20 bg-sky-50/50 dark:border-sky-500/30 dark:bg-sky-500/10',
        icon: 'text-sky-600',
        content: 'text-sky-900 dark:text-sky-200',
      },
    },
  },
  defaultVariants: {
    variant: 'info',
  },
});

type CalloutVariant = VariantProps<typeof callout>;

interface CalloutProps extends CalloutVariant {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const variants = {
  info: {
    icon: InfoIcon,
  },
  tip: {
    icon: LightbulbIcon,
  },
  warning: {
    icon: TriangleAlertIcon,
  },
  success: {
    icon: CheckIcon,
  },
  error: {
    icon: CircleXIcon,
  },
  note: {
    icon: FeatherIcon,
  },
} as const;

const Callout = ({ variant = 'info', children }: CalloutProps) => {
  const Icon = variants[variant].icon;

  const { base, icon, content } = callout({
    variant: variant,
  });

  return (
    <div className={base()}>
      <Icon
        size={20}
        className={icon()}
      />
      <div className={content()}>{children}</div>
    </div>
  );
};

export const Tip = ({ className, children }: Omit<CalloutProps, 'variant'>) => {
  return (
    <Callout
      variant="tip"
      className={className}
    >
      {children}
    </Callout>
  );
};

export const Info = ({ className, children }: Omit<CalloutProps, 'variant'>) => {
  return (
    <Callout
      variant="info"
      className={className}
    >
      {children}
    </Callout>
  );
};

export const Warning = ({ className, children }: Omit<CalloutProps, 'variant'>) => {
  return (
    <Callout
      variant="warning"
      className={className}
    >
      {children}
    </Callout>
  );
};

export const Success = ({ className, children }: Omit<CalloutProps, 'variant'>) => {
  return (
    <Callout
      variant="success"
      className={className}
    >
      {children}
    </Callout>
  );
};

export const Error = ({ className, children }: Omit<CalloutProps, 'variant'>) => {
  return (
    <Callout
      variant="error"
      className={className}
    >
      {children}
    </Callout>
  );
};

export const Note = ({ className, children }: Omit<CalloutProps, 'variant'>) => {
  return (
    <Callout
      variant="note"
      className={className}
    >
      {children}
    </Callout>
  );
};

Tip.displayName = 'Tip';
Info.displayName = 'Info';
Warning.displayName = 'Warning';
Success.displayName = 'Success';
Error.displayName = 'Error';
Note.displayName = 'Note';
