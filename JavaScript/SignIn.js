function SignIn(){
    var Username = (document.getElementById("Username").value);
    var Password = (document.getElementById("Password").value);
    if (Username == "Mad4art", Password == "Password"){
        location = "Main Page.html";
        eighteenButtonPress();
    }
    else{
        alert('Your Username or Password was incorrect!')
    }
}