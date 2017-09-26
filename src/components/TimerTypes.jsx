import React, { Component } from 'react';

class TimerTypes extends Component {

	// startPomodoro = () => this.props.setSession('pomodoro')

	startPomodoro = () => this.props.startSession(25)

	startShortBreak = () => this.props.startSession(5)

	startLongBreak = () => this.props.startSession(10)


	render() {
		return(
			<div
				className="col-md-6 col-md-offset-3"
				style={{
					display: 'flex',
					color: '#696969',
					fontSize: 18,
					alignItems: 'center',
					justifyContent: 'center',
				}}>


				<button
					className="start-buttons"
					onClick={this.startPomodoro}>
					pomodoro
				</button>

				<span className="dividers">|</span>

				<button
					className="start-buttons"
					onClick={this.startShortBreak}>
					short break
				</button>

				<span className="dividers">|</span>

				<button
					className="start-buttons"
					onClick={this.startLongBreak}>
					long break
				</button>

			</div>
		)
	}
}

export default TimerTypes;
