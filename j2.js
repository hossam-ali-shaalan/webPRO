function validation(){
    var pass = document.getElementById("pass");
    var pass2 = document.getElementById("pass2");
    var passText = document.getElementById("passText");
    var pass2Text = document.getElementById("pass2Text");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var i,j;
    var checkUpper = false;
    var charCounter = 0;
    
    em.style.display = "block";

    if (!email.value.match(/^[a-zA-Z0-9]+\@[a-zA-Z]+\.[a-zA-Z]+$/)){
        document.getElementById("em").innerHTML="please write correct email";
           return false;
    }
    em.style.display = "none"; 

    num.style.display = "block";

    if (!phone.value.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)){
        document.getElementById("num").innerHTML="please write the 'phone number' like this pattern<br>###-###-#### ";
           return false;
    }
    num.style.display = "none";

    passText.style.display = "block";
    if(pass.value.search([' ']) != -1 ){
        document.getElementById("passText").innerHTML="please write password so that it does not contain a space ";
           return false;
    }
                
    for(j in uppercase){
         
        if(  pass.value[0] == uppercase[j] ){
           checkUpper = true;
           break;
    }
    }
    if(checkUpper == false ){
        document.getElementById("passText").innerHTML="The password must start with uppercase character";
           return false;
    }
    
    

    
    
    if(pass.value.search(/[0-9]/) == -1){
        document.getElementById("passText").innerHTML="The password must include 1 digit ";
        return false;
    }
   
    if(pass.value.search(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\}]/) == -1 ){
        document.getElementById("passText").innerHTML="The password must include 1 special character like @ , $ ,... ";
        return false;
    }
    
    if(pass.value.length != 8){
    document.getElementById("passText").innerHTML="the password must include 8 characters no more no less";
    return false;
    }

    passText.style.display = "none";

    pass2Text.style.display = "block";

    if(pass.value != pass2.value){
        document.getElementById("pass2Text").innerHTML="Your password don't match. Please try again";
        return false;
    }

    pass2Text.style.display = "none";
alert("Welcome to the Cars world");
   
    
}