function validation(){
    var pass = document.getElementById("pass");
    var pass2 = document.getElementById("pass2");
    var passs = document.getElementById("passs");
    var passs2 = document.getElementById("passs2");
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var phone = "0123456789";
    var i,j;
    var checkUpper = false;
    var charCounter = 0;
    
    passs.style.display = "block";
    passs2.style.display = "block";

    
    for(i in pass.value){
        if(pass.value[i] == ' '){
            document.getElementById("passs").innerHTML="please write password so that it does not contain a space ";
           return false;
           }
    }
    
    
    for(j in uppercase){
         
        if(  pass.value[0] == uppercase[j] ){
           checkUpper = true;
           break;
    }
    }
    if(checkUpper == false ){
        document.getElementById("passs").innerHTML="The password must start with uppercase character";
           return false;
    }
    
    
    for(i in pass.value){
        for(j in lowercase){
            if(pass.value[i] == lowercase[j] || pass.value[i] == uppercase[j]){
                charCounter = charCounter+1;
            }
        }
    }
    
    
    if(pass.value.search(/[0-9]/) == -1){
        document.getElementById("passs").innerHTML="The password must include 1 digit ";
        return false;
    }
   
    if(pass.value.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\}]/) == -1 ){
        document.getElementById("passs").innerHTML="The password must include 1 special character like @ , $ ,... ";
        return false;
    }
    
    if(charCounter != 8){
    document.getElementById("passs").innerHTML="the password must include 8 characters no more no less";
    return false;
    }

    passs.style.display = "none";

    if(pass.value != pass2.value){
        
        document.getElementById("passs2").innerHTML="Your password don't match. Please try again";
        return false;
    }

    passs2.style.display = "none";
    alert("Welcome to our libairy");
    
}