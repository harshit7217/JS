const quote = [
    "Your life your rule.", "If you are not never about people what to say then you are the right track.", "If you want to success in our life then do first disipline in your life.", "If you love someone the you do anything for your love"
]

function quotes() {
    let n = Math.floor(Math.random() * quote.length);
    document.querySelector("h1").innerText = quote[n];
}