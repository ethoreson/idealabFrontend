import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class SidebarNavigation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to='/queue'>Queue</Link>
					</li>
					<li>
						<Link to='/upload'>Upload</Link>
					</li>
					<li onClick={this.props.logout}>
						<Link to='/login'>Log Out</Link>
					</li>
					<li>
						<Link to='/account'>Create Account</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default SidebarNavigation;
