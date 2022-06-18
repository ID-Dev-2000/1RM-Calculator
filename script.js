let ID = document.getElementById('repSelector')
let weightInitializer = document.getElementById('weightInput')
let resultDisplay = document.getElementById('resultDisplay')
let calculateButton = document.getElementById('calculateButton')

// dynamic select options
for (i=1; i <= 12; i++) {
    let optionToAdd = document.createElement('option')
    optionToAdd.value = i
    optionToAdd.text = i
    ID.appendChild(optionToAdd)
}

function calculateMaximum() {
    let weight = weightInitializer.value
    let repCount = ID.options[ID.selectedIndex].value
    let calculatedMaxRep = weight * (1 + (repCount/30))

    if(isNaN(Math.trunc(calculatedMaxRep))){
        resultDisplay.innerHTML = 'RESULT: ERROR'
    } else {
        resultDisplay.innerHTML = `RESULT: ${Math.trunc(calculatedMaxRep)}`
    }
}

calculateButton.addEventListener('click', calculateMaximum)
