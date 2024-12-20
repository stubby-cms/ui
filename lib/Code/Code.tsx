import { highlight } from 'sugar-high';
import './code.css';

export const Code = ({ children, ...props }: { children: string }) => {
  let codeHTML = highlight(children);
  return (
    <code
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  );
};
