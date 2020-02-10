import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

class AdminMatch extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <p>Pre-Match Selection Option</p>

                <table style={{width:"50%", margin: "auto"}}>
                    {hasMounted ? (
                        this.state.students.map((val) => {
                            return(
                                <div align="center">
                                    <tr>
                                        <td ><Button style={{width: "200px"}}>{val.name}</Button></td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        Auto
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu style={{'max-height': '350px', 'overflow-y': 'auto'}}>
                                                        {hasMounted ? (
                                                            this.state.projects.map((proj, index) => {
                                                                return(
                                                                    <Dropdown.Item href={`#/action-${index}`}>{proj.name}</Dropdown.Item>
                                                                )
                                                            })) : (
                                                            <p>Loading</p>
                                                        )
                                                        }
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Dropdown>

                                        </td>
                                    </tr>
                                </div>
                            );
                        })) : (
                        <p>Loading</p>
                    )
                    }
                </table>

                <Button>AdminMatch</Button>
            </div>

        );
    }
}

export default AdminMatch;