import React,{Component} from 'react';
import './Update.css';

class UpdateComponent extends Component {
    render(){
  return (
    <div>
        <br/>
        <br/>
        <h1>Update Patient Record</h1><br/>
        <form>
      Enter Patient Id: <input type="text" id="fname" name="fname"></input>
     <input type="submit" id='b1' value="Submit"></input>
        </form>
    
    </div>
  );
    }
}

export default UpdateComponent;