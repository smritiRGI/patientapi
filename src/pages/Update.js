import React,{Component} from 'react';
import './Update.css';

class UpdateComponent extends Component {
  
    render(){
  return (
    <div>
        <br/>
        <br/>
        <h1>Update Patient Record</h1><br/>
        <div className="form-group">
            <label>Patient ID</label>
            <input type="text" className="form-control" id="patientid" name="id" value={this.state.id} onChange ={this.handleChange}/>
        </div>
    
    </div>
  );
    }
}

export default UpdateComponent;