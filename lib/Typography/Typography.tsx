import styles from './Typography.module.scss';

export const Typography = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.typography}>{children}</div>;
};
