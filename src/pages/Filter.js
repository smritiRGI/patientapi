import React, {Component} from 'react';
import axios from 'axios';


class Filter extends Component{
   constructor(props){
       super(props);
       this.state = {
          date:""
       }
   }
   
   handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
   }

   handleSubmit = event =>{
    event.preventDefault();
    axios.get(`http://localhost:5000/api/Patient/GetDate/${this.state.date}`)
    .then(res => {
        console.log(res.data)
    })
    .catch(error =>{
        console.log(error);
    })
   }
   

   render(){
    return(
    <div>
    <form onSubmit={this.handleSubmit}>
    <div>
        <label>Search By Date</label>
        <input type="date" className="form-control"  name="date" value={this.state.date} onChange={this.handleChange}/>
    </div>
        <button type="submit">Search</button>
    </form>
  </div>
)}
}

export default Filter;