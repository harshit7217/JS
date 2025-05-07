let count = 0;
const counter = document.querySelector("#counter");

function minus() {
    count--;
    counter.innerText = count;
}

function plus() {
    count++;
    counter.innerText = count;
}