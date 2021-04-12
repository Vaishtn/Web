function validation(){
    var textbox=document.getElementById("fname");
    var fnameValid=true;
    var fnameMessage='';
    if(textbox.value==''){
        fnameMessage="enter a valid name";
        textbox.style.backgroundColor='red';
        fnameValid=false;
        document.getElementById("fnameSpan").innerHTML=fnameMessage;

        return false;
    }
    if(textbox.value.length<3){
        fnameMessage="The name must be longer than 3 charcaters";
        textbox.style.backgroundColor='red';
        fnameValid=false;
        document.getElementById("fnameSpan").innerHTML=fnameMessage;

        return false;
    }
    if(textbox.value.length>8){
        fnameMessage="The name must be longer than 8 charcaters";
        textbox.style.backgroundColor='red';
        fnameValid=false;
        document.getElementById("fnameSpan").innerHTML=fnameMessage;

        return false;
    }
    if(fnameValid)
    {
        console.log('valid');
        textbox.style.backgroundColor='white';
        document.getElementById("fnameSpan").innerHTML='';

 
    }
    

    var lastname=document.getElementById("lname");
    if(lastname.value==''){
        alert("enter a valid last name");
        lastname.style.backgroundColor='blue';
        return false;
    }
    if(lastname.value.length<3){
        alert("The name must be longer than 3 charcaters");
        lastname.style.backgroundColor='blue';
        return false;
    }
    if(lastname.value.length>8){
        alert("The name must be longer than 8 charcaters");
        lastname.style.backgroundColor='blue';
        return false;
    }

    var email=document.getElementById("email");
    if(email.value==''){
        alert("enter email");
        email.style.backgroundColor='red';
        return false;
    }

    var pass=document.getElementById("pwd");
    if(pass.value.length!=8){
        alert("The password must be 8 characters long");
        pass.style.backgroundColor='red';
        return false;
    }

    var cpass=document.getElementById("cpwd");
    if(cpass.value.length!=pass.value){
        alert("The password is not matching");
        cpass.style.backgroundColor='red';
        return false;
    }



   
    

}
function name() {
    
    
}




