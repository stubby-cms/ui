'use client';

import { clsx } from 'clsx';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
  src?: string;
}

export async function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value);
}

export function CopyButton({ value, className, src, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasCopied(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [hasCopied]);

  return (
    <div className={clsx('group', className)}>
      <button
        className={clsx(
          'relative z-10 h-6 w-6 hover:bg-gray-700 hover:text-gray-50 flex items-center justify-center rounded-lg transition-colors duration-200 dark:hover:bg-gray-800',
        )}
        onClick={(e) => {
          e.preventDefault();
          copyToClipboardWithMeta(value);
          setHasCopied(true);
        }}
        type="button"
        {...props}
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
      </button>
      <div className="group-hover:block hidden absolute mt-2 text-center px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm border dark:border-gray-800">
        {hasCopied ? 'Copied!' : 'Copy'}
      </div>
    </div>
  );
}
