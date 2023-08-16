var name = prompt("Enter your name");
var telephone = prompt("Enter your telephone number");
var mobile = prompt("Enter your mobile number");
var email = prompt("Enter your email address");
var color = prompt("Enter color (red or green or blue)");
var regEx1=/^[a-zA-Z]+$/;
var regEx2=/^[0-9]{8}$/;
var regEx3=/^(010|011|012)\d{8}$/;
var regEx4=/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(regEx1.test(name)==true){
        console.log("%cWelcome dear guest:", "color:"+color,name);
    }
    else{
        alert('Please enter a valid name');
      
    }
    if(regEx2.test(telephone)==true){
        console.log("%cYour telephone number is:", "color:"+color, telephone);

    }
    else{
        alert('Please enter a valid phone no.');
    }
    if(regEx3.test(mobile)==true){
        console.log("%cYour mobile number is:", "color:"+color, mobile);

    }
    else{
        alert('Please enter a valid mobile no.');
    }
    if(regEx4.test(email)==true){
        
    console.log("%cYour email address is:", "color:"+color, email);

    }
    else{
        alert('Please enter a valid email id.')
    }



