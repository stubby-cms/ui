import clsx from 'clsx';
import {
  CheckIcon,
  CircleXIcon,
  FeatherIcon,
  InfoIcon,
  LightbulbIcon,
  TriangleAlertIcon,
} from 'lucide-react';
import styles from './Callout.module.scss';

interface CalloutProps {
  variant?: 'info' | 'tip' | 'warning' | 'success' | 'error' | 'note';
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

const Callout = ({ variant = 'info', className, children }: CalloutProps) => {
  const Icon = variants[variant].icon;

  return (
    <div className={clsx(styles['callout'], styles[`${variant}`], className)}>
      <Icon
        size={20}
        className={styles['calloutIcon']}
      />
      <div className={styles['calloutContent']}>{children}</div>
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
