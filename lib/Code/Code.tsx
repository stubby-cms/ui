import clsx from 'clsx';
import { CopyButton } from './Copy';

export const CodeBlockComponent = ({
  code,
  fileName,
  className,
  ...props
}: {
  code: string;
  fileName?: string;
  className?: string;
}) => {
  return (
    <div className="text-sm border dark:border-gray-800 shadow-sm rounded-xl leading-6 items-center relative">
      {fileName && (
        <div className="code-filename font-mono font-medium b-2 border-b h-11 flex items-center bg-gray-50 rounded-t-xl px-3 justify-between dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300">
          <span>{fileName}</span>
        </div>
      )}

      <CopyButton
        className="absolute top-2 right-2"
        value={code}
        aria-label="Copy code"
        title="Copy code"
      ></CopyButton>

      <pre
        {...props}
        className={clsx('code-block not-prose px-4 py-3 rounded-xl overflow-x-auto', className)}
      />
    </div>
  );
};
