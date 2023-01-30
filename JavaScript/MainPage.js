function eighteenButtonPress(){
    var Checkedorno = document.getElementById("eighteenorno");
    var over18movies = document.getElementById("over18movies");
    if (Checkedorno.checked == true){
        over18movies.style.display = "";
    }
    else{
        over18movies.style.display = "none";
    }
}
function SignOut(){
    location = "Index.html";
    var Username = (document.getElementById("Username").value);
    var Password = (document.getElementById("Password").value);
    Username.value = "";
    Password.value = "";
}