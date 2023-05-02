import * as React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
export interface ISidebarProps {
}

export default class Sidebar extends React.PureComponent<ISidebarProps> {
  public render() {
    return (
      <div className='sidebar'>
        <div className='top'>
          <span className='logo'>Admin panel</span>
        </div>
        <hr />
        <div className='center'>
          <ul>
            <p className='title'>MAIN</p>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
            <p className='title'>LIST</p>
            <li>
              <PeopleIcon className='icon' />
              <span>Users</span>
            </li>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li><li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
            <p className='title'>LIST</p>
            <li>
              <PeopleIcon className='icon' />
              <span>Users</span>
            </li>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li><li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
            <p className='title'>USERS</p>
            <li>
              <AccountCircleOutlinedIcon className='icon' />
              <span>Profile</span>
            </li>
            <li>
              <LogoutIcon className='icon' />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className='bottom'>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
      </div>
    );
  }
}
