module.exports = [
  {
    actual:{name:null},
    expected:{name:String},
    oActual:'null',
    oExpected:'String',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [null] value has been assigned, while the value of type [String] is expected.`
  },
  {
    actual:{name:'Paul'},
    expected:{name:null},
    oActual:'String',
    oExpected:'null',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [String] value has been assigned, while the value of type [null] is expected.`
  },
  {
    actual:{},
    expected:{age:String},
    oActual:'undefined',
    oExpected:'String',
    oName:'age',
    oMessage:`Invalid property ["age"]. The [undefined] value has been assigned, while the value of type [String] is expected.`
  },
  {
    actual:{name:null},
    expected:{name:'string'},
    oActual:'null',
    oExpected:'string',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [null] value has been assigned, while the value of type matching string expression "string" is expected.`
  },
  {
    actual:{name:null},
    expected:{name:'STRING'},
    oActual:'null',
    oExpected:'STRING',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [null] value has been assigned, while the value of type matching string expression "STRING" is expected.`
  },
  {
    actual:{name:null},
    expected:{name:'number|string|undefined'},
    oActual:'null',
    oExpected:'number|string|undefined',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [null] value has been assigned, while the value of type matching string expression "number|string|undefined" is expected.`
  },
  {
    actual:{name:null},
    expected:{name:'truthy|undefined'},
    oActual:'null',
    oExpected:'truthy|undefined',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [null] <<falsy>> value has been assigned, while the value of type matching string expression "truthy|undefined" is expected.`
  },
  {
    actual:{name:"Paul"},
    expected:{name:'falsy|number'},
    oActual:'String',
    oExpected:'falsy|number',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [String] <<truthy>> value has been assigned, while the value of type matching string expression "falsy|number" is expected.`
  },
  {
    actual:{name:null},
    expected:{name:/string/i},
    oActual:'null',
    oExpected:'/string/i',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [null] value has been assigned, while the value of type matching regular expression /string/i is expected.`
  },
  {
    actual:{name:null},
    expected:{name:/truthy/},
    oActual:'null',
    oExpected:'/truthy/',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [null] <<falsy>> value has been assigned, while the value of type matching regular expression /truthy/ is expected.`
  },
  {
    actual:{name:null},
    expected:{name:/truthy|undefined|String/},
    oActual:'null',
    oExpected:'/truthy|undefined|String/',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [null] <<falsy>> value has been assigned, while the value of type matching regular expression /truthy|undefined|String/ is expected.`
  },
  {
    actual:{name:'Paul'},
    expected:{name:/falsy/},
    oActual:'String',
    oExpected:'/falsy/',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [String] <<truthy>> value has been assigned, while the value of type matching regular expression /falsy/ is expected.`
  },
  {
    actual:{name:'Paul'},
    expected:{name:/falsy|Array/},
    oActual:'String',
    oExpected:'/falsy|Array/',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [String] <<truthy>> value has been assigned, while the value of type matching regular expression /falsy|Array/ is expected.`
  },
  {
    actual:{name:null},
    expected:{name:/TrUtHy/},
    oActual:'null',
    oExpected:'/TrUtHy/',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [null] value has been assigned, while the value of type matching regular expression /TrUtHy/ is expected.`
  },
  {
    actual:{name:'Paul'},
    expected:{name:/FaLsY/},
    oActual:'String',
    oExpected:'/FaLsY/',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [String] value has been assigned, while the value of type matching regular expression /FaLsY/ is expected.`
  },
  {
    actual:{name:'Paul'},
    expected:{name:/FaLsY/i},
    oActual:'String',
    oExpected:'/FaLsY/i',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [String] <<truthy>> value has been assigned, while the value of type matching regular expression /FaLsY/i is expected.`
  },
  {
    actual:{name:null},
    expected:{name:[String,Array,undefined,Boolean]},
    oActual:'null',
    oExpected:'String|Array|undefined|Boolean',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [null] value has been assigned, while the value of type [String|Array|undefined|Boolean] is expected.`
  },
  {
    actual:{date:new Date()},
    expected:{date:[Array,undefined,undefined,Array]},
    oActual:'Date',
    oExpected:'Array|undefined',
    oName:'date',
    oMessage:`Invalid property ["date"]. The [Date] value has been assigned, while the value of type [Array|undefined] is expected.`
  },
  {
    actual:{age:Infinity},
    expected:{age:[Array,undefined,undefined,Array]},
    oActual:'Number',
    oExpected:'Array|undefined',
    oName:'age',
    oMessage:`Invalid property ["age"]. The [Number] value has been assigned, while the value of type [Array|undefined] is expected.`
  },
  {
    actual:{name:'Paul'},
    expected:{name:[null]},
    oActual:'String',
    oExpected:'null',
    oName:'name',
    oMessage:`Invalid property ["name"]. The [String] value has been assigned, while the value of type [null] is expected.`
  },
  {
    actual:{name:'Paul',age:22},
    expected:{name:[String],age:'number',location:/string/i},
    oActual:'undefined',
    oExpected:'/string/i',
    oName:'location',
    oMessage:`Invalid property ["location"]. The [undefined] value has been assigned, while the value of type matching regular expression /string/i is expected.`
  }
];





