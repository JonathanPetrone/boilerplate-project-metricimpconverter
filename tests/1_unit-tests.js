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
        
        // Act
        
        // Assert
       
        assert.fail();
      });

    test('Fractional number input', function () {
        
        // Arrange
        
        // Act
        
        // Assert
       
        assert.fail();
      });

    test('Fractional number input with decimal', function () {
        
        // Arrange
        
        // Act
        
        // Assert
       
        assert.fail();
    });

    test('Error on a double-fraction', function () {
        
        // Arrange
        
        // Act
        
        // Assert
       
        assert.fail();
    });

    test('Default to a numerical input of 1 when no numerical input is provided', function () {
        
        // Arrange
        
        // Act
        
        // Assert
       
        assert.fail();
    });

    test('Read each valid input unit', function () {
        
        // Arrange
        
        // Act
        
        // Assert
       
        assert.fail();
    });

    test('Return an error for an invalid input unit', function () {
        
        // Arrange
        
        // Act
        
        // Assert
       
        assert.fail();
    });

    test('Return the spelled-out string unit for each valid input unit', function () {
        
        // Arrange
        
        // Act
        
        // Assert
       
        assert.fail();
    });

    test('Convert gal to L', function () {
        
        // Arrange
        
        // Act
        
        // Assert
       
        assert.fail();
    });

    test('Convert L to gal', function () {
        
        // Arrange
        
        // Act
        
        // Assert
       
        assert.fail();
    });

    test('Convert mi to km', function () {
        
        // Arrange
        
        // Act
        
        // Assert
       
        assert.fail();
    });

    test('Convert km to mi', function () {
        
        // Arrange
        
        // Act
        
        // Assert
       
        assert.fail();
    });

    test('Convert lbs to kg', function () {
        
        // Arrange
        
        // Act
        
        // Assert
       
        assert.fail();
    });

    test('Convert kg to lbs' , function () {
        
        // Arrange
        
        // Act
        
        // Assert
       
        assert.fail();
    });

});