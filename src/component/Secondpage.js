import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './CSS/Firstpage.css'
import { connect } from 'react-redux';
import { second } from './Redux/Action';

class Secondpage extends Component {
    
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
            Pin_Code: " "
            
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

            Address: this.state.Address,
            Country: this.state.Country,
            City: this.state.City,
            Pin_Code: this.state.Pin_Code
          

        }
        // console.log(emp)
        this.props.add(emp)
    
        this.props.history.push('/third');

    }

    componentDidMount() {
        console.log(this.props.details)
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

            <Form onSubmit={this.handleSubmit} >
                <div className="xyz" >
                    <h2>Accomodation Details</h2>
                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address </Form.Label>
                        <Form.Control  placeholder="address" 
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

                        <Form.Group  controlId="formGridState">
                            <Form.Label>City</Form.Label>
                            <Form.Control 
                             name="City"
                             value={this.state.City}
                             onChange={this.handleChange} />                            
                                                              
                             </Form.Group>

                        <Form.Group  controlId="formGridZip">
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control 
                               name="Pin_Code"
                               value={this.state.Pin_Code}
                               onChange={this.handleChange}/>
                        </Form.Group>              
                    
                       

                     
                                        
                    <Button href="/" className="btn1"  variant="primary" type="submit">  Previous   </Button>
                    <Button  className="btn2" variant="primary" type="submit">   Next </Button>
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
        add: (emp) => dispatch(second(emp))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Secondpage);




