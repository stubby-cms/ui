import { Outlet } from 'react-router';
import { SideNav } from '../components/SideNav';

export function ComponentsLayout() {
  return (
    <div className="container mx-auto max-w-6xl flex pt-10 gap-10">
      <SideNav />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
