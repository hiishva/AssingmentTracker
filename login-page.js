const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    const usernameEmail = String(username).split('@');
    if (usernameEmail.length > 1){
        if(usernameEmail[1] === "gmail.com"){
            console.log("checked if gmail");
            console.log(password.length);
            if (password.length >= 8 && password.length <= 12){
                console.log("check password length");
                console.log(pattern.test(String(password)))
                if (pattern.test(password)){
                    console.log("login worked");
                    alert("you have successfully logged in");
                    location.reload();
                }
                else{loginErrorMsg.style.opacity = 1;}
            }
            else{loginErrorMsg.style.opacity = 1;}
        }
        else{loginErrorMsg.style.opacity = 1;}
    }
    else{loginErrorMsg.style.opacity = 1;}
})