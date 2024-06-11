/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// TOFIX: No error is shown when , or . is present in the number. 
// TOFIX: Have conversion be its own function, and the convert button calls this function
// TODO: Consider converting the if/else to a ternary...is it even worthwhile?


const convertBTN = document.getElementById("convert-btn");
const unitEl = document.getElementById("unit-el");
let lengthConv = document.getElementById("length-conv");
let volumeConv = document.getElementById("volume-conv");
let massConv = document.getElementById("mass-conv");
let infoEl = document.getElementById("info-el");


convertBTN.addEventListener("click", function(){
    let unitValue = parseFloat(unitEl.value);
    
    const feetCVR = (unitValue * 3.281).toFixed(2);
    const metreCVR = (unitValue / 3.281).toFixed(2);

    const gallonCVR = (unitValue * 0.264).toFixed(2);
    const litreCVR = (unitValue / 0.264).toFixed(2);

    const poundCVR = (unitValue * 2.204).toFixed(2);
    const kgCVR = (unitValue / 2.204).toFixed(2);
    
    
    if (isNaN(unitValue)) {
        infoEl.textContent = "Please enter a whole number.";
    } else if (unitValue <= 0) {
        infoEl.textContent = "Please enter a number greater than 0."; 
    } else {
        lengthConv.textContent = `${unitValue} metres = ${feetCVR} feet | ${unitValue} feet = ${metreCVR} metres`;
        
        volumeConv.textContent = `${unitValue} litres = ${gallonCVR} gallon | ${unitValue} gallon = ${metreCVR} litres`;
        
        massConv.textContent = `${unitValue} kilos = ${feetCVR} pounds | ${unitValue} pounds = ${metreCVR} kilos`;
    }
})

