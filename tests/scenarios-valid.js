module.exports = [
  {
    actual:{
      name:'Paul',
      age:26,
      location:'Warsaw',
      skills:['js','mongodb','nodejs']
    },
    expected:{
      name:String,
      age:'any',
      location:/string|null/i,
      skills:[Array,null]
    }
  },
  {
    actual:{
      name:null,
      age:26,
      location:'Warsaw',
      skills:null
    },
    expected:{
      name:'truthy|null',
      age:/TRUTHY/i,
      location:[String,String,String,Array,null,undefined],
      skills:Array
    }
  },
  {
    actual:{
      city: "Warsaw",
      latitude: 52.229676,
      longitude: 21.012229,
      date: new Date('2017-08-22'),
      temperature: {day:24,night:18},
      humidity: .71,
      winter: {kph:18,mph:11.3}
    },
    expected:{
      city: 'string',
      latitude: 'number',
      longitude: Number,
      date: [Date,String],
      temperature: /object|number/i,
      humidity: 'number|falsy',
      winter: /truthy|null/
    }
  },
  {
    actual:{
      city: "Warsaw",
      latitude: 52.229676,
      longitude: 21.012229,
      date: new Date('2017-08-22'),
      temperature: {day:24,night:18},
      humidity: .71,
      winter: {kph:18,mph:11.3}
    },
    expected:{
      city: 'truthy'
    }
  }
];