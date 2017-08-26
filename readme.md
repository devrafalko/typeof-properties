# Description
`typeof-properties` is a module that validates value type of the properties of objects.
* Any bugs found? Give me to know on dev.rafalko@gmail.com or on [GitHub](https://github.com/devrafalko/typeof-properties)
* Also check out [**`of-type`**](https://www.npmjs.com/package/of-type) package that checks whether the given value is of particular type *(`typeof-properties` is based on `of-type` package)*.
* Also check out [**`typeof-arguments`**](https://www.npmjs.com/package/typeof-arguments) to validate value type of the arguments passed through functions.

# Installation
`npm install typeof-properties`

```javascript
const propType = require('typeof-properties');
```

# Usage
### `propType(actual,expected[,callback])`
##### `actual` **[Object]**
* It should indicate the [Object]
* The properties of **`actual`** object will be validated.

##### `expected` **[Object]**
* The **`expected`** object should contain properties, that cohere with the properties of **`actual`** object
* The values of **`expected`** object's properties should indicate the expected type of the coherent properties of **`actual`** object
* If some of the **`actual`** properties are ommited in **`expected`** object, they will not be validated *(can be of any type)*

#####  The `expected` Types
There are three ways to check the type of properties:
* by **string expression** values
* by **regular expression** values
* by **constructor functions**, `null` or `undefined` values

##### [Object:String]
* Possible values: `'null'`, `'undefined'`, or any value equal to `constructor.name`, eg: `'string'`, `'number'`, `'regexp'`, `'array'`, `'object'`, `'boolean'`,`'buffer'`, etc.
* The [String] value is case insensitive: `'String'`, `'string'`, `'StRiNg'` checks if the property is of type [String].
* The [String] value can contain multiple allowed types, separated with `|`. eg: `'array|object'` checks if the property is of type [Array] **`OR`** of type [Object].

```javascript
const actual = {
  name: 'Paul',
  age: 26
};
const expected = {
  name: 'string',
  age: 'number|string|undefined'
};

propType(actual, expected);
```

##### [Object:RegExp]
* Possible values: `/null/`, `/undefined/`, or any value matching the `constructor.name`, eg: `/String/`, `/Number/`, `/RegExp/`, `/Array/`, `/Object/`, `/Boolean/`,`/Buffer/`, `/Promise/`, etc.
* For the case insensitivity use `i` flag, eg: `/string/i`, `/regexp/i`, `/typeerror/i`
* For multiple values use regexp `(x|y)` expression, eg: `/String|Number/`, `/TypeError|Error/`
* Use another regexp features:
  * eg. `/(Type|Range|Syntax)Error/` will match `TypeError`, `RangeError` and `SyntaxError`
  * eg. `/[A-Z].+/` will match `String`, `Array`, but will not match `undefined`, `null`, etc.
```javascript
const actual = {
  name: 'Paul',
  age: 26
};
const expected = {
  name: /string/i,
  age: /Number|String|undefined/
};

propType(actual, expected);
```

##### [Object:null|undefined|Function|Array]
* Possible values: `null`, `undefined` or any **constructor** object, eg: `String`, `TypeError`, `Promise`, `Array`, etc.
* For multiple values use array, eg: `[String,Object,Array,null]`

```javascript
const actual = {
  name: 'Paul',
  age: 26
};
const expected = {
  name: String,
  age: [Number,String,undefined]
};

propType(actual, expected);
```

##### Extra types:
* The value can be: `'arguments'` or `/arguments/`. It returns `true` if the property is defined as the `arguments` Object
* The value can be: `'truthy'` or `/truthy/`. It returns `true` if the property has the value like: `"abc"`, `true`, `1`, `{}`, `[]`,`function(){}`, etc.
* The value can be: `'falsy'` or `/falsy/`. It returns `true` if the property has the value like: `""`, `false`, `0`, `null`, `undefined`, etc.
* The value can be: `''` or `'any'` or `/any/` or `[]`, It returns `true` if the property is of **any type**.




##### `callback` **[Function]** *(optional)*
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

```javascript
var propType = require('typeof-properties');

const person = {
  name: 'Paul',
  age: '27',
  experience: 7,
  male: true,
  skills: ['js','nodejs','mongodb'],
  talk: function(){
    return `hello I'm ${this.name}`;
  }
};

const validation = {
  name: 'string',
  age: /(number|string)/i,
  talk: 'function|falsy',
  skills: [Array,Object,null],
  male: Boolean
  //experience property is ommited - not validated - can be of any type
};

propType(person,validation,(o)=>{
  console.error(o.message);
  //console.error('Not good! Use ' + o.expected + ' instead of ' + o.actual + ' for the property ' + o.name);
  //throw new TypeError('Aborted: ' + o.message);
});
```

#### Return value
The function `propType()` returns `true` when all checked properties are of **valid** types.  
The function `propType()` returns `false` when at least **one** of the checked properties is of **invalid** type.

```javascript
if(!propType(person,validation,()=>console.log('Aborted.'))) return;
```

# Tests
```
> git clone https://github.com/devrafalko/typeof-properties.git
> cd typeof-properties
> npm install
> npm test
> npm test deep //displays error messages
```

# Samples
```javascript
const propType = require('typeof-properties');

const weatherData = {
  city: "Warsaw",
  latitude: 52.229676,
  longitude: 21.012229,
  date: new Date('2017-08-22'),
  temperature: {day:24,night:18},
  humidity: .71,
  winter: {kph:18,mph:11.3}
};

const weatherValid = {
  city: 'string',
  latitude: [Number,String],
  longitude: [Number,String],
  date: 'date',
  temperature: /object|number/i,
  humidity: 'number|falsy',
  winter: 'object|number'
};

const tempValid = {
  day: 'number|undefined',
  night: [Number,undefined]
};

const winterValid = {
  kph: 'number|falsy',
  mph: /number|falsy/i
};

propType(weatherData,weatherValid);
propType(weatherData.temperature,tempValid);
propType(weatherData.winter,winterValid);
```