import React, {Component} from 'react';
import axios from 'axios';

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
        axios.get('http://localhost:5000/api/Patient' , {params: this.state.id})
    .then(json => {
        if(json.data.Status === "Success")
        console.log(json.data)
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
            <div className="form-group">
            <label>Patient ID</label>
            <input type="text" className="form-control" name="id" value={this.state.id} onChange ={this.handleChange}/>
            </div>
            <button type="submit">Search</button>
        </form>
      </div>
)}
}

export default Filter;