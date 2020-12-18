// Show date
var utc = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = utc.getDay();
var date = utc.toJSON().slice(0, 10).replace(/-/g, '/');
document.getElementById("top").textContent = days[day] + " " + " " + date;
// Events that change the page for clickable text elements in the nav
var lg = document.getElementById("login");
var rg = document.getElementById("register");
function logIn(e) {
    document.getElementById("top").innerHTML = '<form id="loginForm"><label for="email">Email: <input type="email" id="email" required><label for="pass">Password: <input type="password" id="pass" required><input type="submit" id="submit" value="Go!"></form>';
}
function register(e) {
    document.getElementById("top").innerHTML = '<form id="registration"><label for="email">Email: <input type="email" id="email" required><label for="pass1">Password: <input type="password" id="pass1" required><label for="pass2">Confirm: <input type="password" id="pass2" required><input type="submit" id="submit" value="Go!"></form>';
    document.getElementById("email").addEventListener("keyup", validateEmail);
    document.getElementById("pass1").addEventListener("keyup", validatePass);
    document.getElementById("pass2").addEventListener("keyup", matchPass);
}
function validateEmail(e) {
    var b = true;
    var re = /[a-z]@[a-z]/;
    document.getElementById("main").textContent = "";
    if (!re.test(document.getElementById("email").value)) {
        document.getElementById("main").textContent = "Enter a valid email address!";
        b = false;
    }
    return b;
}
function validatePass(e) {
    var b = true;
    document.getElementById("main").textContent = "";
    if (!passCheck(document.getElementById("pass1").value)) {
        document.getElementById("main").textContent = "Password must contain at least one special character (!, @, #, $, %), one number, one uppercase letter and one lowercase!";
        b = false;
    }
    return b;
}
function matchPass(e) {
    var b = true;
    document.getElementById("main").textContent = "";
    if (document.getElementById("pass1").value != document.getElementById("pass2").value) {
        document.getElementById("main").textContent = "Passwords do not match!";
        b = false;
    }
    return b;
}
lg.addEventListener("click", logIn);
rg.addEventListener("click", register);
// general functions
function passCheck(pass) {
    var specialChar = /(!|@|\#|\$|%)+/;
    var lowerCase = /[a-z]/;
    var upperCase = /[A-Z]/;
    var numChar = /[0-9]/;
    var regexArray = [specialChar, lowerCase, upperCase, numChar];
    if (pass.length < 8) {
        return false;
    }
    else {
        var valid = true;
        var i = 0;
        while (i < regexArray.length) {
            if (!regexArray[i].test(pass)) {
                valid = false;
                break;
            }
            ++i;
        }
        return valid;
    }
}
