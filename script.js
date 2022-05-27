let ID = document.getElementById('repSelector')
let weightInitializer = document.getElementById('weightInput')
let resultDisplay = document.getElementById('resultDisplay')

function calculateMaximum() {
    let weight = weightInitializer.value
    let repCount = ID.options[ID.selectedIndex].value
    let calculatedMaxRep = weight * (1 + (repCount/30))
    if(weight == ''){
        resultDisplay.innerHTML = 'PLEASE ENTER WEIGHT LIFTED'
    } else {
    resultDisplay.innerHTML = `RESULT: ${Math.trunc(calculatedMaxRep)}`
    }
}
