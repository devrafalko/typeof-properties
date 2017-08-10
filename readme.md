# Description
`typeof-properties` is a module that validates value type of the properties of objects.
* Any bugs found? Give me to know on dev.rafalko@gmail.com or on [GitHub](https://github.com/devrafalko/typeof-properties)
* Also check out [**`of-type`**](https://www.npmjs.com/package/of-type) package that checks whether the given value is of particular type *(`typeof-properties` is based on `of-type` package)*.
* Also check out [**`typeof-arguments`**](https://www.npmjs.com/package/typeof-arguments) to validate value type of the arguments passed through functions.

# Installation
`npm install typeof-properties`

```javascript
const typeofProps = require('typeof-properties');
```

# Usage
### `typeofProps(object,types[,callback])`
##### `object` **[Object]**
* It should indicate the [Object] object, which properties should be validated

##### `types` **[Object]** of **[String|RegExp]** items.
* It should contain the list of name-value pairs of **property name** and its **expected types**.
* Possible values: `'null'`, `'undefined'`, or any value equal to `constructor.name`, eg. `'string'`, `'number'`, `'regexp'`, `'array'`, `'object'`, `'boolean'`,`'buffer'`, etc.
* The **`types`** [String] is case insensitive: `'String'`, `'string'`, `'StRiNg'` checks if the property is of type [String]. For **`types`** [RegExp] case insensitivity use `i` flag, eg.: `/String/`, `/string/i`, `/sTrInG/i`
* The **`types`** [String] can contain multiple allowed types, separated with `|`, eg: `'array|object'`, `'boolean|number|null|undefined'`, `'string|number'`. For **`types`** [RegExp] multiple values use `(x|y)` expression, eg: `/(string|number)/i`

##### Extra types:
* The **`types`** can contain the value: `'arguments'`. It returns `true` for the `arguments` Object
* The **`types`** can contain the value: `'truthy'`. It returns `true` for the properties' values like: `"abc"`, `true`, `1`, `{}`, `[]`,`function(){}`, etc.
* The **`types`** can contain the value: `'falsy'`. It returns `true` for the properties' values like: `""`, `false`, `0`, `null`, `undefined`, etc.
* The **`types`** can contain the value: `''` or `'any'`, then it returns `true` for the properties' values of **any type**.

> If the `types` object ommits some of the `object` properties, they are not validated *(can be of any type)*.

##### `callback` **[Function]** *(optional)*
* if **not passed**, the **TypeError** with **default message** will be **thrown** to the console, if the property value type is invalid.
* The TypeError default message is eg.: 
  * `Invalid property ["name"]. The [undefined] value has been assigned, while the [String] one is expected.`
  * `Invalid property ["age"]. The [Boolean] value has been assigned, while the value of the type matching the regular expression: /(number|string)/i is expected.`
  * `Invalid property ["talk"]. The [Array] <<truthy>> value has been assigned, while the [Function|falsy] one is expected.`
* if **passed**, the default TypeError **will not be thrown** to the console and the user can decide what to do inside the `callback` function.
* Use callback function if you don't want to stop your code execution by default *(no callback)* **`throw`** statement!
* the `callback` function is executed **only** if at least one property's value is of invalid type.
* The one [Object] argument is passed through `callback` function with the following properties:
  * **`name`**  
    indicates the [String] name of the incorrect property, eg. `"name"`, `"age"`
  * **`actual`**  
    indicates the actual type of the property's value, eg. `'String'`
  * **`expected`**  
    indicates the type(s) expected by the user, eg. `'Array'`, `'Boolean|Number'`, `/array|object/i`
  * **`message`**  
    is the default error [String] message, that you can use eg. to throw an error

```javascript
var typeofProps = require('typeof-properties');

const person = {
  name: 'Paul',
  age: '27',
  experience: 7,
  male: true,
  talk: function(){
    return `hello I'm ${this.name}`;
  }
};

const validation = {
  name: 'string',
  age: /(number|string)/i,
  talk: 'function|falsy',
  male: 'boolean'
  //experience property is ommited - not validated - can be of any type
};

typeofProps(person,validation,(o)=>{
  console.error(o.message);
  //console.error('Not good! Use ' + o.expected + ' instead of ' + o.actual + ' for the property ' + o.name);
  //throw new TypeError('Aborted: ' + o.message);
});
```

#### Return value
The function `typeofProps()` returns `true` when all checked properties are of **valid** types.  
The function `typeofProps()` returns `false` when at least **one** of the checked properties is of **invalid** type.

```javascript
if(!typeofProps(person,validation,()=>console.log('Aborted.'))) return;
```

# Samples
```javascript
const typeofProps = require('typeof-properties');

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
  latitude: 'number',
  longitude: 'number',
  date: 'date',
  temperature: /object|number/i,
  humidity: 'number|falsy',
  winter: 'object|number'
};

const tempValid = {
  day: 'number|undefined',
  night: 'number|undefined'
};

const winterValid = {
  kph: 'number|falsy',
  mph: /number|falsy/i
};

typeofProps(weatherData,weatherValid);
typeofProps(weatherData.temperature,tempValid);
typeofProps(weatherData.winter,winterValid);
```