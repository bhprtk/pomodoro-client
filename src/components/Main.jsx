import React, { Component } from 'react';

import Navbar from './Navbar';
import Timer from './Timer';

class Main extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="container">
					<Timer />
				</div>
			</div>
		)
	}
}

export default Main;
