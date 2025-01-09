export const CardGroup = ({
  size = 'sm',
  children,
}: {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}) => {
  const classes = {
    sm: 'grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4',
    md: 'grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3',
    lg: 'grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2',
  };

  return <div className={`grid pb-3 pt-1 ${classes[size]}`}>{children}</div>;
};

export const Card = ({
  icon,
  title,
  description,
  link,
  className,
}: {
  icon?: string;
  title: string;
  description?: string;
  link?: string;
  className?: string;
}) => {
  const content = (
    <>
      {icon && (
        <img
          src={icon}
          alt={title}
          className="mb-2 mt-1.5 h-10 w-10 object-contain dark:opacity-80 dark:invert dark:filter"
        />
      )}
      <div className="flex flex-col items-center justify-center">
        <span className="font-medium">{title}</span>
        {description && <p className="opacity-60">{description}</p>}
      </div>
    </>
  );

  const containerClasses =
    'flex flex-col items-center justify-center rounded-2xl border p-3 hover:shadow-sm dark:border-gray-800 transition-shadow duration-200 bg-white dark:bg-transparent dark:text-gray-100';

  return link ? (
    <a
      href={link}
      className={`no-underline ${containerClasses} ${className}`}
      target={link.startsWith('http') ? '_blank' : '_self'}
    >
      {content}
    </a>
  ) : (
    <div className={`${containerClasses} ${className}`}>{content}</div>
  );
};
