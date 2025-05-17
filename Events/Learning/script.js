let btn1 = document.querySelector("#btn1");


// Event Handler

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
//     console.log("btn1 is clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

let box = document.querySelector("div");


// Event Handler


// box.onmouseover = (evt) => {
//     console.log(evt)
//     console.log("You are inside in div");
// }


// Event Listner

// Event Add listener

btn1.addEventListener("click", (evt) => {
    console.log("Button 1 was click");
} )

btn1.addEventListener("click", (evt) => {
    console.log("Button 2 was click");
} )


const handler3 = () => {
    console.log("Button 3 was click");
} 

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", (evt) => {
    console.log("Button 4 was click");
} )


//  Event Remove Listener

btn1.removeEventListener("click", handler3);

