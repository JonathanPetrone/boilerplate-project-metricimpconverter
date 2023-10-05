
function checkIfStringContains(inputString, type){
  let regex;

  switch (type){
    case "numbers":
      regex = /[0-9]/;
      break;
    case "letters":
      regex = /[A-Za-z]/;
      break;
    case "dots":
      regex = /[.]/;
      break;
    case "slashes":
      regex = /[/]/;
      break;
  }
  
  result = regex.test(inputString);
  
  return result;
}

function splitInputString(input){
  for (i = 0; i < input.length; i++){
    charAtIndex = input.charAt(i);
    
    let stringHasLetter = checkIfStringContains(input, "letters");
    
    if (stringHasLetter){
        if (charAtIndex.match(/[A-Za-z]/)){
          
          //slices the input with the end being the first letter occuring and saving a string up top that point
          numberInput = input.slice(0, i)
          unitInput = input.slice(i)
          result = [numberInput, unitInput];
          
          return result
            }
        } else {
            numberInput = input;
            unitInput = "no unit";
            result = [numberInput, unitInput];
            return result
        }
    }
}

function ConvertHandler() {
  
  this.getNum = function(input) {
  let result;

  stringHasNum = checkIfStringContains(input, "numbers");
  isFirstCharIsLetter = checkIfStringContains(input.charAt(0), "letters");
  
  if(!stringHasNum && isFirstCharIsLetter){
    result = 1;
    return result
  } else if (!stringHasNum && !isFirstCharIsLetter){
    result = "Invalid number"
    return result
  }

  let getNumberInputString = splitInputString(input);
  let inputNum = getNumberInputString[0];

  let cleaningRegex = /[^0-9./]/;
  let unCleanString = cleaningRegex.test(inputNum);
  
  if (unCleanString) {
    result = "Invalid number"
    return result
  }
  
  stringHasSlashes = checkIfStringContains(inputNum, "slashes");
  
  if (stringHasSlashes){
    slashesInString = 0;

    for (i = 0; i < inputNum.length; i++){
      charAtIndex = inputNum.charAt(i);
      if (inputNum.charAt(i) == "/"){
        slashesInString++
      }
    }

    if (slashesInString > 1){
      result = "Invalid number";
      console.log(result)
      return result;
    }

    const splitNumbers = inputNum.split('/')

    let leftSideNum = splitNumbers[0];
    let rightSideNum = splitNumbers[1];

    if (leftSideNum == "" || rightSideNum == ""){
      result = "Invalid number"
      console.log(result);
      return result;
    }

    let firstNumber = Number(leftSideNum);
    let secondNumber = Number(rightSideNum);

    result = firstNumber / secondNumber;
    console.log(result);
    return result;

  } else {
      let result = Number(inputNum);
      let badResult = isNaN(result);
      
      if (badResult){
          result = "Invalid number"
          console.log("Number conversion failed: " + result)
          return result
      }
      console.log(result);
      return result
      }
    }

  
  this.getUnit = function(input) {
    let result;
    let getUnitInputString = splitInputString(input);
    let inputUnit = getUnitInputString[1];
    
    let checkInputUnit = inputUnit.toLowerCase();
    
    switch(checkInputUnit){
        case "km":
            inputUnit = "km"
            break;
        case "mi":
            inputUnit = "mi"
            break;
        case "gal":
            inputUnit = "gal"
            break;
        case "l":
            inputUnit = "L"
            break;
        case "lbs":
            inputUnit = "lbs"
            break;
        case "kg":
            inputUnit = "kg"
            break;    
        default:
            result = "Invalid unit"
            console.log(result)
            return result;
    }

    console.log(inputUnit)
    return inputUnit;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    switch(initUnit){
      case "km":
          returnUnit = "mi"
          break;
      case "mi":
          returnUnit = "km"
          break;
      case "gal":
          returnUnit = "L"
          break;
      case "L":
          returnUnit = "gal"
          break;
      case "lbs":
          returnUnit = "kg"
          break;
      case "kg":
          returnUnit = "lbs"
          break;
      default:
        result = "Invalid unit"
        console.log(result)
        return result; 
    }
    
    return returnUnit;
  };

  this.spellOutUnit = function(unit) {
    let result;

    const unitName = {
      "gal": "gallons",
      "L": "litres",
      "mi": "miles",
      "km": "kilometers",
      "lbs": "pounds",
      "kg": "kilograms"
    };

    if (unitName.hasOwnProperty(unit)) {
      // Check if the unit is defined in unitName
      result = unitName[unit];
    } else {
      // Handle the case where the unit is not defined
      console.error(`Unit "${unit}" is not defined in unitName.`);
    }

    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    let result;
    const galToL = 3.78541;
    const lToGal = 0.264172;
    const lbsToKg = 0.453592;
    const kgToLbs = 2.20462;
    const miToKm = 1.60934;
    const kmToMi = 0.621371;

    let conversionValue;

    switch (initUnit) {
      case "km":
        conversionValue = miToKm;
        result = parseFloat((initNum / conversionValue).toFixed(5));
        return result;
      case "mi":
        conversionValue = miToKm;
        break;
      case "gal":
        conversionValue = galToL;
        break;
      case "L":
        conversionValue = lToGal;
        break;
      case "lbs":
        conversionValue = lbsToKg;
        break;
      case "kg":
        conversionValue = lbsToKg;
        result = parseFloat((initNum / conversionValue).toFixed(5));
        return result;
      default:
        result = "Invalid conversion"
        console.log(result)
        return result;
    }

    result = parseFloat((initNum * conversionValue).toFixed(5));

    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {


    let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`

    
    return result;
  };
}

module.exports = ConvertHandler;