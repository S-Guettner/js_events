const body = document.querySelector("body")
const keyOutput = document.querySelector("#keyOutput")
const keyCodeOutput = document.querySelector("#keyCodeOutput")
const codeOutput = document.querySelector("#codeOutput")
const bigKeyCodeOutput = document.querySelector("#bigKeyCodeOutput")

body.addEventListener('keydown', (e) => {
    keyOutput.textContent = `${e.key}`
    keyCodeOutput.textContent = `${e.keyCode}`
    bigKeyCodeOutput.textContent = `${e.keyCode}`
    codeOutput.textContent = `${e.code}`

})