function login() {
    let email = document.querySelector("#email").value.trim();
   
    let password = document.querySelector("#password").value;

    let errorMsg = ""
    if(!/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) {
        errorMsg = "Enter a valid email";
    }else if(password.length < 6) {
        errorMsg = "Password must be contains 6 words";
    }

    if(errorMsg !== "") {
        alert(errorMsg);
    }

}