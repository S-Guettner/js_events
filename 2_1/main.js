const umschalter = document.querySelector("#umschalter")
const headline = document.querySelector("h1")
const text = document.querySelector("p")
const body = document.querySelector("body")

const colorChange = (color) => {
    body.style.backgroundColor=`${color}`
    color === "gray" ? (text.style.color="white" , headline.style.color="white"):
    color === "blue" ? (text.style.color="white" , headline.style.color="white"):
    (text.style.color="black" , headline.style.color="black")
}