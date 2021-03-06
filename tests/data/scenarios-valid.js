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
    actual: {
      name: 'Paul',
      age: 26,
      location: 'Warsaw',
      skills: ['js', 'mongodb', 'nodejs']
    },
    expected: {
      name: String,
      age: 'any',
      location: /string|null/i,
      skills: [Array, null]
    }
  },
  {
    actual: {
      name: null,
      age: 26,
      location: 'Warsaw',
      skills: null
    },
    expected: {
      name: 'truthy|null',
      age: /TRUTHY/i,
      location: [String, String, String, Array, null, undefined],
      skills: Array
    }
  },
  {
    actual: {
      city: 'Warsaw',
      latitude: 52.229676,
      longitude: 21.012229,
      date: new Date('2017-08-22'),
      temperature: { day: 24, night: 18 },
      humidity: .71,
      winter: { kph: 18, mph: 11.3 }
    },
    expected: {
      city: 'string',
      latitude: 'number',
      longitude: Number,
      date: [Date, String],
      temperature: /object|number/i,
      humidity: 'number|falsy',
      winter: /truthy|null/
    }
  },
  {
    actual: {
      city: 'Warsaw',
      latitude: 52.229676,
      longitude: 21.012229,
      date: new Date('2017-08-22'),
      temperature: { day: 24, night: 18 },
      humidity: .71,
      winter: { kph: 18, mph: 11.3 }
    },
    expected: {
      city: 'truthy'
    }
  },
  {
    actual: {
      name: (function(){return arguments;})('Albert'),
      surname: (function(){return arguments;})('Einstein')
    },
    expected: {
      name: 'arguments',
      surname: /arguments/
    }
  },
  {
    actual: {
      name: (function(){return arguments;})('Albert'),
      surname: (function(){return arguments;})('Einstein')
    },
    expected: {
      name: 'arguments|ARRAY',
      surname: /ARGUMENTS/i
    }
  },
  {
    actual: new (class Data {
      constructor() {
        this.city = 'Warsaw';
        this.latitude = 52.229676;
        this.longitude = 21.012229;
        this.date = new Date('2017-08-22');
        this.temperature = { day: 24, night: 18 };
        this.humidity = .71;
        this.winter = { kph: 18, mph: 11.3 };
      }
    })(),
    expected: {
      city: 'string',
      latitude: 'any',
      longitude: [],
      data: '',
      temperature: /any/,
      humidity: 'ANY'
    }
  },
  {
    actual: new (class Data {
      constructor() {
        this.city = new String('Warsaw');
        this.latitude = 52.229676;
        this.longitude = 21.012229;
        this.date = new Date('2017-08-22');
        this.temperature = { day: 24, night: 18 };
        this.humidity = new Number(.71);
        this.winter = { kph: 18, mph: 11.3 };
      }
    })(),
    expected: {
      city: /objectable/,
      latitude: 'any',
      longitude: [],
      data: '',
      temperature: /any/,
      humidity: 'objectable|null',
      winter: 'objectable'
    }
  },
  {
    actual: {
      city: 'Warsaw',
      latitude: 52.229676,
      longitude: 21.012229,
      date: new Date('2017-08-22'),
      temperature: { day: 24, night: 18 },
      humidity: .71,
      winter: { kph: 18, mph: 11.3 }
    },
    expected: new (class Data {
      constructor() {
        this.city = 'string';
        this.latitude = 'any';
        this.longitude = [];
        this.data = '';
        this.temperature = /any/;
        this.humidity = 'ANY';
      }
    })()
  },
  {
    actual: {
      diet: new Diet(1500, 56),
      person: new Person('Jessica', 22)
    },
    expected: {
      diet: 'Diet',
      person: 'Person'
    }
  },
  {
    actual: {
      diet: new Diet(1500, 56),
      person: new Person('Jessica', 22)
    },
    expected: {
      diet: 'diet',
      person: 'PERSON'
    }
  },
  {
    actual: {
      diet: new Diet(1500, 56),
      person: new Person('Jessica', 22)
    },
    expected: {
      diet: 'objectable',
      person: /OBJECTABLE/i
    }
  },
  {
    actual: {
      diet: new Diet(1500, 56),
      person: new Person('Jessica', 22)
    },
    expected: {
      diet: /Diet/,
      person: /person/i
    }
  },
  {
    actual: {
      diet: new Diet(1500, 56),
      person: new Person('Jessica', 22)
    },
    expected: {
      diet: 'INSTANCE',
      person: 'instance'
    }
  },
  {
    actual: {
      diet: new Diet(1500, 56),
      person: new Person('Jessica', 22)
    },
    expected: {
      diet: /instance/,
      person: /INSTANCE/i
    }
  },
  {
    actual: {
      diet: new Diet(1500, 56),
      person: new Person('Jessica', 22)
    },
    expected: {
      diet: [Diet, Person],
      person: [Diet, Person]
    }
  },
  {
    actual: {
      diet: new Diet(1500, 56),
      person: new Person('Jessica', 22)
    },
    expected: {}
  }
];