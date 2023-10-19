function Login() {
    let my_username = "ariz";
    let my_password = "123";

    let usr_inp = document.getElementById("usr").value;
    let psw_inp = document.getElementById("psw").value;

    if (usr_inp == my_username && psw_inp == my_password) {
        window.open("home.html");
    }
    else {
        document.getElementById("errorusr").textContent="incorrect username";
        document.getElementById("errorpsw").textContent="incorrect password";
    }
}