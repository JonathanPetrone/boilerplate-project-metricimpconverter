const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    test('#isNull, #isNotNull', function () {
        assert.isNull(null, 'This is an optional error description - e.g. null is null');
        assert.isNotNull(1, '1 is not null');
      });
});