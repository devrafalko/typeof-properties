import ofType from 'of-type';

class TypeofProperties {
  constructor(getActualObject, getExpectedObject, callbackFunction) {
    this.validateArguments(getActualObject, getExpectedObject);
    let valid = true;
    Object.keys(getExpectedObject).forEach((property) => {
      if (!ofType(getActualObject[property], getExpectedObject[property])) {
        let actual = this.getActualType(getActualObject[property]);
        let types = this.getExpectedTypes(getExpectedObject[property]);
        let textActual = `[${actual}] ${types.addons}value`;
        let textExpected = types.message;
        let message = `Invalid property ["${property}"]. The ${textActual} has been assigned, while the ${types.message} is expected.`;
        if (ofType(callbackFunction, Function)) {
          callbackFunction({ actual, expected: types.expected, message, name: property, textActual, textExpected });
          valid = false;
          return false;
        } else {
          throw new TypeError(message);
        }
      }
    });
    return () => valid;
  }

  validateArguments(actual, expected) {
    if (!ofType(actual, 'object|instance')) throw new TypeError('typeof-properties: The [0] argument must be of type [Object].');
    if (!ofType(expected, 'object|instance')) throw new TypeError('typeof-properties: The [1] argument must be of type [Object].');
  }

  getActualType(actualValue) {
    if (ofType(actualValue, null)) return 'null';
    if (ofType(actualValue, undefined)) return 'undefined';
    if (ofType(actualValue, 'arguments')) return 'arguments';
    return actualValue.constructor.name;
  }

  getExpectedTypes(expectedType) {
    const types = ['whenString', 'whenRegExp', 'whenObject', 'whenArray'];
    for (let type of types) {
      let check = this[type](expectedType);
      if (check) return check;
    }
    throw new TypeError('typeof-properties: The expected type is not callable.');
  }

  whenString(stringType) {
    if (!ofType(stringType, String)) return null;
    const msg = `value of type matching string expression "${stringType}"`;
    let truthness = '', objectable = '';
    stringType.split('|').forEach((i) => {
      if (i.toLowerCase() === 'truthy') truthness = '<<falsy>> ';
      if (i.toLowerCase() === 'falsy') truthness = '<<truthy>> ';
      if (i.toLowerCase() === 'objectable') objectable = '<<non-objectable>> ';
    });
    return { message: msg, addons: truthness + objectable, expected: stringType };
  }

  whenRegExp(regType) {
    if (!ofType(regType, RegExp)) return null;
    const msg = `value of type matching regular expression ${regType}`;
    return { message: msg, addons: addons(regType), expected: regType.toString() };

    function addons(regType) {
      const isCaseInsensitive = regType.flags.match(/i/);
      let str = regType.toString();
      str = isCaseInsensitive ? str.toLowerCase() : str;
      let truthness = '', objectable = '';
      if (str.match(/truthy/)) truthness = '<<falsy>> ';
      if (str.match(/falsy/)) truthness = '<<truthy>> ';
      if (str.match(/objectable/)) objectable = '<<non-objectable>> ';
      return truthness + objectable;
    }
  }

  whenObject(objectType) {
    if (ofType(objectType, null)) return { message: 'value of type [null]', addons: '', expected: 'null' };
    if (ofType(objectType, undefined)) return { message: 'value of type [undefined]', addons: '', expected: 'undefined' };
    if (ofType(objectType, Function)) return { message: `value of type [${objectType.name}]`, addons: '', expected: objectType.name };
    return null;
  }

  whenArray(arrayTypes) {
    if (!ofType(arrayTypes, Array)) return null;
    const types = {};
    for (let type of arrayTypes) {
      let exp = this.whenObject(type);
      if (ofType(exp, null)) return null;
      types[exp.expected] = exp.expected;
    }
    const expected = Object.getOwnPropertyNames(types).join('|');
    return { message: `value of type [${expected}]`, addons: '', expected: expected };
  }
}

export default function typeofProperties() {
  return new TypeofProperties(...arguments)();
}