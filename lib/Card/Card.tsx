import clsx from 'clsx';

export const CardGroup = ({
  size = 'md',
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

  return <div className={clsx('grid', classes[size])}>{children}</div>;
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
  const card = (
    <div
      className={clsx(
        'shadow-sm border dark:border-gray-800 rounded-2xl flex p-3 flex-col items-center justify-center',
        className,
      )}
    >
      {icon && (
        <img
          src={icon}
          alt={title}
          className="w-10 h-10 object-contain mb-2 dark:filter dark:invert dark:opacity-80"
        />
      )}
      <div className="flex items-center justify-center flex-col">
        <h3 className="font-semibold">{title}</h3>
        {description && <p className="opacity-60">{description}</p>}
      </div>
    </div>
  );

  return link ? (
    <a
      href={link}
      className="hover:shadow-sm overflow-hidden rounded-2xl transition-shadow duration-200"
      target="_blank"
    >
      {card}
    </a>
  ) : (
    card
  );
};
