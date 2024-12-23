import React from 'react';
import './Steps.scss';

interface StepProps {
  number: number | string;
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

export const Step = ({ children, number, title }: StepProps) => {
  return (
    <div
      className={'step'}
      role="listitem"
    >
      <div className={'stepLine'}></div>
      <div className={'stepNumber'}>{number}</div>
      <div className={'stepContainer'}>
        <h3 className={'stepTitle'}>{title}</h3>
        <div className={'stepContent'}>{children}</div>
      </div>
    </div>
  );
};

export const Steps = ({ children }: { children: React.ReactNode }) => {
  return <div className={'steps'}>{children}</div>;
};
