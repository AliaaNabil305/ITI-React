
    document.getElementById('myForm').addEventListener('submit', function(event) {
      
      
      
      document.getElementById('confirmationMessage').style.display = 'block';
      
      
      const continueSubmission = confirm('Do you want to continue with the form submission?');
      
      if (!continueSubmission) {
        
        event.preventDefault(); 
       
        document.getElementById('confirmationMessage').style.display = 'none';
     
    }});
 