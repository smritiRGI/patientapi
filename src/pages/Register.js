import React, {Component} from 'react';
import axios from 'axios';
import './register.css';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            dob:"",
            address:"",
            contact:"",
            email:"",
            diagnosis:"",
            appointmentdate:"",
            appointmenttime:""
        }
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleSubmit = event =>{
        event.preventDefault();
        axios.post('http://localhost:5000/api/Patient' , {patient_name:this.state.name,DOB:this.state.dob,
    address:this.state.address,contact:this.state.contact,email:this.state.email,
    diagnosis_reason:this.state.diagnosis, appointment_date:"None",appointment_time:"None"})
    .then(json => {
        console.log("success");
    })
    .catch(error =>{
        console.log(error);
    })
    }

    handleChange(event){
        this.setState({
                [event.target.name]: event.target.value
            });
     }
    
  

    render(){
        return(
        <div>
        <h1>{this.state.name}</h1>
        <form onSubmit={this.handleSubmit}>
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <div className="form-group">
            <label>Patient Name</label>
            <input type="text" className="form-control" name="name" value={this.state.name} onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>DOB</label>
            <input type="date" className="form-control" name="dob" onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" name="address" onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>Contact</label>
            <input type="text" className="form-control" name="contact" onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" name="email" onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>diagnosis</label>
            <input type="text" className="form-control" name="diagnosis" onChange={this.handleChange}/>
            </div>
            <button type="submit">Register</button>
        </form>
      </div>
)}
}

export default Register;