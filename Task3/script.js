
var name = document.getElementById("name");
var email = document.getElementById("email");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var phone = document.getElementById("phone");
var submit = document.getElementById("submit");

function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(email).toLowerCase())) {
      document.getElementById("error").innerHTML = "Invalid Email";
      document.getElementById("email").style.border = "2px solid red";
    }else{
      document.getElementById("email").style.border = "2px solid black";
    }
}

function checkName(name){
  console.log(name);
  if(name.length < 4){
    document.getElementById("error").innerHTML = "Please Enter a name longer than 4 characters";
    document.getElementById("name").style.border = "2px solid red";
  }else{
    document.getElementById("name").style.border = "2px solid black";
  }
}

function checkPass(pass1, pass2){
  if(pass1.length < 8 ) {document.getElementById("error").innerHTML ="Password must be 8 characters or more"
    document.getElementById("pass1").style.border = "2px solid red";
  }
  else if(pass1 != pass2) {document.getElementById("error").innerHTML ="Passwords don't match"
    document.getElementById("pass1").style.border = "2px solid red";
    document.getElementById("pass2").style.border = "2px solid red";
  }else{
    document.getElementById("pass2").style.border = "2px solid black";
    document.getElementById("pass1").style.border = "2px solid black";
  }
}

function checkPhone(phone){
  if(! ( /^\d+$/.test(phone))) {document.getElementById("error").innerHTML = "Phone must only have numbers"; document.getElementById("phone").style.border = "2px solid red";}
  else{
    document.getElementById("phone").style.border = "2px solid black";
  }
  return 0;
}

submit.addEventListener("click", function(){
    document.getElementById("error").innerHTML = "";
    checkPhone(document.getElementById("phone").value);
    checkPass(document.getElementById("pass1").value, document.getElementById("pass2").value);
    checkName(document.getElementById("name").value);
    checkEmail(document.getElementById("email").value);

    if (document.getElementById("error").innerHTML == ""){
      document.getElementById("error").innerHTML = "Credentials Valid";
    }

})
