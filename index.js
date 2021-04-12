function validation(){
	var textbox=document.getElementById("fname");
	if(textbox.value==''){
        msg.innerHTML="The name is invalid";
        console.log("alert");
		
		textbox.style.color='red';
        return false;
	}
    if(textbox.value.length<3){
        msg.innerHTML="The name is less than 3";
    
        return false;
    }
    if(textbox.value.length>8){
        
        msg.innerHTML="The name is longer than 8";
        
        return false;
    }
	
	var lastname=document.getElementById("lname");
	if(lastname.value==''){
        
        vmsg.innerHTML="The last name is invalid";
		

        return false;
			}
    if(lastname.value.length<3){
                vmsg.innerHTML="The last name less than 3";
		
        lastname.style.backgroundColor='blue';
        return false;
    }
    if(lastname.value.length>8){
        vmsg.innerHTML="The last name is longer than 8";
		
        lastname.style.backgroundColor='blue';
        return false;
    }
	
	var email=document.getElementById("email");
    if(email.value==''){
        zmsg.innerHTML="Enter the valid mail";
    
        email.style.backgroundColor='red';
        return false;
    }

    var pass=document.getElementById("pwd");
    if(pass.value.length!=8){
        tmsg.innerHTML="enter valid password";
        pass.style.backgroundColor='red';
        return false;
    }

    var cpass=document.getElementById("cpwd");
    if(cpass.value!=pass.value){
        mmsg.innerHTML="The password is not matching";
        
        cpass.style.backgroundColor='red';
        return false;
    }
}
function vname() {
    msg.innerHTML="";
    
}
function sname(){
    vmsg.innerHTML="";

}
function zname(){
zmsg.innerHTML="";
}
function tname() {
    tmsg.innerHTML="";
}
function mname() {
    mmsg.innerHTML="";
}