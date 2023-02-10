const body = document.querySelector("body")
const rot = document.querySelector("#rot")
const grun = document.querySelector("#grun")
const blau = document.querySelector("#blau")
const counterOutput = document.querySelector("#counterOutput")

let counter = 0

const changeBackground = (color) => {
    body.style.backgroundColor=`${color}`
    counter++
    counterOutput.textContent = `Wir haben die Farbe ${counter} mal gewechselt` 
}

const changeHandle = () => {
    body.style.backgroundColor=`rgb(${rot.value},${grun.value},${blau.value})`
}