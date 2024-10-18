import React from 'react';
import styles from './Tabs.module.scss';

interface TabsProps {
  children: React.ReactNode[] | React.ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  return (
    <div className={styles['tabs']}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;

        return (
          <>
            <input
              className={styles['tabRadio']}
              type="radio"
              name="tabs"
              id={`tab${index}`}
              defaultChecked={index === 0}
            />
            <label
              className={styles['tabLabel']}
              htmlFor={`tab${index}`}
            >
              {child.props.title}
            </label>
            <div className={styles['tabPanel']}>{child.props.children}</div>
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
