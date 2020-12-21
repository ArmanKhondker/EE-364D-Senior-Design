import React, { Component } from 'react';
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'
import '../styling/Admin.css';
import Form from 'react-bootstrap/Form';
import RadioButton from "./RadioButton";
import update from 'react-addons-update';
import '../App.css';
import axios from "axios";


class AdminStudents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: props.students,
            modalShow: [],
            first_name: "",
            last_name: "",
            eid: "",
            phone:  "",
            email: "",
            linkedIn: "",
            intentions: [],
            interests: [],
            time_commitment: "",
            transportation: null,
            flexible_hours: null,
            work_remotely: null,
            degree: "",
            tech_courses: [],
            prof_courses: [],
            tech_skills: [],
            prof_skills: [],
            other_skills: "",
            submit_text: "",
        }


        this.clearData = this.clearData.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.renderSurvey = this.renderSurvey.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEID = this.handleEID.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleLinkedin = this.handleLinkedin.bind(this);
        this.handleIntentions = this.handleIntentions.bind(this);
        this.handleInterests = this.handleInterests.bind(this);
        this.handleTimeCommit = this.handleTimeCommit.bind(this);
        this.handleTransportation = this.handleTransportation.bind(this);
        this.handleFlexibleHours = this.handleFlexibleHours.bind(this);
        this.handleWorkRemotely = this.handleWorkRemotely.bind(this);
        this.handleDegree = this.handleDegree.bind(this);
        this.handleTechCourses = this.handleTechCourses.bind(this);
        this.handleProfCourses = this.handleProfCourses.bind(this);
        this.handleTechSkills = this.handleTechSkills.bind(this);
        this.handleProfSkills = this.handleProfSkills.bind(this);
        this.handleOtherSkills = this.handleOtherSkills.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.isDict = this.isDict.bind(this);

    }

    clearData() {
      this.setState(() => ({
        students: this.props.students,
        currentCohort: "",
        modalShow: [],
        first_name: "",
        last_name: "",
        eid: "",
        phone:  "",
        email: "",
        linkedIn: "",
        intentions: [],
        interests: [],
        time_commitment: "",
        transportation: null,
        flexible_hours: null,
        work_remotely: null,
        degree: "",
        tech_courses: [],
        prof_courses: [],
        tech_skills: [],
        prof_skills: [],
        other_skills: "",
        submit_text: "",
  		}));
    }

    handleFirstName(e) {
  		var writtenText = e.target.value
  		this.setState(() => ({
  			first_name: writtenText
  		}));
  	}

    handleLastName(e) {
  		var writtenText = e.target.value
  		this.setState(() => ({
  			last_name: writtenText
  		}));
  	}

    handleEID(e) {
      var writtenText = e.target.value
  		this.setState(() => ({
  			eid: writtenText
  		}));
    }

    handlePhone(e) {
      var writtenText = e.target.value
  		this.setState(() => ({
  			phone: writtenText
  		}));
    }

    handleEmail(e) {
      var writtenText = e.target.value
  		this.setState(() => ({
  			email: writtenText
  		}));
    }

    handleLinkedin(e) {
      var writtenText = e.target.value
  		this.setState(() => ({
  			linkedIn: writtenText
  		}));
    }

    handleIntentions(student, i, e) {
      if (this.state.intentions.length === 0) {
        this.setState(() => ({
          intentions: new Array(Object.keys(student.intentions).length),
        }));
      }
      let answer = e.target.value
      if (answer === "") {
        answer = null
      }
      else {
        answer = (answer === "True" || answer === "true")
      }

      this.setState(update(this.state, {
       intentions: {
         [i] : {
           $set: answer
         }
       }
     }));
    }

    handleInterests(student, i, e) {
      if (this.state.interests.length === 0) {
        this.setState(() => ({
          interests: new Array(Object.keys(student.interests).length),
        }));
      }
      let answer = e.target.value
      if (answer === "") {
        answer = null
      }
      else {
        answer = (answer === "True" || answer === "true")
      }

      this.setState(update(this.state, {
       interests: {
         [i] : {
           $set: answer
         }
       }
     }));
    }

    handleTimeCommit(e) {
  		var tc = e.target.value
  		this.setState(() => ({
  	     time_commitment: tc
  	  }));
  	}

    handleTransportation(e) {
      let answer = e.target.value
      if (answer === "") {
        answer = null
      }
      else {
        answer = (answer === "True" || answer === "true")
      }
      this.setState(() => ({
  			transportation: answer,
  		}));
    }

    handleFlexibleHours(e) {
      let answer = e.target.value
      if (answer === "") {
        answer = null
      }
      else {
        answer = (answer === "True" || answer === "true")
      }
      this.setState(() => ({
  			flexible_hours: answer,
  		}));
    }

    handleWorkRemotely(e) {
      let answer = e.target.value
      if (answer === "") {
        answer = null
      }
      else {
        answer = (answer === "True" || answer === "true")
      }
      this.setState(() => ({
  			work_remotely: answer,
  		}));
    }

    handleDegree(e) {
      var writtenText = e.target.value
  		this.setState(() => ({
  			degree: writtenText
  		}));
    }

    handleTechCourses(student, i, e) {
      if (this.state.interests.length === 0) {
        this.setState(() => ({
          tech_courses: new Array(Object.keys(student.tech_courses).length),
        }));
      }
      let answer = e.target.value
      if (answer === "") {
        answer = null
      }
      else {
        answer = (answer === "True" || answer === "true")
      }

      this.setState(update(this.state, {
       tech_courses: {
         [i] : {
           $set: answer
         }
       }
     }));
    }

    handleProfCourses(student, i, e) {
      if (this.state.interests.length === 0) {
        this.setState(() => ({
          prof_courses: new Array(Object.keys(student.prof_courses).length),
        }));
      }
      let answer = e.target.value
      if (answer === "") {
        answer = null
      }
      else {
        answer = (answer === "True" || answer === "true")
      }

      this.setState(update(this.state, {
       prof_courses: {
         [i] : {
           $set: answer
         }
       }
     }));
    }

    handleTechSkills(student, i, e) {
      if (this.state.tech_skills.length === 0) {
        this.setState(() => ({
          tech_skills: new Array(Object.keys(student.tech_skills).length),
        }));
      }
  		this.setState(update(this.state, {
  			tech_skills: {
  				[i] : {
  					$set: e
  				}
  			}
  		}));
  	}

    handleProfSkills(student, i, e) {
      if (this.state.prof_skills.length === 0) {
        this.setState(() => ({
          prof_skills: new Array(Object.keys(student.prof_skills).length),
        }));
      }
  		this.setState(update(this.state, {
  			prof_skills: {
  				[i] : {
  					$set: e
  				}
  			}
  		}));
  	}

    handleOtherSkills(e) {
      var writtenText = e.target.value
  		this.setState(() => ({
  			other_skills: writtenText
  		}));
    }

    isDict(v) {
      return typeof v==='object' && v!==null && !(v instanceof Array) && !(v instanceof Date);
    }

    async handleUpdate(student, e) {
        this._e = e;
        this.setState(() => ({
  			submit_text: "Updating..."
  		}));
      let submit_dict = {};
      let keys = [
        "first_name",
        "last_name",
        "eid",
        "phone",
        "email",
        "linkedIn",
        "intentions",
        "interests",
        "time_commitment",
        "transportation",
        "flexible_hours",
        "work_remotely",
        "degree",
        "tech_courses",
        "prof_courses",
        "tech_skills",
        "prof_skills",
        "other_skills"
      ]
      let student_keys = Object.keys(student)

      for (let i=0; i<student_keys.length; i++) {
        let s_key = student_keys[i];
        // No need to include id
        if (s_key === "id")
          continue;
        // If the key wasn't in the update options, put the original data in the new dict
        if (!keys.includes(s_key)) {
          submit_dict[s_key] = student[s_key]
          continue;
        }
        // If the data is not a dict, just update it
        if (!this.isDict(student[s_key])) {
          if (this.state[s_key] !== null && this.state[s_key] !== "") {
            submit_dict[s_key] = this.state[s_key];
          }
          else {
            submit_dict[s_key] = student[s_key];
          }
          continue;
        }
        // It was a dict and requires some formatting so it matches the database model
        let student_question_dict = student[s_key];
        let question_keys = Object.keys(student_question_dict);
        let temp_answers={};
        let student_data = this.state[s_key];

        for (let k=0; k<question_keys.length; k++) {
          let q_key = question_keys[k];
          let value = ""
          try {
            value = student_data[k];
          }
          catch(error) {
            value = student_question_dict[q_key];
          }
          if (value !== null && value !== undefined && value !== "") {
            temp_answers[q_key] = value;
          }
          else {
            temp_answers[q_key] = student_question_dict[q_key];
          }
        }
        submit_dict[s_key] = temp_answers;
      }
      submit_dict['unique_id'] = `${submit_dict.eid}-${this.state.currentCohort}`

  		await axios.put(process.env.REACT_APP_API_URL + 'students/'+student['id']+'/', JSON.stringify(submit_dict),
  			{
  				headers: {
  					'content-type': 'application/json',
  				},
  			})
  			.then(res => {
  				console.log(res);
  			})
  			.catch(error => {
  				console.log(error);
  			})


        this.setState(() => ({
    			submit_text: "Submitted"
    		}));
        this.clearData();
    }




    renderSurvey(student) {
      let {first_name, last_name, eid, phone, email, linkedIn, intentions, interests, time_commitment, transportation, flexible_hours, work_remotely, degree, tech_courses, prof_courses, tech_skills, prof_skills, other_skills} = student

      return (
        <div>
          <div className="bold">(Leave the text entry blank for survey value to remain as is)</div>
          <p/>
          <div>Current first name: {first_name}</div>
          <Form.Group controlId="FirstName">
              <Form.Label>Update First Name Here:</Form.Label>
              <Form.Control type="profList" onChange={this.handleFirstName}/>
          </Form.Group>
          <div>Current last name: {last_name}</div>
          <Form.Group controlId="LastName">
              <Form.Label>Update Last Name Here:</Form.Label>
              <Form.Control type="profList" onChange={this.handleLastName}/>
          </Form.Group>
          <div>Current EID: {eid}</div>
          <Form.Group controlId="EID">
              <Form.Label>Update EID Here:</Form.Label>
              <Form.Control type="profList" onChange={this.handleEID}/>
          </Form.Group>
          <div>Current phone number: {phone}</div>
          <Form.Group controlId="Phone">
              <Form.Label>Update Phone Number Here:</Form.Label>
              <Form.Control type="profList" onChange={this.handlePhone}/>
          </Form.Group>
          <div>Current email: {email}</div>
          <Form.Group controlId="Email">
              <Form.Label>Update Email Here:</Form.Label>
              <Form.Control type="profList" onChange={this.handleEmail}/>
          </Form.Group>
          <div>Current LinkedIn: {linkedIn}</div>
          <Form.Group controlId="linkedIn">
              <Form.Label>Update LinkedIn Here:</Form.Label>
              <Form.Control type="profList" onChange={this.handleLinkedin}/>
          </Form.Group>
          <br/>
          {Object.keys(intentions).map((key, index) => {
            return (
              <div>{key}: {String(intentions[key])}
              <Form.Group key={index}>
                  <Form.Label>Update Answer Here:</Form.Label>
                  <Form.Control type="profList" onChange={this.handleIntentions.bind(this, student, index)}/>
              </Form.Group>
            </div>
            )
          })}
          <br/>
          {Object.keys(interests).map((key, index) => {
            return (
              <div>Interested in {key}: {String(interests[key])}
              <Form.Group key={index}>
                  <Form.Label>Update Answer Here:</Form.Label>
                  <Form.Control type="profList" onChange={this.handleInterests.bind(this, student, index)}/>
              </Form.Group>
            </div>
            )
          })}
          <br/>
          <div>Current time commitment: {time_commitment}</div>
          <Form.Group controlId="TimeCommitment">
              <Form.Label>Update Time Commitment Here:</Form.Label>
              <Form.Control required as="select" onChange={this.handleTimeCommit}>
                  <option/>
                  <option>Less than 5 Hours Per Week</option>
                  <option>5-10 Hours Per Week</option>
                  <option>15-20 Hours Per Week</option>
                  <option>20-30 Hours Per Week</option>
              </Form.Control>
          </Form.Group>
          <div>Transportation: {String(transportation)}</div>
          <Form.Group controlId="Transportation">
              <Form.Label>Update Answer Here:</Form.Label>
              <Form.Control type="profList" onChange={this.handleTransportation.bind(this)}/>
          </Form.Group>
          <div>Flexible Hours: {String(flexible_hours)}</div>
          <Form.Group controlId="FlexibleHours">
              <Form.Label>Update Answer Here:</Form.Label>
              <Form.Control type="profList" onChange={this.handleFlexibleHours.bind(this)}/>
          </Form.Group>
          <div>Work Remotely: {String(work_remotely)}</div>
          <Form.Group controlId="WorkRemotely">
              <Form.Label>Update Answer Here:</Form.Label>
              <Form.Control type="profList" onChange={this.handleWorkRemotely.bind(this)}/>
          </Form.Group>
          <div>Degree: {degree}</div>
          <Form.Group controlId="Degree">
              <Form.Label>Update Answer Here:</Form.Label>
              <Form.Control type="profList" onChange={this.handleDegree.bind(this)}/>
          </Form.Group>
          <br/>
          {Object.keys(tech_courses).map((key, index) => {
            return (
              <div>Taken {key}: {String(tech_courses[key])}
              <Form.Group key={index}>
                  <Form.Label>Update Answer Here:</Form.Label>
                  <Form.Control type="profList" onChange={this.handleTechCourses.bind(this, student, index)}/>
              </Form.Group>
            </div>
            )
          })}
          <br/>
          {Object.keys(prof_courses).map((key, index) => {
            return (
              <div>Taken {key}: {String(prof_courses[key])}
              <Form.Group key={index}>
                  <Form.Label>Update Answer Here:</Form.Label>
                  <Form.Control type="profList" onChange={this.handleProfCourses.bind(this, student, index)}/>
              </Form.Group>
            </div>
            )
          })}
          <br/>
          {Object.keys(tech_skills).map((key, index) => {
              return(
                <div>Current {key}: {String(tech_skills[key])}
                  <Form.Group key={index}>
                      <Form.Label>Update Answer Here:</Form.Label>
                      <RadioButton name={key} handleRadio={this.handleTechSkills.bind(this, student, index)}/>
                  </Form.Group>
                </div>
              );
          })}
          <br/>
          {Object.keys(prof_skills).map((key, index) => {
              return(
                <div>Current {key}: {String(prof_skills[key])}
                  <Form.Group key={index}>
                      <Form.Label>Update Answer Here:</Form.Label>
                      <RadioButton name={key} handleRadio={this.handleProfSkills.bind(this, student, index)}/>
                  </Form.Group>
                </div>
              );
          })}
          <br/>
          <div>Other Skills: {other_skills}</div>
          <Form.Group controlId="OtherSkills">
              <Form.Label>Update Answer Here:</Form.Label>
              <Form.Control type="profList" onChange={this.handleOtherSkills.bind(this)}/>
          </Form.Group>
          <Button variant="primary" onClick={this.handleUpdate.bind(this, student)}>
              Update Student Form
          </Button>
          <div>{this.state.submit_text}</div>
      </div>
      )
    }


    componentDidMount() {
        this.setState({ students: this.props.students, modalShow: new Array(this.props.students.length) });

        axios.get(process.env.REACT_APP_API_URL + 'settings/1/')
            .then(res => {
                console.log(res);
                this.setState({
                    currentCohort: res.data.current_cohort
                });
            })
            .catch(err => console.log(err));
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({ students: nextProps.students, modalShow: new Array(nextProps.students.length) });
    }

    handleModal(i, e) {
        this._e = e;
        this.setState(update(this.state, {
       modalShow: {
         [i] : {
           $set: true
         }
       }
     }));
    }

    render(){
        let hasMounted = false;
        if(this.state.students !== null) {
            hasMounted = true;
        }

        return(
            <div>
                <p>Click on a student to edit student survey information</p>
                <p>Please note that you might need to refresh the page in order to view survey updates. </p>
                <table style={{width:"50%", margin: "auto"}}>
                    <tbody className="admin_table">
                        {hasMounted ? (
                            this.state.students.map((student, index) => {
                                return(
                                  <tr key={index}>
                                    <td className="admin_cell">
                                      <div>
                                          <Button onClick={this.handleModal.bind(this, index)}>{student.first_name} {student.last_name}</Button>
                                          <Modal
                                             size="lg"
                                             show={this.state.modalShow[index]}
                                             onHide={() => (
                                              this.clearData.bind(this),
                                              this.setState(update(this.state, {
                                         			 modalShow: {
                                         				[index] : {
                                         					$set: false
                                         				}
                                         		 	}
                                              })))}
                                             aria-labelledby="contained-modal-title-vcenter"
                                             centered
                                         >
                                           <Modal.Header closeButton>
                                             <Modal.Title id="example-custom-modal-styling-title">
                                               {student.first_name} {student.last_name}'s Survey
                                             </Modal.Title>
                                           </Modal.Header>
                                           <Modal.Body>{this.renderSurvey(student)}</Modal.Body>
                                        </Modal>
                                      </div>
                                    </td>
                                  </tr>
                                );
                            })) : (
                            <p>Loading</p>
                        )
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}

export default AdminStudents;
