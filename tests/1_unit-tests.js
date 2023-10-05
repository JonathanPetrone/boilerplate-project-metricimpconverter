const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    test('Whole number input', function () {
        
        // Arrange
        const input = "1";
        
        // Act: Call the getNum method with the test input
        const num = convertHandler.getNum(input);
        
        // Assert: Compare the actual result to the expected result
        const expectedNum = 1;
        assert.equal(num, expectedNum, `Expected ${expectedNum}, but got ${num}`);
      });
    
    test('Decimal number input', function () {
        
        // Arrange
        const input = "1.9";
        
        // Act
        const num = convertHandler.getNum(input);
        
        // Assert
        const expectedNum = 1.9;
        assert.equal(num, expectedNum, `Expected ${expectedNum}, but got ${num}`);
      });

    test('Fractional number input', function () {
        
        // Arrange
        const input = "4/2";
        
        // Act
        const num = convertHandler.getNum(input);
        
        // Assert
        const expectedNum = 2;
        assert.equal(num, expectedNum, `Expected ${expectedNum}, but got ${num}`);
      });

    test('Fractional number input with decimal', function () {
        
        // Arrange
        const input = "4.2/2.3";
        
        // Act
        const num = convertHandler.getNum(input);
        
        // Assert
        const expectedNum = 1.8260869565217392;
        assert.equal(num, expectedNum, `Expected ${expectedNum}, but got ${num}`);
      });

    test('Error on a double-fraction', function () {
        
        // Arrange
        const input = "4.2/2/1";
        
        // Act
        const num = convertHandler.getNum(input);
        
        // Assert
        const expectedNum = "Invalid number";
        assert.equal(num, expectedNum, `Expected ${expectedNum}, but got ${num}`);
      });

    test('Default to a numerical input of 1 when no numerical input is provided', function () {
        
        // Arrange
        const input = "km";
        
        // Act
        const num = convertHandler.getNum(input);
        
        // Assert
        const expectedNum = "1";
        assert.equal(num, expectedNum, `Expected ${expectedNum}, but got ${num}`);
      });

    test('Read each valid input unit', function () {
        
        // Arrange
        const kilometers = "km";
        const miles = "mi";
        const pounds= "lbs";
        const kilograms = "kg";
        const gallons = "gal";
        const litres = "L";
        
        // Act
        const handleKilometers = convertHandler.getUnit(kilometers);
        
        const handleMiles = convertHandler.getUnit(miles);
        const handlePounds = convertHandler.getUnit(pounds);
        const handleKilograms = convertHandler.getUnit(kilograms);
        const handleGallons = convertHandler.getUnit(gallons);
        const handleLitres = convertHandler.getUnit(litres);
        
        // Assert
        const expectedKilometers = "km";
        const expectedMiles = "mi";
        const expectedPounds = "lbs";
        const expectedKilograms = "kg";
        const expectedGallons = "gal";
        const expectedLitres = "L";

        assert.equal(handleKilometers, expectedKilometers, `Expected ${expectedKilometers}, but got ${handleKilometers}`);
        assert.equal(handleMiles, expectedMiles, `Expected ${expectedMiles}, but got ${handleMiles}`);
        assert.equal(handlePounds, expectedPounds, `Expected ${expectedPounds}, but got ${handlePounds}`);
        assert.equal(handleKilograms, expectedKilograms, `Expected ${expectedKilograms}, but got ${handleKilograms}`);
        assert.equal(handleGallons, expectedGallons, `Expected ${expectedGallons}, but got ${handleGallons}`);
        assert.equal(handleLitres, expectedLitres, `Expected ${expectedLitres}, but got ${handleLitres}`);
      });

    test('Return an error for an invalid input unit', function () {
        
        // Arrange
        const input = ".-qw";
        
        // Act
        const unit = convertHandler.getUnit(input);
        
        // Assert
        const expectedUnit = "Invalid unit";
        assert.equal(unit, expectedUnit, `Expected ${expectedUnit}, but got ${unit}`);
      });

    test('Return the correct return unit for each valid input unit', function() {

        // Arrange
        const input = "kg";
    
        // Act
        const unit = convertHandler.getReturnUnit(input);
    
        // Assert
        const expectedUnit = "lbs";
        assert.equal(unit, expectedUnit, `Expected ${expectedUnit}, but got ${unit}`);
      });

    test('Return the spelled-out string unit for each valid input unit', function () {
        
        // Arrange
        const input = "kg";
        
        // Act
        const unit = convertHandler.spellOutUnit(input);
        
        // Assert
        const expectedUnit = "kilograms";
        assert.equal(unit, expectedUnit, `Expected ${expectedUnit}, but got ${unit}`);
      });

    test('Convert gal to L', function () {
        
        // Arrange
        const inputNum = "10"
        const inputUnit = "gal"
        
        // Act
        const convertOperation = convertHandler.convert(inputNum, inputUnit);
        

        // Assert
        const expectedOutput = 37.8541
        assert.equal(convertOperation, expectedOutput, `Expected ${expectedOutput}, but got ${convertOperation}`);
    });

    test('Convert L to gal', function () {
        
        // Arrange
        const inputNum = "10"
        const inputUnit = "L"
        
        // Act
        const convertOperation = convertHandler.convert(inputNum, inputUnit);
        

        // Assert
        const expectedOutput = 2.64172
        assert.approximately(convertOperation, expectedOutput, 0.1, `Expected ${expectedOutput}, but got ${convertOperation}`);
    });

    test('Convert mi to km', function () {
        
        // Arrange
        const inputNum = "10"
        const inputUnit = "mi"
        
        // Act
        const convertOperation = convertHandler.convert(inputNum, inputUnit);
        

        // Assert
        const expectedOutput = 16.0934
        assert.approximately(convertOperation, expectedOutput, 0.1, `Expected ${expectedOutput}, but got ${convertOperation}`);
    });

    test('Convert km to mi', function () {
        
        // Arrange
        const inputNum = "10"
        const inputUnit = "km"
        
        // Act
        const convertOperation = convertHandler.convert(inputNum, inputUnit);
        

        // Assert
        const expectedOutput = 6.21371
        assert.approximately(convertOperation, expectedOutput, 0.1, `Expected ${expectedOutput}, but got ${convertOperation}`);
    });

    test('Convert lbs to kg', function () {
        
        // Arrange
        const inputNum = "10"
        const inputUnit = "lbs"
        
        // Act
        const convertOperation = convertHandler.convert(inputNum, inputUnit);
        

        // Assert
        const expectedOutput = 4.53592
        assert.approximately(convertOperation, expectedOutput, 0.1, `Expected ${expectedOutput}, but got ${convertOperation}`);
    });
    
    test('Convert kg to lbs' , function () {
        
        // Arrange
        const inputNum = "10"
        const inputUnit = "kg"
        
        // Act
        const convertOperation = convertHandler.convert(inputNum, inputUnit);
        
        // Assert
        const expectedOutput = 22.0462
        assert.approximately(convertOperation, expectedOutput, 0.1, `Expected ${expectedOutput}, but got ${convertOperation}`);
    });

});