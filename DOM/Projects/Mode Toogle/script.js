function toggleMode() {
    document.body.classList.toggle("dark-mode");

    const heading = document.querySelector("h1");

    if(document.body.classList.contains("dark-mode")) {
        heading.innerText = "Dark Mode is ON";
        localStorage.setItem("mode", "dark");
    }else {
        heading.innerText = "Light Mode is ON";
        localStorage.setItem("mode", "light")
    }
}

window.onload = function() {
    const savedMode = localStorage.getItem("mode");

    if(savedMode == "dark") {
        document.body.classList.add("dark-mode");

        document.querySelector("h1").innerText = "Dark Mode is ON";
    }else {
        document.querySelector("h1").innerText = "Light Mode is ON";
    }
}

window.onload = function() {
    const savedMode = localStorage.getItem("mode");

    if(savedMode) {
        applyMode(savedMode);
    }else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)' ).matches;
        applyMode(prefersDark ? "dark" : "light"); 
    }
};

function applyMode(mode) {
    if(mode == "dark") {
        document.body.classList.add("dark-mode");
        document.querySelector("h1").innerText = "Dark Mode is ON";
    }else {
        document.querySelector("h1").innerText = "Light Mode is ON";
    }
}