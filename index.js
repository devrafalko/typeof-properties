/* global Function */
const ofType = require('of-type');
const cliColor = require('cli-color');
const error = cliColor.red;
const warn = cliColor.blue.bgYellow;

module.exports = function(getActualObject,getExpectedObject,callbackFunction){
  const clb = ofType(callbackFunction,'function');
  validateArguments(getActualObject,getExpectedObject);
  for(var property in getExpectedObject){
    if(!ofType(getActualObject[property],getExpectedObject[property])){
      var actual = getActualType(getActualObject[property]);
      var types = getExpectedTypes(getExpectedObject[property]);
      var message = `Invalid property ["${property}"]. The [${actual}] ${types.truthness}value has been assigned, while the ${types.message} is expected.`;
      if(clb){
        callbackFunction({actual:actual,expected:types.expected,message:message,name:property});
        return false;
      } else {
        var err = new TypeError(message);
        throw err;
      }
    }
  }
  return true;
};

function validateArguments(a,o){
  const errArgObject = warn('typeof-properties')+': '+error('The first argument must be of type [Object].');
  const errTypesObject = warn('typeof-properties')+': '+error('The second argument must be of type [Object].');
  const isArgObject = ofType(a,Object);
  const isTypesObject = ofType(o,Object);
  if(!isArgObject){
    var err = new TypeError(errArgObject);
    throw err;
  }
  if(!isTypesObject){
    var err = new TypeError(errTypesObject);
    throw err;
  }
}

function getActualType(actualValue){
  if(ofType(actualValue,null)) return "null";
  if(ofType(actualValue,undefined)) return "undefined";
  if(ofType(actualValue,'arguments')) return "arguments";
  return actualValue.constructor.name;
}

function getExpectedTypes(expectedType){
  var types = [whenString,whenRegExp,whenObject,whenArray];
  for(var i in types){
    var check = types[i](expectedType);
    if(check) return check;
  }
  const err = warn('typeof-properties')+': '+error(`The expected type is not callable.`);
  throw new TypeError(err);
}

function whenString(stringType){
  if(!ofType(stringType,String)) return null;
  var msg = `value of type matching string expression "${stringType}"`;
  var truthness = '';
  stringType.split('|').forEach((i)=>{
    if(i.toLowerCase()==='truthy') truthness = '<<falsy>> ';
    if(i.toLowerCase()==='falsy') truthness = '<<truthy>> ';
  });
  return {message:msg,truthness:truthness,expected:stringType};
}

function whenRegExp(regType){
  if(!ofType(regType,RegExp)) return null;
  var msg = `value of type matching regular expression ${regType}`;
  return {message:msg,truthness:truthness(regType),expected:regType.toString()};

  function truthness(regType){
    var isCaseInsensitive = regType.flags.match(/i/);
    var str = regType.toString();
    str = isCaseInsensitive ? str.toLowerCase():str;
    if(str.match(/truthy/)) return '<<falsy>> ';
    if(str.match(/falsy/)) return '<<truthy>> ';
    return '';
  };
}

function whenObject(objectType){
  if(ofType(objectType,null)) return {message:`value of type [null]`,truthness:'',expected:'null'};
  if(ofType(objectType,undefined)) return {message:`value of type [undefined]`,truthness:'',expected:'undefined'};
  if(ofType(objectType,Function)) return {message:`value of type [${objectType.name}]`,truthness:'',expected:objectType.name};
  return null;
}

function whenArray(arrayTypes){
  if(!ofType(arrayTypes,Array)) return null;
  var types = {};
  for(var i in arrayTypes){
    var exp = whenObject(arrayTypes[i]);
    if(ofType(exp,null)) return null;
    types[exp.expected] = exp.expected;
  }
  var expected = Object.getOwnPropertyNames(types).join('|');
  return {message:`value of type [${expected}]`,truthness:'',expected:expected};
}