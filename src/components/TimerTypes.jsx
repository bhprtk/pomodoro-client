import React, { Component } from 'react';
import $ from 'jquery';

class TimerTypes extends Component {

	// startPomodoro = () => this.props.setSession('pomodoro')

	startPomodoro = () => this.props.startSession('pomodoro')

	startShortBreak = () => this.props.startSession('shortBreak')

	startLongBreak = () => this.props.startSession('longBreak')

	componentWillReceiveProps(nextProps) {
		const { currentSession } = nextProps;
		this.changeActiveColor(currentSession);
	}

	changeActiveColor = currentSession => {
		const ids = ['pomodoro', 'shortBreak', 'longBreak'];
		ids.forEach(id => {
			if(id === currentSession) {
				$(`#${id}`).removeClass("start-buttons")
				$(`#${id}`).addClass("start-buttons-active")
			} else {
				$(`#${id}`).removeClass("start-buttons-active")
				$(`#${id}`).addClass("start-buttons")
			}
		})
	}

	render() {
		return(
			<div
				className="col-md-6 col-md-offset-3"
				style={{
					display: 'flex',
					color: '#696969',
					fontSize: 16,
					alignItems: 'center',
					justifyContent: 'center',
				}}>


				<button
					id="pomodoro"
					className="start-buttons-active"
					onClick={this.startPomodoro}>
					pomodoro
				</button>

				<span className="dividers">|</span>

				<button
					id="shortBreak"
					className="start-buttons"
					onClick={this.startShortBreak}>
					short break
				</button>

				<span className="dividers">|</span>

				<button
					id="longBreak"
					className="start-buttons"
					onClick={this.startLongBreak}>
					long break
				</button>

			</div>
		)
	}
}

export default TimerTypes;
