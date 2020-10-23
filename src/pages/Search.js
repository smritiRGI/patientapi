import React, {Component} from 'react';
import axios from 'axios';
import './search.css';
import $ from "jquery";
class Search extends Component{
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
        if($("#patientid").is(":visible")){
        axios.get(`http://localhost:5000/api/Patient/GetId/${this.state.id}`)
    .then(res => {
        console.log(res.data)
    })
    .catch(error =>{
        console.log(error);
    })
    }
    else{
        axios.get(`http://localhost:5000/api/Patient/GetName/${this.state.name}`)
    .then(res => {
        console.log(res.data)
    })
    .catch(error =>{
        console.log(error);
    })
    }
    }

     handleChange = (event) => {
       this.setState({[event.target.name]: event.target.value});
     }

     showID = (event) =>{
         $("#patientid").show();
         $("#patientname").hide();
     }
     
     showName = (event) =>{
        $("#patientname").show();
        $("#patientid").hide();
    }

    render(){
        return(
        <div>
        <form onSubmit={this.handleSubmit}>
        <div className="radio">
            <label>ID</label>
            <input type="radio" name="radio1" onClick={this.showID}/>
            <label>Name</label>
            <input type="radio" name="radio1"  onClick={this.showName}/>
        </div>
        <div className="form-group" id="patientid">
            <label>Patient ID</label>
            <input type="text" className="form-control"  name="id" value={this.state.id} onChange ={this.handleChange}/>
        </div>
        <div className="form-group" id="patientname">
            <label>Patient Name</label>
            <input type="text" className="form-control"  name="name" value={this.state.name} onChange ={this.handleChange}/>
        </div>
            <button type="submit">Search</button>
        </form>
      </div>
)}
}


export default Search;