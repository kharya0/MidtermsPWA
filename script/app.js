function validate() {
    var username = document.getElementsByName("uname").value;
    var password = document.getElementsByName("psw").value;
    
    if (username == "inst" && password == "1234") {
        window.location = "../html/newsched.html";
        return false;
    }
    
}

validate();