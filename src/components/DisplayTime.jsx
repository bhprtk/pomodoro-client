import React, { Component } from 'react';

class DisplayTime extends Component {

	componentWillReceiveProps(nextProps) {
		const { timerRunning, displayTime } = nextProps;
		if(timerRunning) {
			document.title = displayTime;
		} else {
			document.title = 'pomodoro';
		}
	}

	render() {
		const { displayTime, timerRunning } = this.props;
		return (
			<div
				className="row"
				style={{
					margin: 10
				}}>
				<p className="display-time">{displayTime}</p>

			</div>
		)
	}
}

export default DisplayTime;
