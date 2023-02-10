const body = document.querySelector("body")
const rot = document.querySelector("#rot")
const grun = document.querySelector("#grun")
const blau = document.querySelector("#blau")
const counterOutput = document.querySelector("#counterOutput")
const hexOutput = document.querySelector("#hexOutput")

let counter = 0

const changeBackground = (color) => {
    body.style.backgroundColor=`${color}`
    counter++
    counterOutput.textContent = `Wir haben die Farbe ${counter} mal gewechselt` 
}

const changeHandle = () => {
    body.style.backgroundColor=`rgb(${rot.value},${grun.value},${blau.value})`
    r = (Number(rot.value)).toString(16)
    g = (Number(grun.value)).toString(16)
    b = (Number(blau.value)).toString(16)

    if (r.length == 1)
    r = "0" + r
    if (g.length == 1)
    g = "0" + g
    if (b.length == 1)
    b = "0" + b
    hexOutput.textContent = `#${r}${g}${b}`
}

