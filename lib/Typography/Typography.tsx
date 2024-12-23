import './Typography.scss';

export const Typography = ({ children }: { children: React.ReactNode }) => {
  return <div className={'typography dark:prose-invert'}>{children}</div>;
};
