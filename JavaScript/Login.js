function compareText() {
    'use strict'
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var veruser = "lilynagy2001@gmail.com";
    if (user == veruser ) {
      alert("Correct username and password");
    } else {
        alert("wrong username and password");
    }
}