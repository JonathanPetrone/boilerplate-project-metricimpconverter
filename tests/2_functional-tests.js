const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

    test('Convert a valid input such as 10L: GET request to /api/convert', function (done) {
        
        // Arrange
        const input = "10L";
        
        // Act
        chai.request(server)
            .get("/api/convert")
            .query({ input: input})
            .end(function (err, res) {
        // Assert
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 10);
            assert.equal(res.body.initUnit, "L");
            assert.approximately(res.body.returnNum, 2.64172, 0.1);
            assert.equal(res.body.returnUnit, "gal");
            done();
            });
        });

    test('Convert an invalid input such as 32g: GET request to /api/convert', function (done) {
    
        // Arrange
        const input = "32g";
        
        // Act
        chai.request(server)
            .get("/api/convert")
            .query({ input: input})
            .end(function (err, res) {
        // Assert
            assert.equal(res.status, 200);
            assert.equal(res.body.initUnit, undefined);
            done();
            });
        });

    test('Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert', function (done) {
        
        // Arrange
        const input = "3/7.2/4kg";
        
        // Act
        chai.request(server)
            .get("/api/convert")
            .query({ input: input})
            .end(function (err, res) {
        // Assert
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, undefined);
            done();
            });
        });
        
    test('Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert', function (done) {
    
        // Arrange
        const input = "3/7.2/4kilomegagram";
        
        // Act
        chai.request(server)
            .get("/api/convert")
            .query({ input: input})
            .end(function (err, res) {
        // Assert
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, undefined);
            assert.equal(res.body.initUnit, undefined);
            done();
            });
        });

    test('Convert with no number such as kg: GET request to /api/convert', function (done) {

        // Arrange
        const input = "kg";
        
        // Act
        chai.request(server)
            .get("/api/convert")
            .query({ input: input})
            .end(function (err, res) {
        // Assert
            assert.equal(res.status, 200);
            assert.equal(res.body.initNum, 1);
            assert.equal(res.body.initUnit, "kg");
            assert.approximately(res.body.returnNum, 2,20462, 0.1);
            assert.equal(res.body.returnUnit, "lbs");
            done();
            });
        });
});
