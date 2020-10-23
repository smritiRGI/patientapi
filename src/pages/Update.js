import React,{Component} from 'react';
import axios from 'axios';
import './Update.css';

class Update extends Component {
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
      axios.get(`http://localhost:5000/api/Patient/GetId/${this.state.id}`)
      .then(res => {
          this.setState({
            name: res.data.patient_name,
            dob:res.data.DOB,
            address:res.data.address ,
            contact:res.data.contact,
            email:res.data.email,
            appointmentdate:res.data.appointment_date,
            appointmenttime:res.data.appointment_time
            })
      })
      .catch(error =>{
      console.log(error);
      })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  renderTable(){
      return(
      <div>
        <form>
            <h1>Update</h1>
            <p>Please fill in this form to update your details.</p>
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
            <input type="text" className="form-control" name="contact"value={this.state.contact}  onChange ={this.handleChange}/>
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
            <label>diagnosis</label>
            <input type="date" className="form-control" name="appointment_date" value={this.state.appointmentdate} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
            <label>diagnosis</label>
            <input type="text" className="form-control" name="appointment_time" value={this.state.appointmenttime} onChange={this.handleChange}/>
            </div>
            <button type="submit">Update</button>
        </form>
      </div>
      )
  }
  
    render(){
      return(
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label>Patient ID</label>
            <input type="text" className="form-control"  name="id" value={this.state.id} onChange ={this.handleChange}/>
        </div>
        <button type="submit">Search</button>
        </form>
      )
    }
  }


  export default Update;