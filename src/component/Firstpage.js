import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import './CSS/Firstpage.css';
import { last, next } from './Redux/Action';
import { connect } from 'react-redux';



class Firstpage extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            firstname: " ",
            lastname: " ",
            dob: " ",
            marital_status: ""
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {

        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
        
    }

    handleSubmit(e) {
        e.preventDefault()
        // console.log(this.state)
            
        let emp = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            dob: this.state.dob,
            marital_status: this.state.marital_status,

        }
        console.log(emp)
        this.props.add(emp)
    
        this.props.history.push('/second');
        

    }

    componentDidMount() {
        console.log(this.props.details)
        this.setState({firstname:this.props.details.firstname})
        this.setState({lastname:this.props.details.lastname})
        this.setState({dob:this.props.details.dob})
        this.setState({marital_status:this.props.details.marital_status})
    }

    componentDidUpdate(){
       

    }


    render() {
        
        return (
            <div className="abc" align="center" >
                <div className="xyz" >
                    <Form onSubmit={this.handleSubmit}  >

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
                       
                     
                            <Button  className="btn0" type="submit"  >Next</Button>
                        


                    </Form>
                </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        details: state.formReducer.form_one
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (emp) => dispatch(next(emp))
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Firstpage);


