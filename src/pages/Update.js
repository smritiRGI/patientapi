import React, {Component} from 'react';
import axios from 'axios';
import './register.css';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            dob:'',
            address:'',
            contact:'',
            email:'',
            doctor:'',
            diagnosis:'',
            appointmentdate:'',
            appointmenttime:''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        axios.put('http://localhost:5000/api/Patient/put' , { 
        id:this.state.id,
        patient_name:this.state.name,
        DOB:this.state.dob,
        address:this.state.address,
        contact:this.state.contact,
        email:this.state.email,
        diagnosis_reason:this.state.diagnosis,
        doctor_name:this.state.doctor,
        appointment_date:this.state.appointmentdate,
        appointment_time:this.state.appointmenttime}
       )
    .then(json => {
        console.log(json);
    })
    .catch(error =>{
        console.log(error);
    })
    }

    handleChange =(event)=>{
        this.setState({
                [event.target.name]: event.target.value
            });
     }
    
  
    render(){
        return(
        <div>
        <form onSubmit={this.handleSubmit}>
            <h1>Update</h1>
            <div className="form-group">
            <label>Patient ID</label>
            <input type="text" className="form-control" name="id" value={this.state.id} onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>Patient Name</label>
            <input type="text" className="form-control" name="name" value={this.state.name} onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>DOB</label>
            <input type="date" className="form-control" name="dob" value={this.state.dob} onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" name="address" value={this.state.address} onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>Contact</label>
            <input type="text" className="form-control" name="contact" value={this.state.contact} onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" name="email" value={this.state.email} onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>Doctor</label>
            <input type="text" className="form-control" name="doctor" value={this.state.doctor} onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>diagnosis</label>
            <input type="text" className="form-control" name="diagnosis" value={this.state.diagnosis} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>appointment_date</label>
            <input type="date" className="form-control" name="appointmentdate" value={this.state.appointment_date} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>appointment_time</label>
            <input type="text" className="form-control" name="appointmenttime" value={this.state.appointment_time} onChange={this.handleChange}/>
            </div>
            <button type="submit">Update</button>
        </form>
      </div>
)}
}

export default Register;