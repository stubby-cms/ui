import React from 'react';
import styles from './Steps.module.scss';

interface StepProps {
  number: number | string;
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

export const Step = ({ children, number, title }: StepProps) => {
  return (
    <div
      className={styles['step']}
      role="listitem"
    >
      <div className={styles['stepLine']}></div>
      <div className={styles['stepNumber']}>{number}</div>
      <div className={styles['stepContainer']}>
        <h3 className={styles['stepTitle']}>{title}</h3>
        <div className={styles['stepContent']}>{children}</div>
      </div>
    </div>
  );
};

export const Steps = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles['steps']}>{children}</div>;
};
