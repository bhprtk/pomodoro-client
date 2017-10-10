import React, { Component } from 'react';
// import io from 'socket.io-client';
import moment from 'moment';
import firebase from 'firebase';
import register from '../registerServiceWorker'
import {NotificationContainer, NotificationManager} from 'react-notifications';

import DisplayTime from './DisplayTime';
import TimerControls from './TimerControls';
import TimerTypes from './TimerTypes';

// import startSession from './timer';

class Timer extends Component {
	state = {
    displayTime: moment(25 * 60 * 1000).format('mm:ss'),
		timerRunning: false,
		currentTime: 25 * 60 * 1000,
		currentSession: 'pomodoro',
		// socket: io('localhost:8000'),
		// socket: io('https://bhprtk-pomodoro.herokuapp.com/'),
  }

	componentWillMount() {
		const { socket, timerRunning } = this.state;

		// socket.on('newTime', ({ displayTime, currentTime }) => {
		// 	this.setState({ displayTime, currentTime });
		// 	if(!timerRunning) {
		// 		this.setState({ timerRunning: true })
		// 	}
		// })
		//
		// socket.on('sessionOver', () => {
		// 	this.notify();
		// })

		if(Notification.permission !== "granted") {
			Notification.requestPermission();
		}

		// if('serviceWorker' in navigator) {
		// 	navigator.serviceWorker.register('/service-worker.js')
		// 		.then(() => {
		// 			navigator.serviceWorker.ready.then(serviceWorkerRegistration => {
		// 				this.setState({ serviceWorkerRegistration })
		// 			})
		// 		})
		// } else {
		// 	console.warn('Service workers are not supported in this browser.');
		// }


	}

	returnMilliseconds = sessionType => {
		if(sessionType === 'pomodoro') {
			return 25 * 60 * 1000;
		} else if(sessionType === 'shortBreak') {
			return 5 * 60 * 1000;
		} else {
			return 10 * 60 * 1000;
		}
	}

	startSession = sessionType => {
		// const { socket } = this.state;
		let time = this.returnMilliseconds(sessionType)
		this.setState({
			intervalID: setInterval(this.tick, 1000),
			currentTime: time,
			timerRunning: true,
			currentSession: sessionType,
			displayTime: moment(time).format('mm:ss')
		})
		// socket.emit('startSession', time)
	}

	this.tick() {
		if (this.state.currentTime) {
			time -= 1000
			let displayTime = moment(time).format('mm:ss');
			client.emit('newTime', { displayTime, currentTime: time })
		} else {
			clearInterval(intervalID);
			client.emit('sessionOver')
		}
	}

	stopClock = () => {
		this.state.socket.emit('stopClock')
		this.setState({ timerRunning: false	})
	}

	startClock = () => {
		this.state.socket.emit('startSession', this.state.currentTime)
		this.setState({ timerRunning: true })
	}

	resetClock = () => {
		this.state.socket.emit('resetClock')
		let milliseconds = this.returnMilliseconds(this.state.currentSession)
		this.setState({
			currentTime: milliseconds,
			displayTime: moment(milliseconds).format('mm:ss'),
			timerRunning: false
		})
	}

	notify = () => {
		const title = "Session over!!!";
		const options = {
			icon: `https://d30y9cdsu7xlg0.cloudfront.net/png/3879-200.png`
		}
		// this.state.serviceWorkerRegistration.showNotification(title, options)
		const n = new Notification(title, options);
		var audio = new Audio('alarm.mp3');
		audio.play();
	}


	render() {
		// const displayTime = moment(this.state.clock).format('mm:ss');
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
					displayTime={this.state.displayTime}
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
