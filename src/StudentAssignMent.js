import React, { useState, useEffect } from 'react';

import axios from 'axios';

function StudentAssignMent() {
	

	const [responseData, setResponseData] = useState(null);
	const [responseDataDonar, setresponseDataDonar] = useState(null);

 
	const [file, setFile] = useState(null);
  
    const [formData, setFormData] = useState({
    AssignMentID: '',
    });
  
  				
	
		const handleSubmit = async (e) => {
    e.preventDefault();

    try {
	
		var all=0;
		//alert(formData.SName);
		if (formData.AssignMentID!='') {
 
		} else {
		  alert('Enter AssignMent ID..');
		  all=1;
		}
		
		 		
		
	if(all==0)
		{
			
	  const formData1 = new FormData();
	  formData1.append('file', file);
	  formData1.append('EID', formData.AssignMentID);
	  formData1.append('SID', localStorage.getItem('Sid'));
  
	  
	  const response = await axios.post('http://localhost:3001/api/ExperimentAssignment', formData1, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
	
      console.log('Assignment submitted successfully:', response.data);
	  alert('Assignment submitted successfully..!');
		}
      // You can add code here to handle success or show a success message to the user.
    } catch (error) {
		  
      console.error('Error submitting form data:', error);
      // You can add code here to handle errors or show an error message to the user.
    }
  }
  
 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

const handleFileChange = (e) => {
  setFile(e.target.files[0]);
};

  return (
  
        <div class="templatemo-content">

          <h1>Submit Assignment</h1>
		<hr/>


<div id="container">
<div id="show" class="show">
<div id="cp_contact_form">
<form onSubmit={handleSubmit}>

	
							
                <div class="row">
                  <div class="col-md-6 margin-bottom-15">
                    <label for="firstName" class="control-label">AssignMent No./ID</label>
                    <input type="text" name="AssignMentID" class="form-control" id="firstName" Placeholder="ID" onChange={handleInputChange} value={formData.AssignMentID}/>           
                  </div>
    
                </div>

                
				

				<div class="row">
                  <div class="col-md-12 margin-bottom-15">
                    <label for="firstName" class="control-label">Experiment File</label>
                    <input type="File" name="content4" class="form-control" id="firstName"  onChange={handleFileChange}/>
                  </div>
                </div>	
				  
				  
              <div class="row templatemo-form-buttons">
                <div class="col-md-12">
				  <div className="button"><button type="submit" class="form-control">Submit</button></div>

                </div>
              </div>

</form>
</div>


<hr/>
<br/>
 


</div>
</div>
</div>

  );
}

export default StudentAssignMent;