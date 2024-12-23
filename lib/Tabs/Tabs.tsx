import React, { Children, isValidElement, ReactNode } from 'react';
import './Tabs.scss';

interface TabsProps {
  children: ReactNode[] | ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  return (
    <div className={'tabs'}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return null;

        return (
          <>
            <input
              className={'tab-radio'}
              type="radio"
              name="tabs"
              id={`tab${index}`}
              defaultChecked={index === 0}
            />
            <label
              className={'tab-label'}
              htmlFor={`tab${index}`}
            >
              {
                // @ts-ignore
                child.props.title
              }
            </label>
            <div className={'tab-panel'}>
              {
                // @ts-ignore
                child.props.children
              }
            </div>
          </>
        );
      })}
    </div>
  );
};

interface TabProps {
  children: React.ReactNode;
  title: string;
}

const Tab = ({ children }: TabProps) => <>{children}</>;

export { Tabs, Tab };
