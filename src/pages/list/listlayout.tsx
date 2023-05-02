import * as React from 'react';
import { Outlet } from 'react-router-dom';

export interface IListLayoutProps {
}

export function ListLayout (props: IListLayoutProps) {
  return (
    <div>
      <Outlet/>
    </div>
  );
}
