class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Diet {
  constructor(calories, weight) {
    this.weight = weight;
    this.calories = calories;
  }
}

export default [
  {
    actual: { name: null },
    expected: { name: String },
    oActual: 'null',
    oExpected: 'String',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [null] value has been assigned, while the value of type [String] is expected.',
    oTextActual: '[null] value',
    oTextExpected: 'value of type [String]'
  },
  {
    actual: { name: 'Paul' },
    expected: { name: null },
    oActual: 'String',
    oExpected: 'null',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [String] value has been assigned, while the value of type [null] is expected.',
    oTextActual: '[String] value',
    oTextExpected: 'value of type [null]'
  }
  ,
  {
    actual: {},
    expected: { age: String },
    oActual: 'undefined',
    oExpected: 'String',
    oName: 'age',
    oMessage: 'Invalid property ["age"]. The [undefined] value has been assigned, while the value of type [String] is expected.',
    oTextActual: '[undefined] value',
    oTextExpected: 'value of type [String]'
  },
  {
    actual: { name: null },
    expected: { name: 'string' },
    oActual: 'null',
    oExpected: 'string',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [null] value has been assigned, while the value of type matching string expression "string" is expected.',
    oTextActual: '[null] value',
    oTextExpected: 'value of type matching string expression "string"'
  },
  {
    actual: { name: null },
    expected: { name: 'STRING' },
    oActual: 'null',
    oExpected: 'STRING',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [null] value has been assigned, while the value of type matching string expression "STRING" is expected.',
    oTextActual: '[null] value',
    oTextExpected: 'value of type matching string expression "STRING"'
  },
  {
    actual: { name: null },
    expected: { name: 'number|string|undefined' },
    oActual: 'null',
    oExpected: 'number|string|undefined',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [null] value has been assigned, while the value of type matching string expression "number|string|undefined" is expected.',
    oTextActual: '[null] value',
    oTextExpected: 'value of type matching string expression "number|string|undefined"'
  },
  {
    actual: { name: null },
    expected: { name: 'truthy|undefined' },
    oActual: 'null',
    oExpected: 'truthy|undefined',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [null] <<falsy>> value has been assigned, while the value of type matching string expression "truthy|undefined" is expected.',
    oTextActual: '[null] <<falsy>> value',
    oTextExpected: 'value of type matching string expression "truthy|undefined"'
  },
  {
    actual: { name: 'Paul' },
    expected: { name: 'falsy|number' },
    oActual: 'String',
    oExpected: 'falsy|number',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [String] <<truthy>> value has been assigned, while the value of type matching string expression "falsy|number" is expected.',
    oTextActual: '[String] <<truthy>> value',
    oTextExpected: 'value of type matching string expression "falsy|number"'
  },
  {
    actual: { name: null },
    expected: { name: /string/i },
    oActual: 'null',
    oExpected: '/string/i',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [null] value has been assigned, while the value of type matching regular expression /string/i is expected.',
    oTextActual: '[null] value',
    oTextExpected: 'value of type matching regular expression /string/i'
  },
  {
    actual: { name: null },
    expected: { name: /truthy/ },
    oActual: 'null',
    oExpected: '/truthy/',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [null] <<falsy>> value has been assigned, while the value of type matching regular expression /truthy/ is expected.',
    oTextActual: '[null] <<falsy>> value',
    oTextExpected: 'value of type matching regular expression /truthy/'
  },
  {
    actual: { name: null },
    expected: { name: /truthy|undefined|String/ },
    oActual: 'null',
    oExpected: '/truthy|undefined|String/',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [null] <<falsy>> value has been assigned, while the value of type matching regular expression /truthy|undefined|String/ is expected.',
    oTextActual: '[null] <<falsy>> value',
    oTextExpected: 'value of type matching regular expression /truthy|undefined|String/'
  },
  {
    actual: { name: 'Paul' },
    expected: { name: /falsy/ },
    oActual: 'String',
    oExpected: '/falsy/',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [String] <<truthy>> value has been assigned, while the value of type matching regular expression /falsy/ is expected.',
    oTextActual: '[String] <<truthy>> value',
    oTextExpected: 'value of type matching regular expression /falsy/'
  },
  {
    actual: { name: 'Paul' },
    expected: { name: /falsy|Array/ },
    oActual: 'String',
    oExpected: '/falsy|Array/',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [String] <<truthy>> value has been assigned, while the value of type matching regular expression /falsy|Array/ is expected.',
    oTextActual: '[String] <<truthy>> value',
    oTextExpected: 'value of type matching regular expression /falsy|Array/'
  },
  {
    actual: { name: null },
    expected: { name: /TrUtHy/ },
    oActual: 'null',
    oExpected: '/TrUtHy/',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [null] value has been assigned, while the value of type matching regular expression /TrUtHy/ is expected.',
    oTextActual: '[null] value',
    oTextExpected: 'value of type matching regular expression /TrUtHy/'
  },
  {
    actual: { name: 'Paul' },
    expected: { name: /FaLsY/ },
    oActual: 'String',
    oExpected: '/FaLsY/',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [String] value has been assigned, while the value of type matching regular expression /FaLsY/ is expected.',
    oTextActual: '[String] value',
    oTextExpected: 'value of type matching regular expression /FaLsY/'
  },
  {
    actual: { name: 'Paul' },
    expected: { name: /FaLsY/i },
    oActual: 'String',
    oExpected: '/FaLsY/i',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [String] <<truthy>> value has been assigned, while the value of type matching regular expression /FaLsY/i is expected.',
    oTextActual: '[String] <<truthy>> value',
    oTextExpected: 'value of type matching regular expression /FaLsY/i'
  },
  {
    actual: { name: null },
    expected: { name: [String, Array, undefined, Boolean] },
    oActual: 'null',
    oExpected: 'String|Array|undefined|Boolean',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [null] value has been assigned, while the value of type [String|Array|undefined|Boolean] is expected.',
    oTextActual: '[null] value',
    oTextExpected: 'value of type [String|Array|undefined|Boolean]'
  },
  {
    actual: { date: new Date() },
    expected: { date: [Array, undefined, undefined, Array] },
    oActual: 'Date',
    oExpected: 'Array|undefined',
    oName: 'date',
    oMessage: 'Invalid property ["date"]. The [Date] value has been assigned, while the value of type [Array|undefined] is expected.',
    oTextActual: '[Date] value',
    oTextExpected: 'value of type [Array|undefined]'
  },
  {
    actual: { age: Infinity },
    expected: { age: [Array, undefined, undefined, Array] },
    oActual: 'Number',
    oExpected: 'Array|undefined',
    oName: 'age',
    oMessage: 'Invalid property ["age"]. The [Number] value has been assigned, while the value of type [Array|undefined] is expected.',
    oTextActual: '[Number] value',
    oTextExpected: 'value of type [Array|undefined]'
  },
  {
    actual: { name: 'Paul' },
    expected: { name: [null] },
    oActual: 'String',
    oExpected: 'null',
    oName: 'name',
    oMessage: 'Invalid property ["name"]. The [String] value has been assigned, while the value of type [null] is expected.',
    oTextActual: '[String] value',
    oTextExpected: 'value of type [null]'
  },
  {
    actual: { name: 'Paul', age: 22 },
    expected: { name: [String], age: 'number', location: /string/i },
    oActual: 'undefined',
    oExpected: '/string/i',
    oName: 'location',
    oMessage: 'Invalid property ["location"]. The [undefined] value has been assigned, while the value of type matching regular expression /string/i is expected.',
    oTextActual: '[undefined] value',
    oTextExpected: 'value of type matching regular expression /string/i'
  },
  {
    actual: {
      diet: new Diet(1500, 56),
      person: new Person('Jessica', 22)
    },
    expected: {
      diet: Object,
    },
    oActual: 'Diet',
    oExpected: 'Object',
    oName: 'diet',
    oMessage: 'Invalid property ["diet"]. The [Diet] value has been assigned, while the value of type [Object] is expected.',
    oTextActual: '[Diet] value',
    oTextExpected: 'value of type [Object]'
  },
  {
    actual: {
      diet: new Diet(1500, 56),
      person: new Person('Jessica', 22)
    },
    expected: {
      diet: 'instance',
      person: Diet
    },
    oActual: 'Person',
    oExpected: 'Diet',
    oName: 'person',
    oMessage: 'Invalid property ["person"]. The [Person] value has been assigned, while the value of type [Diet] is expected.',
    oTextActual: '[Person] value',
    oTextExpected: 'value of type [Diet]'
  },
  {
    actual: {
      diet: new Diet(1500, 56),
      person: new Person('Jessica', 22)
    },
    expected: {
      diet: [Person, Object],
      person: Person
    },
    oActual: 'Diet',
    oExpected: 'Person|Object',
    oName: 'diet',
    oMessage: 'Invalid property ["diet"]. The [Diet] value has been assigned, while the value of type [Person|Object] is expected.',
    oTextActual: '[Diet] value',
    oTextExpected: 'value of type [Person|Object]'
  },
  {
    actual: {
      diet: { calories: 1500, weight: 56 },
      person: new Person('Jessica', 22)
    },
    expected: {
      diet: 'instance',
      person: Person
    },
    oActual: 'Object',
    oExpected: 'instance',
    oName: 'diet',
    oMessage: 'Invalid property ["diet"]. The [Object] value has been assigned, while the value of type matching string expression "instance" is expected.',
    oTextActual: '[Object] value',
    oTextExpected: 'value of type matching string expression "instance"'
  }
];