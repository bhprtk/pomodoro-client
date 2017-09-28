import React, { Component } from 'react';
import moment from 'moment';
import firebase from 'firebase';
import register from '../registerServiceWorker'
import {NotificationContainer, NotificationManager} from 'react-notifications';

import DisplayTime from './DisplayTime';
import TimerControls from './TimerControls';
import TimerTypes from './TimerTypes';

class Timer extends Component {
	state = {
    time: 25 * 60 * 1000,
		timerRunning: false,
		currentSession: 'pomodoro',
  }

	componentWillMount() {
		if(Notification.permission !== "granted") {
			Notification.requestPermission();
		}
	}

	returnMins = sessionType => {
		if(sessionType === 'pomodoro') {
			return 25;
		} else if(sessionType === 'shortBreak') {
			return 5;
		} else {
			return 10;
		}
	}

	startSession = sessionType => {
		let mins = this.returnMins(sessionType);

		clearInterval(this.state.timer)
		this.setState({
			time: mins * 60 * 1000,
			timer: setInterval(this.tick, 1000),
			timerRunning: true,
			currentSession: sessionType,
		})
	}

	tick = () => {
		const { time } = this.state;
		if(time) {
			this.setState({ time: time - 1000 })
			return 1;
		} else {
			this.notify()
			clearInterval(this.state.timer);
			this.setState({ timerRunning: false })
			return 0;
		}
	}

	stopClock = () => {
		clearInterval(this.state.timer);
		this.setState({ timerRunning: false	})
	}

	startClock = () => {
		if(this.state.timer) {
			this.setState({
				timer: setInterval(this.tick, 1000),
				timerRunning: true,
			})
		} else {
			this.startSession(this.state.currentSession);
		}
	}

	resetClock = () => {
		clearInterval(this.state.timer);
		let mins = this.returnMins(this.state.currentSession)
		this.setState({
			timerRunning: false,
			time: mins * 60 * 1000
		})
	}

	notify = () => {
		const title = "Session over!!!";
		const options = {
			icon: `https://d30y9cdsu7xlg0.cloudfront.net/png/3879-200.png`
			// icon: `http://www.toothstudent.com/wp-content/uploads/2017/04/Pomodoro-Icon.png`
		}
		var n = new Notification(title, options)
		// NotificationManager.success('Success message', 'Title here');
		var audio = new Audio('alarm.mp3');
		audio.play();
	}



	render() {
		const displayTime = moment(this.state.time).format('mm:ss');
		return (
			<div
				className="text-center"
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					paddingTop: 50
				}}>

				<div className="row">
					<TimerTypes
						startSession={this.startSession}
						currentSession={this.state.currentSession}/>

				</div>

				<DisplayTime
					timerRunning={this.state.timerRunning}
					displayTime={displayTime}
					/>

				<div className="row">
					<TimerControls
						startClock={this.startClock}
						stopClock={this.stopClock}
						timerRunning={this.state.timerRunning}
						resetClock={this.resetClock}
						/>
				</div>

			</div>
		)

	}
}

export default Timer;
