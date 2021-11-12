
function myFunction() {
  var x = document.getElementById("policy");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function EmailValidation(enteredEmail)
{var mail_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(enteredEmail.value.match(enteredEmail))
{alert(Thanks);
document.form1.text1.focus();
return true;
}
Else 
{alert(Incorrect);
document.form1.text1.focus();
return false;
}

}

