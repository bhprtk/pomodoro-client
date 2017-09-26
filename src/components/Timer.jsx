import React, { Component } from 'react';
import moment from 'moment';
import firebase from 'firebase';
import register from '../registerServiceWorker'
import {NotificationContainer, NotificationManager} from 'react-notifications';

import TimerControls from './TimerControls';
import TimerTypes from './TimerTypes';

class Timer extends Component {
	state = {
    time: 25 * 60 * 1000,
		timerRunning: false,
		currentSession: 25
  }

	componentWillMount() {
		register();
	}

	setSession = key => {
		// this.setState({ session[key]: })
	}

	startSession = (mins = 25) => {
		clearInterval(this.state.timer)
		this.setState({
			time: mins * 60 * 1000,
			timer: setInterval(this.tick, 1000),
			timerRunning: true,
			currentSession: mins
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
		this.setState({ timerRunning: false })
	}

	startClock = () => {
		if(this.state.timer) {
			this.setState({
				timer: setInterval(this.tick, 1000),
				timerRunning: true
			})
		} else {
			this.startSession();
		}
	}

	resetClock = () => {
		clearInterval(this.state.timer);
		this.setState({
			timerRunning: false,
			time: this.state.currentSession * 60 * 1000
		})
	}


	notify = () => {
		// var n = new Notification('theTitle')
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
						startSession={this.startSession}/>

				</div>

				<div className="row">
					<p className="display-time">{displayTime}</p>

				</div>

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
