import { highlight } from 'sugar-high';

export const Code = ({ children, ...props }: { children: string }) => {
  let codeHTML = highlight(children);
  return (
    <code
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  );
};
