function show() {
    const passwordInput = document.querySelector("#password");

    const button = document.querySelector("#btn1");

    if(passwordInput.type === "password") {
        passwordInput.type = "text";
        button.innerText = "Hide";
    }else {
        passwordInput.type = "password";
        button.innerText = "Show";
    }
}

function show2() {
    const passwordInput = document.querySelector("#confirm");

    const button = document.querySelector("#btn2");

    if(passwordInput.type === "password") {
        passwordInput.type = "text";
        button.innerText = "Hide";
    }else {
        passwordInput.type = "password";
        button.innerText = "Show";
    }
}

function submit() {
    const pas1 = document.querySelector("#password");
    const pas2 = document.querySelector("#confirm");

    if(pas1.value == pas2.value) {
        alert("Congurulations Your password svaed successfully.");
    }else {
        alert("Try again your password not matched.")
    }
}