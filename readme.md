# Description
`typeof-properties` validates the object's properties' type.

* Also see [`of-type`](https://www.npmjs.com/package/of-type) package to check if the given value|object is of expected type.
* Also see [`typeof-arguments`](https://www.npmjs.com/package/typeof-arguments) to validate the arguments' types passed through the enclosing function.

# Implementation

#### with NodeJS
`npm install typeof-properties`

```javascript
const type = require('typeof-properties');
```

#### with Browser

#### Add `typeof-properties.js` library to the HTML file.
The library is located in `./dist/typeof-properties.js` directory.  
It is a webpack&babel bundled cross-browser library version.  
The library is accessible as `typeofProperties` variable in the global *(window)* scope.

```html
<head>
  <script src='typeof-properties.js'></script>
  <script>
    var person = { name: 'Nikola', age: 26 }
    typeofProperties(person, { name: String, age: 'number' });
  </script>
</head>
```

# Tests
```
> git clone https://github.com/devrafalko/typeof-properties.git
> cd typeof-properties
> npm install
> npm test        //run tests in node
> npm test deep   //run tests in node with errors shown
```

# Usage
### `type(actual, expected[, callback])`
### `actual` **[Object]**
* It should indicate the [Object]
* The properties of **`actual`** object will be validated.

### `expected` **[Object]**
* The **`expected`** object should contain properties, that cohere with the properties of **`actual`** object
* The values of **`expected`** object's properties should indicate the expected type of the coherent properties of **`actual`** object
* If some of the **`actual`** properties are ommited in **`expected`** object, they will not be validated *(can be of any type)*

###  The `expected` Types
There are four ways to check the type of properties:
* by **string expression** values
* by **regular expression** values
* by **constructor functions**, `null` or `undefined` values
* by some of supported custom types

> Mind, that the `typeof-properties` library uses the `of-type` library as the dependency, to validate the types. If you feel confused how to use the types, see more samples [here](https://www.npmjs.com/package/of-type#samples).

`[String]`
* Possible values:  
  * `'null'`, `'undefined'`  
  * any value that equals to property's `constructor.name`, eg:  
  `'string'`, `'number'`, `'regexp'`, `'array'`, `'object'`, `'boolean'`,`'buffer'`, etc.
* The [String] type is case insensitive:
  * `'String'`, `'string'`, `'StRiNg'` checks if the property is of `[String]` type
  * `'RegExp'`, `'REGEXP'`, `'regexp'` checks if the property is of `[RegExp]` type
* The [String] type can contain multiple types, separated with `|`:
  * `'array|object'` checks if the property is of `[Array]` **`OR`** `[Object]` type
  * `'undefined|null'` checks if the property is of `undefined` **`OR`** `null` type

```javascript
const actual = {
  name: 'Nikola',
  age: 26
};

const expected = {
  name: 'string',
  age: 'number|string|undefined'
};

type(actual, expected);
```

`[RegExp]`
* Possible values: 
  * `/null/`, `/undefined/`
  * any value matching the property's `constructor.name`, eg: `/String/`, `/Number/`, `/RegExp/`, `/Array/`, `/Object/`, `/Boolean/`,`/Buffer/`, `/Promise/`, etc.
* Use all regular expression's features to match the type in a desired way:
  * `/Str/`, `/Err/`, `/Reg/`, `/B/`
  * `/.+Error$/`, `/^RegExp$/`, 
  * `/^[A-Z][a-z]+$/`
* For the case insensitivity use `i` flag:
  * `/string/i`, `/regexp/i`, `/TYPEERROR/i`
* For multiple values use regexp `(x|y)` expression:
  * `/String|Number/`, `/TypeError|Error/`, `/(obj|str)/i`

```javascript
const actual = {
  name: 'Nikola',
  age: 26
};

const expected = {
  name: /string/i,
  age: /Number|String|undefined/
};

type(actual, expected);
```

`[Function|Array|null|undefined]`
* Possible values:
  * `null`, `undefined`
  * any `[Function]` constructor, eg: `String`, `TypeError`, `Promise`, `Array`, etc.
* For multiple values use array:
  * `[String, Object, Array, null]`
  * `[null, undefined, Boolean]`

```javascript
const actual = {
  name: 'Nikola',
  age: 26
};

const expected = {
  name: String,
  age: [Number, String, undefined]
};

type(actual, expected);
```

> When you use **bundlers** or **minifiers**, use `[String|RegExp]` type **wisely** as bundlers may change the names of functions|constructors|classes in the output file and eg.  
`type({name: new Name('Nikola')}, {name: 'Name'});`  
that is valid before compilation, may fail after compilation, if the bundler minifies the `'Name'` constructor name.

### Extra types:

`[String] 'arguments'` | `[RegExp] /arguments/`

* The type `'arguments'` or `/arguments/` expects the property's value to be the function's `arguments` object

`[String] 'instance'` | `[RegExp] /instance/`
* The type `'instance'` or `/instance/` expects the property's value to be the instance of the user's class|constructor
* It fails when the property's value is an instance of built-in *(native)* constructor
  * `[]`, `'hello world'`, `{}`
* It fails for instances that are the `global`|`window`'s properties

`[String] 'objectable'` | `[RegExp] /objectable/`
* The type `'objectable'` or `/objectable/` expects the property's value to be the object that is the instance of the `Object` constructor
  * `{}`, `[]`, `new String('hello world')`, `new Boolean(1)`
* It fails when the property's value is a primitive value or a simple value
  * `'hello world'`, `true`, `10`, `null`, `undefined`

`[String] 'truthy'` | `[RegExp] /truthy/`
* The type `'truthy'` or `/truthy/` expects the property's value to be like:
  * `'abc'`, `true`, `1`, `-1`, `{}`, `[]`, `function(){}`

`[String] 'falsy'` | `[RegExp] /falsy/`
* The type `'falsy'` or `/falsy/` expects the property's value to be like:
  * `''`, `false`, `0`, `null`, `undefined`, `NaN`

`[String] 'any'` | `[RegExp] /any/` | `[Array] []` | `[String] ""`
* The `type` `'any'` or `/any/` or empty array `[]` or empty string `""` expects the property's value to be of any type

### `callback` **[Function]** *(optional)*
* if **not passed**, the **TypeError** with **default message** will be **thrown** to the console, if the property value type is invalid.
* The TypeError default message is eg.: 
  * `Invalid property ["name"]. The [undefined] value has been assigned, while the value of type matching string expression "string|null" is expected.`
  * `Invalid property ["name"]. The [undefined] <<falsy>> value has been assigned, while the value of type matching string expression "truthy|null" is expected.`
  * `Invalid property ["name"]. The [undefined] value has been assigned, while the value of type matching regular expression /String|null/ is expected.`
  * `Invalid property ["name"]. The [undefined] value has been assigned, while the value of type [String|null] is expected.`
* if **passed**, the default TypeError **will not be thrown** to the console and the user can decide what to do inside the `callback` function.
* Use callback function if you don't want to stop your code execution by default *(no callback)* **`throw`** statement!
* the `callback` function is executed **only** if at least one property's value is of invalid type.
* The one [Object] argument is passed through `callback` function with the following properties:
  * **`name`**  
    indicates the [String] name of the incorrect property, eg. `"name"`, `"age"`
  * **`actual`**  
    indicates the actual type of the property's value, eg. `"String"`
  * **`expected`**  
    indicates the type(s) expected by the user, eg. `"Array"`, `"Boolean|Number"`, `"/array|object/i"`
  * **`message`**  
    is the default error [String] message, that you can use eg. to log in the console
  * **`textActual`**  
    indicates the [String] textual actual type, eg. `"[undefined] <<falsy>> value"`
  * **`textExpected`**  
    indicates the [String] textual expected type, eg. `"value of type matching regular expression /String|null/"`

```javascript
const type = require('typeof-properties');

const person = {
  name: 'Nikola',
  age: '27',
  experience: 7,
  male: true,
  skills: ['js', 'nodejs', 'mongodb'],
  talk: function () {
    return `hello I'm ${this.name}`;
  }
};

const validation = {
  name: 'string',
  age: /(number|string)/i,
  talk: 'function|falsy',
  skills: [Array, Object, null],
  male: Boolean
  //experience property is ommited - not validated - can be of any type
};

type(person, validation, (o) => {
  console.error(o.message);
  /*
  console.error(`Not good! Use ${o.expected} instead of ${o.actual} for the property ${o.name}`);
  throw new TypeError('Aborted: ' + o.message); 
  */
});
```

### Return value
The function `type()` returns `true` when all checked properties are of **valid** types.  
The function `type()` returns `false` when at least **one** of the checked properties is of **invalid** type.

```javascript
if (!type(person, validation, () => console.log('Aborted.'))) return;
```


# Samples
```javascript
const type = require('typeof-properties');

const weatherData = {
  city: 'Warsaw',
  latitude: 52.229676,
  longitude: 21.012229,
  date: new Date('2017-08-22'),
  temperature: { day: 24, night: 18 },
  humidity: .71,
  winter: { kph: 18, mph: 11.3 }
};

const weatherValid = {
  city: 'string',
  latitude: [Number, String],
  longitude: [Number, String],
  date: 'date',
  temperature: /object|number/i,
  humidity: 'number|falsy',
  winter: 'object|number'
};

const tempValid = {
  day: 'number|undefined',
  night: [Number, undefined]
};

const winterValid = {
  kph: 'number|falsy',
  mph: /number|falsy/i
};

type(weatherData, weatherValid);
type(weatherData.temperature, tempValid);
type(weatherData.winter, winterValid);
```

### more samples

```javascript
const type = require('typeof-properties');

class Person {
  constructor(name, age, earnings) {
    this.name = name;
    this.age = age;
    this.earnings = earnings;
  }
}

class Earnings {
  constructor(income, tax) {
    this.income = income;
    this.tax = tax;
  }
}

const earnings = new Earnings(23000, 6400);
const person = new Person('Jessica', 22, earnings);

const expected = {
  name: String,
  age: 'number',
  earnings: 'instance'
};

type(person, expected);
```