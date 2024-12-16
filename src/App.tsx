import { NavLink } from 'react-router';

function App() {
  const components = [
    {
      name: 'Tabs',
      description:
        'A tab system that allows users to switch between different sections of content.',
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
  ];

  return (
    <div className="container mx-auto max-w-6xl">
      <h1 className="text-xl font-bold mb-4 mt-20">Components</h1>
      <div className="grid grid-cols-4 gap-4">
        {components.map((component) => (
          <NavLink
            to={component.route}
            key={component.name}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-2">{component.name}</h2>
            <p>{component.description}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default App;
