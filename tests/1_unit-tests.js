const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');
const convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    test('First test', function () {
        
        // Arrange
        const input = "1kg";
        
        // Act: Call the getNum method with the test input
        const num = ConvertHandler.getNum(input);
        
        // Assert: Compare the actual result to the expected result
        const expectedNum = 1;
        assert.equal(num, expectedNum, `Expected ${expectedNum}, but got ${num}`);
      });
});