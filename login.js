function validation(){
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

}