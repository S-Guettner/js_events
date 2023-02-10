const mySelect = document.querySelector("#my-select")
const optionSelected = document.querySelector("#option-selected")

mySelect.addEventListener('change', (e) => {
    let auswahl = e.target.value
    optionSelected.textContent = `Sie haben ausgewählt ${auswahl} `
})