import { Outlet } from 'react-router';

export function ComponentsLayout() {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="h-20"></div>
      <Outlet />
    </div>
  );
}
