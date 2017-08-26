/* global expect */
const path = require('path');
const type = require(path.resolve('./index.js'));
const scenario = require('./scenarios-arguments.js');

describe('The module function type() is called (regardless the callback is defined) with the arguments',function(){
  describe('when callback is defined, it should throw TypeError with message',function(){
    for(let i in scenario){
      it(`type(${scenario[i].oActual},${scenario[i].oExpected}), it should throw TypeError with message "${scenario[i].message}"`,function(){
        let binded = type.bind(this,scenario[i].actual,scenario[i].expected,(o)=>{});
        expect(binded).toThrowError(TypeError,scenario[i].message);
      });
    }
  });
  describe('when callback is not defined, it should throw TypeError with message',function(){
    for(let i in scenario){
      it(`type(${scenario[i].oActual},${scenario[i].oExpected}), it should throw TypeError with message "${scenario[i].message}"`,function(){
        let binded = type.bind(this,scenario[i].actual,scenario[i].expected,(o)=>{});
        expect(binded).toThrowError(TypeError,scenario[i].message);
      });
    }
  });
});