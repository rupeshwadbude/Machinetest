import React, { Component } from 'react';
import { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './CSS/Firstpage.css';
import { connect } from 'react-redux';
import {third} from './Redux/Action'


class thirdpage extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            firstname: " ",
            lastname: " ",
            dob: " ",
            marital_status: "",
            Address: " ",
            Country: " ",
            City:   " ",
            Pin_Code: " ",
            projectname: " ",
            Description: " ",
            
          

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
           
            Address: this.state.Address,
            Country: this.state.Country,
            City: this.state.City,
            Pin_Code: this.state.Pin_Code,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            dob: this.state.dob,
            marital_status: this.state.marital_status,

          
            projectname: this.state.projectname,
            Description: this.state.Description,
           


        }
        // console.log(emp)
        this.props.add(emp)

        this.props.history.push('/last');

    }

    componentDidMount() {
        console.log(this.props.details)
        this.setState({ projectname: this.props.details.projectname })
        this.setState({ Description: this.props.details.Description })
       
        this.setState({Address:this.props.details.Address})
        this.setState({Country:this.props.details.Country})
        this.setState({City:this.props.details.City})
        this.setState({Pin_Code:this.props.details.Pin_Code})
        this.setState({firstname:this.props.details.firstname})
        this.setState({lastname:this.props.details.lastname})
        this.setState({dob:this.props.details.dob})
        this.setState({marital_status:this.props.details.marital_status})

      
      

    }


    render() {


        return (
            <div className="abc" align="center">

                <Form onSubmit={this.handleSubmit}>
                    <div className="xyz" >
                        <h2>Project Details</h2>
                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Project Name </Form.Label>
                            <Form.Control placeholder="project name"
                                name="projectname"
                                value={this.state.projectname}
                                onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group  controlId="formGridCity">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea"
                               name="Description"
                               value={this.state.Description}
                               onChange={this.handleChange}   />
                    
                        </Form.Group>
                     
                  
                        
                        
                    <Button href="/second" className="btn1" variant="primary" type="submit">  Previous   </Button>
              
                        <Button className="btn2" variant="primary" type="submit" >  Next  </Button>
                    </div>
                </Form>



            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        details: state.formReducer.form_one
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (emp) => dispatch(third(emp))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(thirdpage);


