
function myFunction() {
  var x = document.getElementById("policy");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/*validate email*/




function validateEmail(event) {
  event.preventDefault();
  let regex = /^\S+@\S+\.\S+$/;
  let email= document.getElementById("email").value;
  let string;
  if (regex.test(email)) {
    string = "Success! Thank you for your interest in consulting!"
  }
  else {

    string = "Sorry Invalid Email";
  }
let messageDiv= document.getElementById("messageDiv");
messageDiv.innerHTML=string;  
}

/*book log: is there a way to enter the date manually*/


