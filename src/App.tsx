import { NavLink } from 'react-router';
import { components } from './components/SideNav';

function App() {
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
