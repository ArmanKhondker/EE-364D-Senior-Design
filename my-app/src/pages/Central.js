import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Central extends Component {

	render() {
		return (
			<div className="Splash">
				<body onClick={this.redirect} className="Central-body">
					<h1 align="center">Welcome to the Matching Hub for the RGK CONNECT program! </h1>
					<br></br>
                    <p align="center">This web application is for UT graduate students, community organizations with promising projects, and the RGK CONNECT staff.</p>
                    <br></br>
					<h3 align="center">Click here</h3>
                  
				</body>
			</div>
		);
	}
	redirect = () => {
		let path = '/home'
		this.props.history.push(path);
	}
}

export default withRouter(Central);