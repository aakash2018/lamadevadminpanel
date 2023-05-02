import * as React from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar/sidebar';
import { Navbar } from '../../components/navbar/navbar';
import Widget from '../widget/Widget';
interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type="'user'"/>
          <Widget type="'male'"/>
          <Widget type="'female'"/>
          <Widget type="'umarried'"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
