import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<strong
							className="navbar-brand"
							style={{
								color: '#fff'
							}}>
							pomodoro
						</strong>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar;
