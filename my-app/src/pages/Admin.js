import React, { Component } from 'react';
import '.././App.css';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/Button"
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Nav from "react-bootstrap/Nav";
import AdminHome from "../components/AdminHome";
import AdminStudents from "../components/AdminStudents";
import AdminProjects from "../components/AdminProjects";
import AdminMatch from "../components/AdminMatch";
import AdminResults from "../components/AdminResults";
import Login from "./Login";

class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: null,
			students: null,
			projects: null,
			loaded: false,
			token: null,
			isLoggedIn: false,
		}
	}

	async componentDidMount() {
        await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/matchings')
			.then(res => {
				console.log(res);
				this.setState({ results: res.data });
			});

		await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/students')
			.then(res => {
				console.log(res);
				this.setState({ students: res.data });
			});

		await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/projects')
			.then(res => {
				console.log(res);
				this.setState({ projects: res.data });
			});

		let { results, students, projects } = this.state;

		await results.forEach((result) => {
			let studentName = result.student;
			students.forEach((student) => {
				if(student.name === studentName) {
					result.student_technical = student.technical;
					result.student_professional = student.professional;
					result.student_resume_id = student.resume_id;
					result.student_quadrant = student.quadrant;
					result.student_availability_duration = student.availability_duration;
					result.student_availability_time = student.availability_time;
					result.student_work_factors = student.work_factors;
					result.student_interest_buckets = student.interest_buckets;
				}
			})

			let projectName = result.project_org;
			projects.forEach((project) => {
				if(project.name === projectName) {
					result.project_technical = project.technical;
					result.project_professional = project.professional;
					result.project_primary = project.primary;
					result.project_secondary = project.secondary;
					result.project_quadrant = project.quadrant;
				}
			})
		})

		this.setState({loaded: true})
	}

	handleLogin = async (event) => {
		event.preventDefault();
		console.log(event);
	    let params = {
	    	username: event.target[0].value,
			password: event.target[1].value,
		};
		await axios.post('http://localhost:8000/api-token-auth/', params)
			.then(res => {
				console.log(res);
				if(res.status === 200) {
					this.setState({
						token: res.data,
						isLoggedIn: true
					})
				}
			})
			.catch(error => {
				console.log(error);
				window.alert("Incorrect Username and Password combination.");
			});
	}

	handleLogout = event => {
		event.preventDefault();
		this.setState({isLoggedIn: false});
	}

	render() {
		let hasMounted = false;
		let {students, projects, isLoggedIn} = this.state;
		if(students !== null && projects !== null) {
			hasMounted = true;
		}
		let CurrentDisplay;
		if(!isLoggedIn) {
			CurrentDisplay = <Login handleLogin={this.handleLogin.bind(this)}/>
		} else {
			if(hasMounted) {
				CurrentDisplay =
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<Row>
						<Col sm={3}>
							<Nav variant="pills" className="flex-column">
								<Nav.Item>
									<Nav.Link eventKey="first">Home</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Students</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Projects</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="fourth">Match</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="fifth">Results</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<AdminHome handleLogout={this.handleLogout.bind(this)}/>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<AdminStudents students={this.state.students}/>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<AdminProjects projects={this.state.projects}/>
								</Tab.Pane>
								<Tab.Pane eventKey="fourth">
									<AdminMatch students={this.state.students} projects={this.state.projects}/>
								</Tab.Pane>
								<Tab.Pane eventKey="fifth">
									<AdminResults students={this.state.students} projects={this.state.projects} results={this.state.results}  />
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>;
			} else {
				CurrentDisplay = <p>Loading</p>;
			}
		}

		return (
			<div align="center" className="App">
				<br/>
				<br/>
				{CurrentDisplay}
			</div>
		);
	}
}

export default Admin;