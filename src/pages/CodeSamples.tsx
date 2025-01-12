import Markdown from 'markdown-to-jsx';
import { PreBlockClient } from '../../lib/Code/Code.Client';

const code = `

\`\`\`tsx fileName="src/pages/BlogListPage.tsx"
// Fetch data from the server
const getData = async () => {
  const siteId = "*****";
  const url = new URL(\`https://stubby.io/api/v1/sites/\${siteId}/folders\`);
  url.searchParams.append("apiKey", API_KEY);
  const res = await fetch(url.href, {
    cache: "force-cache",
    next: { tags: ["posts"] },
  });
  const data = await res.json();
  return data;
};

const BlogListPage = async () => {
  const data = await getData();

  return (
    <main className="container pb-40 pt-16">
      <h1>Blog</h1>
      <ul>
        {data.map((blog: any) => {
          return <li key={blog.slug}>
            <Link href={\`/blog/\${data.slug}\`}>{blog.name}</Link>
          </li>;
        })}
      </ul>
    </main>
  );
}

export default BlogListPage; 
\`\`\`     
      `.trim();

export const CodeSamples = () => {
  return (
    <Markdown
      options={{
        overrides: {
          pre: PreBlockClient,
        },
      }}
    >
      {code}
    </Markdown>
  );
};
