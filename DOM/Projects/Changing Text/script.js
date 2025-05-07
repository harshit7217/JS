function changeText() {
    var element = document.querySelector("h1");
    element.innerText = "Changing the text in dynamic form";
}

const heading = [
    "Main", "Alpha", "Male", "Female"
]

function changeMulti() {
    const randomIndex = Math.floor(Math.random() * heading.length);
    document.querySelector("#m1").innerText = heading[randomIndex];
}