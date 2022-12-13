function validate(){

    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    let y = document.forms["myForm"]["email"].value;
    if (y == "") {
      alert("Email must be filled out");
      return false;
    }
    else{
        var email = document.myForm.email.value;
        atpos = email.indexOf("@");
        otpos = email.lastIndexOf(".");
         
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.myForm.email.focus() ;
            return false;
        }
        alert("Contact done successfully");
    }

    let z = document.forms["myForm"]["number"].value;
    if (z == "") {
      alert("Number must be filled out");
      return false;
    }

    if(x!="" && y!="" && z!=""){
        alert("Contact done successfully");
    }
}