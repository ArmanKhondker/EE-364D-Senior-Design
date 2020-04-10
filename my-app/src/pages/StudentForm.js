
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck'
import FormFile from 'react-bootstrap/FormFile'
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import RadioButton from "../components/RadioButton";
import LoadingAnimation from "../components/LoadingAnimation";
import update from 'react-addons-update';
import '../App.css';
import axios from "axios";

class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
			phoneInput: "",
			firstNameInput: "",
			lastNameInput: "",
			eidInput: "",
			emailInput: "",
			linkedinInput: "",
			resumeInput: "",
			uploading: false,
			timeCommit: "",
			intentionOptions: ["To gain real world experience", "To participate in a paid experience", "To fulfill an academic requirement (i.e. capstone, thesis, dissertation"],
			interestOptions: ["Research", "Data Collection", "Software Development", "Business Intelligence", "Data Analytics"],
			logisticQuestions: ["To comply with University rules and regulations, are you an international student?", "Do you currently receive any UT financial aid or fellowships?", "Do you have access to transportation?", "Do you need flexible work hours?", "Do you need the ability to work remotely?"],
			degreeOptions: ["Master of Public Affair", "Master of Global Policy Studies", "DC Concentration (MPAFF/MGPS)", "Ph.D. in Public Policy", "Nonprofit Portfolio Program", "Public Health", "Educational Psychology", "Social Work", "Other"],
			logisticInputs: [],
			logisticFlags: [],
			intentionInputs: [],
			interestInputs: [],
			courseQuestions: ["Data Visualization, Statistics, and Econometrics for Policy Analysis, Using the Python Data Science Platform (PA 397C-60380)", "Data Analysis/Simulation in R (EDP 380C)", "Advanced Statistical Modeling (EDP 381D)"],
			techCourseOptions: [],
			techCourseInputs: [],
            profCourseOptions: [],
			profCourseInputs: [],
			decisionData: [],
			degreeInputs:[],
			degreeInput: "",
			degreeOtherInput: "",
			experienceQuestions:["Over the past 5 years, approximately how much experience have you had working or directly volunteering with nonprofit organizations?"],
			experienceInputs: [],
			techSkillOptions: [],
			techSkillInputs: [],
			profSkillOptions: [],
			profSkillInputs: [],
			extraSkills: ""
        }

		this.handlePhone = this.handlePhone.bind(this);
		this.handleFirstName = this.handleFirstName.bind(this);
		this.handleLastName = this.handleLastName.bind(this);
		this.handleEID = this.handleEID.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleLinkedin = this.handleLinkedin.bind(this);
		this.handleResumeUpload = this.handleResumeUpload.bind(this);
		this.handleTimeCommit = this.handleTimeCommit.bind(this);
		this.handleIntentions = this.handleIntentions.bind(this);
		this.handleInterest = this.handleInterest.bind(this);
		this.handleDegreeOption = this.handleDegreeOption.bind(this);
		this.handleLogisticQuestions = this.handleLogisticQuestions.bind(this);
		this.handleTechCourseInputs = this.handleTechCourseInputs.bind(this);
		this.handleProfCourseInputs = this.handleProfCourseInputs.bind(this);
		this.handleExperienceQuestions = this.handleExperienceQuestions.bind(this);
		this.handleTechSkills = this.handleTechSkills.bind(this);
		this.handleExtraSkills = this.handleExtraSkills.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }

	handlePhone(e) {
		var num = e.target.value;
		this.setState(state => ({
		  phoneInput: num
		}));
	}

	handleFirstName(e) {
		var name = e.target.value;
		this.setState(state => ({
		  firstNameInput: name
		}));
	}

	handleEmail(e) {
		var email = e.target.value;
		this.setState(state => ({
			emailInput: email
		}));
	}

	handleLinkedin(e) {
		var li = e.target.value;
		this.setState(state => ({
			linkedinInput: li
		}));
	}

	handleLastName(e) {
		var name = e.target.value;
		this.setState(state => ({
		  lastNameInput: name
		}));
	}

	handleEID(e) {
		this.setState(({
			eidInput: e.target.value
		}));
	}

	handleResumeUpload(e) {
		this.setState({ uploading: true })
		const files = Array.from(e.target.files)
		const formData = new FormData()

		this.setState({
			uploading: false,
			resumeInput: files[0]
		})
		// files.forEach((file, i) => {
	//   formData.append(i, file)
	// })
		// fetch(`${API_URL}/image-upload`, {
	//   method: 'POST',
	//   body: formData
	// })
	// .then(res => res.json())
	// .then(images => {
	//   this.setState({
	//     uploading: false,
	//     images
	//   })
	// })
	}

	handleTimeCommit(e) {
		var tc = e.target.value
		this.setState(state => ({
	  timeCommit: tc
	}));
	}

	handleIntentions(i, e) {
		this.setState(update(this.state, {
			intentionInputs: {
				[i] : {
					$set: e.target.checked
				}
			}
		}));
	}

	handleInterest(i, e) {
		this.setState(update(this.state, {
			interestInputs: {
				[i] : {
					$set: e.target.checked
				}
			}
		}));
	}

	handleDegreeOption(i, e) {
		var formerCheck = -1;
		if (e.target.checked) {
			var k=0;
			for (k; k<this.state.degreeInputs.length; k++) {
				if (this.state.degreeInputs[k] === true && k !== i)
					formerCheck=k;
			}
		}
		// Former check is the previously checked box index
		if (formerCheck === -1) {
			this.setState(update(this.state, {
				degreeInputs: {
					[i] : {
						$set: e.target.checked
					}
				}
			}));
		}
		// If a different box was checked, uncheck it
		else {
			this.setState(update(this.state, {
				degreeInputs: {
					[i] : {
						$set: e.target.checked
					},
					[formerCheck] : {
						$set: false
					}
				}
			}));
		}
		// Also update actual degree option chosen
		if (e.target.checked) {
			this.setState(state => ({
				degreeOption: this.state.degreeOptions[i].name
		}));
		}
	}

	handleLogisticQuestions(i, choice, e) {
		var pick=false;
		if (choice === 0)
			pick = true;
		this.setState(update(this.state, {
			logisticInputs: {
				[i] : {
					$set: pick
				}
			},
			logisticFlags: {
				[i] : {
					$set: true
				}
			}
		}));
	}

	handleTechCourseInputs(i, e) {
		this.setState(update(this.state, {
			techCourseInputs: {
				[i] : {
					$set: e.target.checked
				}
			}
		}));
	}

	handleProfCourseInputs(i, e) {
		this.setState(update(this.state, {
			profCourseInputs: {
				[i] : {
					$set: e.target.checked
				}
			}
		}));
	}

	handleExperienceQuestions(i, e) {
		this.setState(update(this.state, {
			experienceInputs: {
				[i] : {
					$set: e.target.value
				}
			}
		}));
	}

	handleTechSkills(i, e) {
		this.setState(update(this.state, {
			techSkillInputs: {
				[i] : {
					$set: e
				}
			}
		}));
	}

	handleProfSkills(i, e) {
		this.setState(update(this.state, {
			profSkillInputs: {
				[i] : {
					$set: e
				}
			}
		}));
	}

	handleExtraSkills(e) {
		var writtenText = e.target.value
		this.setState(state => ({
			extraSkills: writtenText
		}));
	}

    async componentDidMount() {
		// await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/skills')
		// .then(res => {
		//    console.log(res);
		//    this.setState({
		// 					 techSkills: res.data,
		// 					 decisionData: new Array(res.data.length),
		// 					 intentionData: new Array(this.state.intentionOptions.length),
		// 					 interestInput: new Array(this.state.interestOptions.length),
		// 					 degreeInputs: new Array(this.state.degreeOptions.length),
		// 					 logisticInputs: new Array(this.state.logisticQuestions.length),
		// 					 logisticFlags: new Array(this.state.logisticQuestions.length),
		// 					 courseInputs: new Array(this.state.courseQuestions.length),
		// 					 experienceInputs: new Array(this.state.experienceQuestions.length)
		// 			   });
		// })
		// .catch(err => console.log(err));

		await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/intentions')
			.then(res => {
				console.log(res);
				this.setState({
					intentionOptions: res.data,
                    intentionInputs: new Array(res.data.length),
				});
			})
			.catch(err => console.log(err));

		await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/interests')
			.then(res => {
				console.log(res);
				this.setState({
					interestOptions: res.data,
                    interestInputs: new Array(res.data.length),
				});
			})
			.catch(err => console.log(err));

		await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/logistics')
			.then(res => {
				console.log(res);
				this.setState({
					logisticQuestions: res.data,
					logisticInputs: new Array(res.data.length),
				});
			})
			.catch(err => console.log(err));

		await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/degrees')
			.then(res => {
				console.log(res);
				this.setState({
					degreeOptions: res.data,
                    degreeInputs: new Array(res.data.length),
				});
			})
			.catch(err => console.log(err));

		await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/experiences')
			.then(res => {
				console.log(res);
				this.setState({
					experienceQuestions: res.data,
					experienceInputs: new Array(res.data.length)
				});
			})
			.catch(err => console.log(err));

		await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/tech-courses')
			.then(res => {
				console.log(res);
				this.setState({
					techCourseOptions: res.data,
					techCourseInputs: new Array(res.data.length),
				});
			})
			.catch(err => console.log(err));

		await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/prof-courses')
			.then(res => {
				console.log(res);
				this.setState({
					profCourseOptions: res.data,
					profCourseInputs: new Array(res.data.length),
				});
			})
			.catch(err => console.log(err));


		await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/tech-skills')
			.then(res => {
				console.log(res);
				this.setState({
					techSkillOptions: res.data,
					techSkillInputs: new Array(res.data.length),
				});
			})
			.catch(err => console.log(err));

		await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/prof-skills')
			.then(res => {
				console.log(res);
				this.setState({
					profSkillOptions: res.data,
					profSkillInputs: new Array(res.data.length),
				});
			})
			.catch(err => console.log(err));
	}

	handleSubmit() {
		var {phoneInput} = this.state;
		var {firstNameInput} = this.state;
		var {lastNameInput} = this.state;
		var {emailInput} = this.state;
		var {linkedinInput} = this.state;
		var {resumeInput} = this.state;

		var {intentionOptions} = this.state;
		var {intentionData} = this.state;
		var {interestOptions} = this.state;
		var {interestInputs} = this.state;
		var {timeCommit} = this.state;

		var {logisticQuestions} = this.state;
		var {logisticInputs} = this.state;

		var {degreeOptions} = this.state;
		var {degreeOtherInput} = this.state;

		var {courseQuestions} = this.state;
		var {courseInputs} = this.state;

		var {experienceQuestions} = this.state;
		var {experienceInputs} = this.state;

		var {extraSkills} = this.state;

		var {techSkills, profSkills} = this.state;
		var {decisionData} = this.state;



	}

    render() {
        let hasMounted = false;
        let {techSkillOptions} = this.state;
        if(this.state.profSkillOptions !== null) {
            hasMounted = true;
        }
        let CurrentDisplay;
        if(!hasMounted) {
            CurrentDisplay =
                <div>
                    <LoadingAnimation/>;
                </div>
        } else {
            CurrentDisplay =
                <div className="form">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="nameInput">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required value={this.state.firstNameInput} onChange={this.handleFirstName} type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required value={this.state.lastNameInput} onChange={this.handleLastName} type="text"/>
                        </Form.Group>
						<Form.Group>
							<Form.Label>EID</Form.Label>
							<Form.Control required value={this.state.eidInput} onChange={this.handleEID} type="text"/>
						</Form.Group>
						<Form.Group controlId="phoneInput">
							<Form.Label>Phone #</Form.Label>
                            <Form.Control required type="tel" value={this.state.phoneInput} onChange={this.handlePhone} placeholder="5125558888"/>
                        </Form.Group>
                        <Form.Group controlId="emailInput">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" value={this.state.emailInput} onChange={this.handleEmail} placeholder="example@utexas.edu"/>
                        </Form.Group>
                        <Form.Group controlId="linkedinInput">
                            <Form.Label>LinkedIn (preferred, but not required)</Form.Label>
                            <Form.Control type="text" value={this.state.linkedinInput} onChange={this.handleLinkedin}/>
                        </Form.Group>
						<div className="mb-3">
							<Form.File id="resumeInput">
							  <Form.File.Label>Please upload a PDF of your resume.</Form.File.Label>
							  <Form.File.Input required accept=".pdf,.PDF" onChange={this.handleResumeUpload}/>
									{this.state.uploading ? <p>Uploading...</p> : <p></p>}
							</Form.File>
						</div>

						<br></br>

						<Form.Label>Why are you interested in working on a project? (Check all that apply </Form.Label>
							{this.state.intentionOptions.map((option, index) => {
								return (
									<Form.Group key={index}>
											<Form.Check label={option.name} onChange={this.handleIntentions.bind(this, index)}/>
									</Form.Group>
								)
							})}

                        <Form.Label>Identify each of the project categories you are interested in. (Check all that
                            apply)</Form.Label>
								{this.state.interestOptions.map((option, index) => {
		                            return(
										<Form.Group key={index}>
												<Form.Check label={option.name} onChange={this.handleInterest.bind(this, index)}/>
										</Form.Group>
									)
								})}

                        <Form.Group controlId="timeCommit">
                            <Form.Label>Realistically, how much time can you commit per week to working on a
                                project? </Form.Label>
                            <Form.Control required as="select" onChange={this.handleTimeCommit}>
                                <option></option>
                                <option>Less than 5 Hours Per Week</option>
                                <option>5-10 Hours Per Week</option>
                                <option>15-20 Hours Per Week</option>
                                <option>20-30 Hours Per Week</option>
                            </Form.Control>
                        </Form.Group>

						<br></br>

						{this.state.logisticQuestions.map((question, index) => {
							if (this.state.logisticFlags[index]) {
								return (
									<Form.Group key={index}>
										<Form.Label>{question.name}</Form.Label>
										<Form.Check type="Radio" label="Yes" checked={this.state.logisticInputs[index]} onChange={this.handleLogisticQuestions.bind(this, index, 0)}/>
										<Form.Check type="Radio" label="No" checked={!this.state.logisticInputs[index]} onChange={this.handleLogisticQuestions.bind(this, index, 1)}/>
									</Form.Group>
								)
							}
							else {
								return (
									<Form.Group key={index}>
										<Form.Label>{question.name}</Form.Label>
										<Form.Check type="Radio" label="Yes" checked={false} onChange={this.handleLogisticQuestions.bind(this, index, 0)}/>
										<Form.Check type="Radio" label="No" checked={false} onChange={this.handleLogisticQuestions.bind(this, index, 1)}/>
									</Form.Group>
								)
							}
						})}

                        <Form.Group controlId="degree">
                            <Form.Label>Which degree program are you currently enrolled in?</Form.Label>
								{this.state.degreeOptions.map((option, index) => {
									return(
										<Form.Group key={index}>
											<Form.Check type="Radio" label={option.name} checked={this.state.degreeInputs[index]} onChange={this.handleDegreeOption.bind(this, index)}/>
										</Form.Group>
									)
								})}
                        </Form.Group>
						<Form.Group controlId="CoursesTaken">
							<Form.Label>Identify each of the following technical courses you have taken/completed. </Form.Label>
								{this.state.techCourseOptions.map((course, index) => {
									if (index % 10 === 0 && index > 0) {
										return (
											<div>
												<br></br>
												<Form.Label>Identify each of the following courses you have taken/completed. </Form.Label>
												<Form.Check label={course.name + " " + course.courseId} onChange={this.handleTechCourseInputs.bind(this, index)}/>
											</div>
									  )
								 }
								 else
									return (
										<Form.Check label={course.name + ' ' + course.courseId} onChange={this.handleTechCourseInputs.bind(this, index)}/>
								 )
								})}
						</Form.Group>
						<Form.Group controlId="CoursesTaken">
							<Form.Label>Identify each of the following professional courses you have taken/completed. </Form.Label>
							{this.state.profCourseOptions.map((course, index) => {
								if (index % 10 === 0 && index > 0) {
									return (
										<div>
											<br></br>
											<Form.Label>Identify each of the following courses you have taken/completed. </Form.Label>
											<Form.Check label={course.name + " " + course.courseId} onChange={this.handleProfCourseInputs.bind(this, index)}/>
										</div>
									)
								}
								else
									return (
										<Form.Check label={course.name + ' ' + course.courseId} onChange={this.handleProfCourseInputs.bind(this, index)}/>
									)
							})}
						</Form.Group>
						<Form.Group controlId="experience">
							{this.state.experienceQuestions.map((question, index) => {
								return(
									<Form.Group key={index}>
										<Form.Label>{question.name}</Form.Label>
										<Form.Control required as="select" onChange={this.handleExperienceQuestions.bind(this,index)}>
											<option></option>
											<option>No Experience</option>
											<option>Less than 6 months</option>
											<option>6-12 Months</option>
											<option>More than 1 year</option>
										</Form.Control>
									</Form.Group>
								)
							})}
						</Form.Group>

                        <Form.Label>Please rate your experience in the following technical skills using the scale below:</Form.Label>
						<br/>
						<div>1: No Experience </div>
						<div>2: Can Learn		</div>
						<div>3: Slightly Experienced</div>
						<div>4: Experienced	</div>
						<div>5: Extremely Experienced </div>
						<br/>
                        {techSkillOptions.map((skill, index) => {
                            let formattedSkill = skill.name.replace(/\s+/g, '');
                            return(
                                <Form.Group key={index}>
                                    <Form.Label>{skill.name}</Form.Label>
                                    <RadioButton name={formattedSkill} handleRadio={this.handleTechSkills.bind(this, index)}/>
                                </Form.Group>
                            );
                        })}



						<Form.Label>Please rate your experience in the following professional skills using the scale below:</Form.Label>
						<br/>
						<div>1: No Experience </div>
						<div>2: Slightly Experienced	</div>
						<div>3: Can Learn	</div>
						<div>4: Experienced	</div>
						<div>5: Extremely Experienced </div>
						<br/>
						{this.state.profSkillOptions.map((skill, index) => {
							let formattedSkill = skill.name.replace(/\s+/g, '');
							return(
								<Form.Group key={index}>
									<Form.Label>{skill.name}</Form.Label>
									<RadioButton name={formattedSkill} handleRadio={this.handleProfSkills.bind(this, index)}/>
								</Form.Group>
							);
						})}
						{/*<Form.Group>*/}
						{/*	<Form.Label>Communication</Form.Label>*/}
						{/*	<RadioButton name="Communication"/>*/}
						{/*</Form.Group>*/}
                        {/*<Form.Group>*/}
                        {/*    <Form.Label>Time Management</Form.Label>*/}
                        {/*    <RadioButton name="TimeManagement"/>*/}
                        {/*</Form.Group>*/}
                        {/*<Form.Group>*/}
                        {/*    <Form.Label>Decision Making</Form.Label>*/}
                        {/*    <RadioButton name="DecisionMaking"/>*/}
                        {/*</Form.Group>*/}
                        {/*<Form.Group>*/}
                        {/*    <Form.Label>Leadership</Form.Label>*/}
                        {/*    <RadioButton name="Leadership"/>*/}
                        {/*</Form.Group>*/}
                        {/*<Form.Group>*/}
                        {/*    <Form.Label>Teamwork</Form.Label>*/}
                        {/*    <RadioButton name="Teamwork"/>*/}
                        {/*</Form.Group>*/}

                        <Form.Group controlId="ExtraSkills">
                            <Form.Label>Do you have other relevant skills that may be helpful for us to know about (i.e.
                                other languages spoken, coding, analytical software, professional skills, etc.)? - List
                                them here!</Form.Label>
                            <Form.Control type="profList" onChange={this.handleExtraSkills}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <br/>
                </div>
        }

        return (
            <div>
                <br/><br/><br/><br/>
                {CurrentDisplay}
            </div>
        );
    }
}

export default StudentForm;
