
let btn = document.querySelector("#btn")
let container = document.querySelector("#color-code")
let body = document.querySelector("body");

btn.addEventListener('click', getNewColor)
function getNewColor(){
    let symbols = "0123456789ABCDEF"
    let color ="#"

    for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random() * symbols.length)
        color += symbols[randomIndex]
    }
    container.innerText = color
    body.style.backgroundColor = color
    console.log(color, "color")
}
getNewColor()