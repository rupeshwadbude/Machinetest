
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


class Lastpage extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            show: true

        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(e) {

        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })

    }

    alert(){
        alert( "Success")       
            }
            
    componentDidMount() {
        console.log(this.props.details)


        this.setState({ firstname: this.props.details.firstname })
        this.setState({ lastname: this.props.details.lastname })
        this.setState({ dob: this.props.details.dob })
        this.setState({ marital_status: this.props.details.marital_status })
        this.setState({ Address: this.props.details.Address })
        this.setState({ Country: this.props.details.Country })
        this.setState({ City: this.props.details.City })
        this.setState({ Pin_Code: this.props.details.Pin_Code })
        this.setState({ projectname: this.props.details.projectname })
        this.setState({ Description: this.props.details.Description })
    }


    render() {

        return (
            <div className="abc" align="center" >
                <div className="xyz" >
                    <Form onSubmit={this.alert}  >

                        <h2>Basic Details</h2>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>FirstName:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Firstname"
                                name="firstname"
                                value={this.state.firstname}
                                onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                            <Form.Label>LastName:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Lastname"
                                name="lastname"
                                value={this.state.lastname}
                                onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formDateOfBirth">
                            <Form.Label>Date Of Birth:</Form.Label>
                            <Form.Control type="date" placeholder="Enter Date of birth"
                                name="dob"
                                value={this.state.dob}
                                onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicMaritalStatus" >
                            <Form.Label>Marital Status</Form.Label>
                            <Form.Control as="select"
                                name="marital_status"
                                onChange={this.handleChange}
                                value={this.state.marital_status}>
                                <option></option>
                                <option>Single</option>
                                <option>Married</option>
                                <option>Widowed</option>
                                <option>Separated</option>
                                <option>Divorced</option>
                            </Form.Control>
                        </Form.Group>
                        <h2>Accomodation Details</h2>
                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address </Form.Label>
                            <Form.Control placeholder="address"
                                name="Address"
                                value={this.state.Address}
                                onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group controlId="formGridCity">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                name="Country"
                                value={this.state.Country}
                                onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formGridState">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name="City"
                                value={this.state.City}
                                onChange={this.handleChange} />

                        </Form.Group>

                        <Form.Group controlId="formGridZip">
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control
                                name="Pin_Code"
                                value={this.state.Pin_Code}
                                onChange={this.handleChange} />
                        </Form.Group>




                        <h2>Project Details</h2>
                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Project Name </Form.Label>
                            <Form.Control placeholder="project name"
                                name="projectname"
                                value={this.state.projectname}
                                onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group controlId="formGridCity">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea"
                                name="Description"
                                value={this.state.Description}
                                onChange={this.handleChange} />

                        </Form.Group>

                        
                              {
                                this.state.show ?
                        <Button href="/third" className="btn3" variant="primary" type="submit">  Previous   </Button>
                        :null
                    }
                            

                        

                        <Button  className="btn2" type="submit" onClick={()=>this.setState(!this.state.show)}  >Submit</Button>



                    </Form>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        details: state.formReducer.form_one

    }
}


export default connect(mapStateToProps)(Lastpage);
