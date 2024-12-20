import { NavLink } from 'react-router';

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
].sort((a, b) => a.name.localeCompare(b.name)) as {
  name: string;
  description: string;
  route: string;
}[];

export const SideNav = () => {
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
                  'text-gray-700 hover:text-gray-900 px-4 py-1.5 hover:bg-slate-100 -ml-4 rounded-full';
                return isActive ? `${classNames} bg-slate-100 font-medium` : classNames;
              }}
            >
              {component.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
