import React, {Component} from 'react';
import axios from 'axios';
import './filter.css';

class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:"",
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
        axios.get(`http://localhost:5000/api/Patient/GetId/${this.state.id}`)
    .then(res => {
        console.log(res.data)
    })
    .catch(error =>{
        console.log(error);
    })
    }

     handleChange = (event) => {
       this.setState({[event.target.name]: event.target.value});
     }
  

    render(){
        return(
        <div>
        <form onSubmit={this.handleSubmit}>
        {/*<div className="radio">
            <label>ID</label>
            <input type="radio" name="radio1" checked />
        </div>
        <div className="radio">
            <label>Name</label>
            <input type="radio" name="radio2"/>
        </div>*/}
        <div className="form-group">
            <label>Patient ID</label>
            <input type="text" className="form-control" id="patientid" name="id" value={this.state.id} onChange ={this.handleChange}/>
        </div>{/*
        <div className="form-group">
            <label>Patient Name</label>
            <input type="text" className="form-control" id="patientname" name="name" value={this.state.name} onChange ={this.handleChange}/>
        </div>*/}
            <button type="submit">Search</button>
        </form>
      </div>
)}
}

export default Filter;