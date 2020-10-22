import React, {Component} from 'react';
import axios from 'axios';

class GetPatientComponent extends Component{
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
    }

    handleSubmit = event =>{
        event.preventDefault();
        axios.post('http://localhost:5000/api/Patient' , {patient_name:this.state.name,DOB:this.state.dob,
    address:this.state.address,contact:this.state.contact,email:this.state.email,
    diagnosis_reason:this.state.diagnosis, appointment_date:"None",appointment_time:"None"})
    .then(json => {
        if(json.data.Status === "Success")
        console.log("success");
    })
    .catch(error =>{
        console.log(error);
    })
    }

     myChangeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
     }
  

    render(){
        return(
        <div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label>Patient Name</label>
            <input type="text" className="form-control" id="id" onChange ={this.handleChange}/>
            </div>
            <button type="submit">Search</button>
        </form>
      </div>
)}
}

export default RegisterComponent;