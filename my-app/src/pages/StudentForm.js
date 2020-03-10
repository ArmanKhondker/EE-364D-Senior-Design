import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import RadioButton from "../components/RadioButton";
import LoadingAnimation from "../components/LoadingAnimation";
import '../App.css';
import axios from "axios";

class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: null
        }
    }

    async componentDidMount() {
       await axios.get('http://django-env.emqvqmazrh.us-west-2.elasticbeanstalk.com/api/skills')
           .then(res => {
               console.log(res);
               this.setState({ skills: res.data });
           })
           .catch(err => console.log(err));
    }

    render() {
        let hasMounted = false;
        let {skills} = this.state;
        if(skills !== null) {
            hasMounted = true;
        }
        let CurrentDisplay;
        if(!hasMounted) {
            CurrentDisplay =
                <div>
                    <br/><br/><br/><br/>
                    <LoadingAnimation/>;
                </div>
        } else {
            CurrentDisplay =
                <div className="form">
                    <br/>
                    <br/>
                    <br/>
                    <Form>
                        <Form.Group controlId="nameInput">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="First and Last Name"/>
                        </Form.Group>
                        <Form.Group controlId="phoneInput">
                            <Form.Label>Phone #</Form.Label>
                            <Form.Control type="phone" placeholder="5125558888"/>
                        </Form.Group>
                        <Form.Group controlId="emailInput">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="example@utexas.edu"/>
                        </Form.Group>
                        <Form.Group controlId="linkedinInput">
                            <Form.Label>LinkedIn (preferred, but not required)</Form.Label>
                            <Form.Control type="linkedin"/>
                        </Form.Group>

                        <Form.Label>Why are you interested in working on a project? (Check all that apply </Form.Label>
                        <Form.Group controlId="realWorldExp">
                            <Form.Check label="To gain real world experience"/>
                        </Form.Group>
                        <Form.Group controlId="paidExp">
                            <Form.Check label="To participate in a paid experience"/>
                        </Form.Group>
                        <Form.Group controlId="academicReqExp">
                            <Form.Check
                                label="To fulfill an academic requirement (i.e. capstone, thesis, dissertation"/>
                        </Form.Group>

                        <Form.Label>Identify each of the project categories you are interested in. (Check all that
                            apply)</Form.Label>
                        <Form.Group controlId="research">
                            <Form.Check label="Research"/>
                        </Form.Group>
                        <Form.Group controlId="dataCollection">
                            <Form.Check label="Data Collection"/>
                        </Form.Group>
                        <Form.Group controlId="softwareDevelopment">
                            <Form.Check label="Software Development"/>
                        </Form.Group>
                        <Form.Group controlId="businessIntelligence">
                            <Form.Check label="Business Intelligence"/>
                        </Form.Group>
                        <Form.Group controlId="dataAnalytics">
                            <Form.Check label="Data Analytics"/>
                        </Form.Group>

                        <Form.Group controlId="timeCommit">
                            <Form.Label>Realistically, how much time can you commit per week to working on a
                                project? </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>Less than 5 Hours Per Week</option>
                                <option>5-10 Hours Per Week</option>
                                <option>15-20 Hours Per Week</option>
                                <option>20-30 Hours Per Week</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="intlStudent">
                            <Form.Label>To comply with University rules and regulations, are you an international
                                student?</Form.Label>
                            <Form.Check type="radio" label="Yes"/>
                            <Form.Check type="radio" label="No"/>
                        </Form.Group>
                        <Form.Group controlId="finAid">
                            <Form.Label>Do you currently receive any UT financial aid or fellowships?</Form.Label>
                            <Form.Check type="radio" label="Yes"/>
                            <Form.Check type="radio" label="No"/>
                        </Form.Group>
                        <Form.Group controlId="transport">
                            <Form.Label>Do you have access to transportation?</Form.Label>
                            <Form.Check type="radio" label="Yes"/>
                            <Form.Check type="radio" label="No"/>
                        </Form.Group>
                        <Form.Group controlId="flexible">
                            <Form.Label>Do you need flexible work hours?</Form.Label>
                            <Form.Check type="radio" label="Yes"/>
                            <Form.Check type="radio" label="No"/>
                        </Form.Group>
                        <Form.Group controlId="flexible">
                            <Form.Label>Do you need the ability to work remotely?</Form.Label>
                            <Form.Check type="radio" label="Yes"/>
                            <Form.Check type="radio" label="No"/>
                        </Form.Group>

                        <Form.Group controlId="degree">
                            <Form.Label>Which degree program are you currently enrolled in? </Form.Label>
                            <Form.Check type="radio" label="Master of Public Affair"/>
                            <Form.Check type="radio" label="Master of Global Policy Studies"/>
                            <Form.Check type="radio" label="DC Concentration (MPAFF/MGPS)"/>
                            <Form.Check type="radio" label="Ph.D. in Public Policy"/>
                            <Form.Check type="radio" label="Nonprofit Portfolio Program"/>
                            <Form.Check type="radio" label="Public Health"/>
                            <Form.Check type="radio" label="Educational Psychology"/>
                            <Form.Check type="radio" label="Social Work"/>
                            <Form.Check type="radio" label="Other"/>
                        </Form.Group>

                        <Form.Group controlId="CoursesTaken1">
                            <Form.Label>Identify each of the following courses you have taken/completed. </Form.Label>
                            <Form.Check label="Consulting For Social Impact (PA 388L-60235"/>
                            <Form.Check
                                label="Program Evaluation for Nonprofit, Public, & Social Impact Initiatives (PA 397C-59534)"/>
                            <Form.Check label="Nonprofit Management & Strategy (PA 388L - 60900)"/>
                            <Form.Check label="Program Evaluation (SW N393T28)"/>
                            <Form.Check label="Nonprofit Management (SW 393T18)"/>
                            <Form.Check label="Program Evaluation: Models & Techniques (EDP 380D)"/>
                            <Form.Check label="Measurement Theory (PHD 1130L)"/>
                            <Form.Check label="Program Evaluation (PHWM 1120L)"/>
                        </Form.Group>


                        <Form.Group controlId="coursesTaken2">
                            <Form.Label>Identify each of the following courses you have taken/completed. </Form.Label>
                            <Form.Check label="Data Management & Research Life Cycle (PA 397C-60372)"/>
                            <Form.Check
                                label="Linked Open Data & Computational Social Science Methods (PA 397C-59530)"/>
                            <Form.Check label="Data Visualization, Statistics, and Econometrics for Policy Analysis,
                    Using the Python Data Science Platform (PA 397C-60380)"/>
                            <Form.Check label="Statistical Analysis & Learning (PA 397C-60400)"/>
                            <Form.Check label="Data Analysis/Simulation in R (EDP 380C)"/>
                            <Form.Check label="Advanced Statistical Modeling (EDP 381D)"/>
                            <Form.Check label="Introduction to Data Science (PHM 1975L)"/>
                            <Form.Check label="Fundamentals of Data Analysis for Behavioral Science (PHD 1121L)"/>
                            <Form.Check label="Advanced Quantitative Analysis for Behavioral Science (PHD 1121L)"/>
                            <Form.Check label="Structural Equation Modeling (SW 388RII or EDP 380C)"/>
                        </Form.Group>

                        <Form.Group controlId="experience">
                            <Form.Label>Over the past 5 years, approximately how much experience have you had working or
                                directly volunteering with nonprofit organizations? </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>No Experience</option>
                                <option>Less than 6 months</option>
                                <option>6-12 Months</option>
                                <option>More than 1 year</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="guidanceSkill">
                            <Form.Label>How skilled are you with leading and managing a project from start to finish
                                with little guidance from your client? </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Skilled at All</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Skilled</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Label>Please Rate your Experience in the following Technical Skills: </Form.Label>

                        <Form.Group controlId="techSkills">
                            <Form.Label> HTML </Form.Label>
                            <RadioButton name="HTML"/>
                        </Form.Group>


                        <Form.Group controlId="techSkills">
                            <Form.Label> Python </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="techSkills">
                            <Form.Label> Java </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="techSkills">
                            <Form.Label> Tableau </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="techSkills">
                            <Form.Label> Data Analysis </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="techSkills">
                            <Form.Label> Database Design </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="techSkills">
                            <Form.Label> Logic Modeling </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="techSkills">
                            <Form.Label> Outcomes Definition </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="techSkills">
                            <Form.Label> Measurement Strategy </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="techSkills">
                            <Form.Label> Data Visualization </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="techSkills">
                            <Form.Label> Data Collection/Adminstration </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="techSkills">
                            <Form.Label> Survey Design </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="techSkills">
                            <Form.Label> Microsoft Office Suite </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="sectionTitle">
                            <Form.Label>Please Rate your Experience in the following Professional Skills: </Form.Label>

                        </Form.Group>
                        <Form.Group controlId="profSkills">
                            <Form.Label> Communication </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="profSkills">
                            <Form.Label> Time-Management </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="profSkills">
                            <Form.Label> Decision-Making </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="profSkills">
                            <Form.Label> Leadership </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="profSkills">
                            <Form.Label> Teamwork </Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>1 - Not Experienced</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5 - Extremely Experienced</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="profSkills">
                            <Form.Label>Do you have other relevant skills that may be helpful for us to know about (i.e.
                                other languages spoken, coding, analytical software, professional skills, etc.)? - List
                                them here!</Form.Label>
                            <Form.Control type="profList"/>
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
                {CurrentDisplay}
            </div>
        );
    }
}

            export default StudentForm;
        
 
 
