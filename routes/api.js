'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let spellOutFirstUnit = convertHandler.spellOutUnit(initUnit);
      let spellOutSecondUnit = convertHandler.spellOutUnit(returnUnit);
      let toString = convertHandler.getString(initNum, spellOutFirstUnit, returnNum, spellOutSecondUnit);

      if (initNum == "Invalid number" && initUnit == "Invalid unit"){
        res.send("invalid number and unit")
      } else if (initUnit == "Invalid unit"){
        res.send("invalid unit")
      } else if (initNum == "Invalid number"){
        res.send("invalid number")
      }
      
      res.json({
        "initNum": initNum,
        "initUnit": initUnit,
        "returnNum": returnNum, 
        "returnUnit": returnUnit,
        "string": toString
      })
    });

};
