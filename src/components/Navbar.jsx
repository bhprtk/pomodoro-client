import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div
					className="container"
					style={{
						display: 'flex',
						alignItems: 'center',
						paddingTop: 5
					}}>

					<span>
						<img
							style={{
								height: 30,
							}}
							src="https://odonno.gallerycdn.vsassets.io/extensions/odonno/pomodoro-code/0.2.1/1474455545331/Microsoft.VisualStudio.Services.Icons.Default"
							alt=""/>

					</span>

					<h4
						style={{
							color: '#fff'
						}}>
						<strong>pomodoro</strong>
					</h4>

					</div>
			</nav>
		)
	}
}

export default Navbar;
