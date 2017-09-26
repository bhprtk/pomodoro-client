import React, { Component } from 'react';

class TimerControls extends Component {

	stopClock = () => this.props.stopClock()

	startClock = () => this.props.startClock()

	resetClock = () => this.props.resetClock()

	render() {
		return (
			<div
				className="col-md-6 col-md-offset-3"
				style={{
					display: 'flex',
					color: '#696969',
					fontSize: 18,
					justifyContent: 'space-around',
				}}>

				{this.props.timerRunning ?
					<span
						className="timer-controls"
						onClick={this.stopClock}>
						stop
					</span>
					:
					<span
						className="timer-controls"
						onClick={this.startClock}>
						start
					</span>
				}



				<span
					className="timer-controls"
					onClick={this.resetClock}>
					reset
				</span>

			</div>
		)
	}
}

export default TimerControls;
