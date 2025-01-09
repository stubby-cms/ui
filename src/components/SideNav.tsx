import { NavLink } from 'react-router';
import { useTheme } from './Theme';

export const components = [
  {
    name: 'Tabs',
    description: 'A tab system that allows users to switch between different sections of content.',
    route: '/components/tabs',
  },
  {
    name: 'Callouts',
    description:
      'A callout is a small piece of text that is used to "call out" a feature or highlight a specific piece of information.',
    route: '/components/callouts',
  },
  {
    name: 'Cards',
    description: 'A card is a flexible and extensible content container.',
    route: '/components/cards',
  },
  {
    name: 'Accordion',
    description:
      'An accordion is a vertically stacked list of items that utilizes show/hide functionality.',
    route: '/components/accordion',
  },
  {
    name: 'Steps',
    description:
      'A step component is used to guide users through a process or workflow in a linear fashion.',
    route: '/components/steps',
  },
  {
    name: 'Typography',
    description: 'A collection of typographic elements to help style your content.',
    route: '/components/typography',
  },
  {
    name: 'Image',
    description: 'A component to display images with optional captions.',
    route: '/components/image',
  },
  {
    name: 'Code',
    description: 'A component to display code snippets with syntax highlighting.',
    route: '/components/code',
  },
].sort((a, b) => a.name.localeCompare(b.name)) as {
  name: string;
  description: string;
  route: string;
}[];

export const SideNav = () => {
  const theme = useTheme();
  const setTheme = (themeString: 'dark' | 'light') => {
    theme.toggleTheme(themeString);
  };

  return (
    <div className="min-w-[220px]">
      <div className="sticky top-10">
        <h1 className="text-xs font-bold mb-4 uppercase tracking-widest">Components</h1>
        <div className="flex flex-col gap-2">
          {components.map((component) => (
            <NavLink
              to={component.route}
              key={component.name}
              className={({ isActive }) => {
                const classNames =
                  'text-gray-700 dark:text-gray-200 dark:hover:text-gray-800 hover:text-gray-900 px-4 py-1.5 hover:bg-slate-100 -ml-4 rounded-full';
                return isActive
                  ? `${classNames} bg-slate-100 dark:text-gray-700 font-medium`
                  : classNames;
              }}
            >
              {component.name}
            </NavLink>
          ))}
        </div>

        <div className="mt-10">
          <button
            className="text-xs uppercase"
            onClick={() => setTheme('dark')}
          >
            Dark
          </button>{' '}
          |{' '}
          <button
            className="text-xs uppercase"
            onClick={() => setTheme('light')}
          >
            Light
          </button>
        </div>
      </div>
    </div>
  );
};
