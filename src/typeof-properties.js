import ofType from 'of-type';

class TypeofProperties {
  constructor(getActualObject, getExpectedObject, callbackFunction) {
    this.validateArguments(getActualObject, getExpectedObject);
    let valid = true;
    Object.keys(getExpectedObject).forEach((property) => {
      if (!ofType(getActualObject[property], getExpectedObject[property])) {
        let actual = this.getActualType(getActualObject[property]);
        let types = this.getExpectedTypes(getExpectedObject[property]);
        let textActual = `[${actual}] ${types.truthness}value`;
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
    if (!ofType(actual, 'object|instance')) throw new TypeError('typeof-properties: The first argument must be of type [Object].');
    if (!ofType(expected, 'object|instance')) throw new TypeError('typeof-properties: The second argument must be of type [Object].');
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
    let truthness = '';
    stringType.split('|').forEach((i) => {
      if (i.toLowerCase() === 'truthy') truthness = '<<falsy>> ';
      if (i.toLowerCase() === 'falsy') truthness = '<<truthy>> ';
    });
    return { message: msg, truthness: truthness, expected: stringType };
  }

  whenRegExp(regType) {
    if (!ofType(regType, RegExp)) return null;
    const msg = `value of type matching regular expression ${regType}`;
    return { message: msg, truthness: truthness(regType), expected: regType.toString() };

    function truthness(regType) {
      const isCaseInsensitive = regType.flags.match(/i/);
      let str = regType.toString();
      str = isCaseInsensitive ? str.toLowerCase() : str;
      if (str.match(/truthy/)) return '<<falsy>> ';
      if (str.match(/falsy/)) return '<<truthy>> ';
      return '';
    }
  }

  whenObject(objectType) {
    if (ofType(objectType, null)) return { message: 'value of type [null]', truthness: '', expected: 'null' };
    if (ofType(objectType, undefined)) return { message: 'value of type [undefined]', truthness: '', expected: 'undefined' };
    if (ofType(objectType, Function)) return { message: `value of type [${objectType.name}]`, truthness: '', expected: objectType.name };
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
    return { message: `value of type [${expected}]`, truthness: '', expected: expected };
  }
}

export default function typeofProperties() {
  return new TypeofProperties(...arguments)();
}