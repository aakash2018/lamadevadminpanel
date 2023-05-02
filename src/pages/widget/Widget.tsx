import  PersonOutlineIcon  from '@mui/icons-material/PersonOutline';
import KeyboardArrowUpIcon  from '@mui/icons-material/KeyboardArrowUp';
import * as React from 'react';
import './Widget.scss';

interface IWidgetProps {
	type:string;
}

const Widget: React.FunctionComponent<IWidgetProps> = (props) => {
	return (
		<div className='widget'>
			<div className='left'>
				<span className='title'>Users</span>
				<span className='counter'>334</span>
				<span className='link'>See all user</span>
			</div>
			<div className='right'>
				<div className='percentage positive'>
					<KeyboardArrowUpIcon/>
					20%
				</div>
				<PersonOutlineIcon className='icon'/>
			</div>
		</div>
	);
};

export default Widget;
