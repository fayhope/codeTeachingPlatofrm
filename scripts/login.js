function tryLogin(){
   user = document.getElementById("username")
   pass = document.getElementById("password")
   if (user == "fay@gmail.com" && pass == "password"){
    window.location = "questionPage.html"
   }
}