function ConvertHandler() {
  
  this.getNum = function(input) {
  let result;

  let firstLetterRegex = /^[A-Za-z0-9]/

  //const input = "120/2abc";
  let inputNum; 

  if (firstLetterRegex.test(input)) {
    console.log("Valid input");
    const firstLetterIsNotANumber = !isNaN(input.charAt(0));
    console.log("is first letter a number? " + firstLetterIsNotANumber);
    if (!firstLetterIsNotANumber) {
          result = 1;
          console.log(result)
          return result
      }
  } else {
    result = "Invalid number";
    console.log(result);
    return result
  }

  for (i = 1; i < input.length; i++){
      //starting at index 1 as index 0 is already checked
      let charAtIndex = input.charAt(i)
      let numberOfSlashes = 0;
      console.log(charAtIndex);
      
      //checking for a match of alphabetic letters
      if (charAtIndex.match(/[A-Za-z]/)){
          console.log("its a match -> " + charAtIndex)
          
          //slices the input with the end being the first letter occuring and saving a string up top that point
          inputNum = input.slice(0, i)
          console.log(inputNum)
          
          for (i = 0; i < inputNum.length; i++){
              let indexIsNotANum = isNaN(inputNum.charAt(i));
              
              if (indexIsNotANum && inputNum.charAt(i) == "/"){
                  numberOfSlashes++
                  console.log(numberOfSlashes);
                  let nextIndexIsNotANum = isNaN(inputNum.charAt(i + 1));
                  console.log("next char " + inputNum.charAt(i + 1));
                  
                  if (nextIndexIsNotANum || inputNum.charAt(i + 1) == ""){
                      console.log("next char after / is not a number");
                      result = "Invalid number"
                      console.log(result);
                      return result
                  }
              } //add else if (index is not num and == "." and else (result = "invalid number")
              
              if (numberOfSlashes > 1){
                  result = "Invalid number"
                  console.log(result);
                  return result
              }
              
              console.log(inputNum.charAt(i));
          }
          console.log("reached the end with " + inputNum);
          
          for (i = 0; i < numberOfSlashes; i++){
              console.log("number of iterations " + (i + 1))
              const splitForDivision = inputNum.split('/')
              const newValue = splitForDivision[0] / splitForDivision[1]
              // some kind of check if the result is a valid number and not just a string.
              console.log(splitForDivision);
              console.log(newValue);
          }
          
          return result
      }
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
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
    const galToL = 3.78541;
    const lToGal = 0.264172;
    const lbsToKg = 0.453592;
    const kgToLbs = 2.20462;
    const miToKm = 1.60934;
    const kmToMi = 0.621371;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
  }
}

module.exports = ConvertHandler;