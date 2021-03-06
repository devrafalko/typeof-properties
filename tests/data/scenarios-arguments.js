export default [
  {
    actual: null,
    expected: { name: 10 },
    oActual: 'null',
    oExpected: '{name:10}',
    message: /The \[0\] argument must be of type \[Object\]./
  },
  {
    actual: undefined,
    expected: undefined,
    oActual: 'undefined',
    oExpected: 'undefined',
    message: /The \[0\] argument must be of type \[Object\]./
  },
  {
    actual: [1, 2, 3],
    expected: undefined,
    oActual: '[1,2,3]',
    oExpected: 'undefined',
    message: /The \[0\] argument must be of type \[Object\]./
  },
  {
    actual: { name: 'Paul' },
    expected: null,
    oActual: "{name:'Paul'}",
    oExpected: 'null',
    message: /The \[1\] argument must be of type \[Object\]./
  },
  {
    actual: { name: 'Paul' },
    expected: Number,
    oActual: "{name:'Paul'}",
    oExpected: 'Number',
    message: /The \[1\] argument must be of type \[Object\]./
  },
  {
    actual: JSON,
    expected: null,
    oActual: 'JSON',
    oExpected: 'null',
    message: /The \[1\] argument must be of type \[Object\]./
  },
  {
    actual: (function () { return arguments; })(),
    expected: [1, 2, 3],
    oActual: '(function(){return arguments;})()',
    oExpected: '[1,2,3]',
    message: /The \[1\] argument must be of type \[Object\]./
  },
  {
    actual: { name: 'Paul' },
    expected: { name: 10 },
    oActual: "{name:'Paul'}",
    oExpected: '{name:10}',
    message: /The expected type is not callable./
  },
  {
    actual: { name: 'Paul' },
    expected: { name: true },
    oActual: "{name:'Paul'}",
    oExpected: '{name:10}',
    message: /The expected type is not callable./
  },
  {
    actual: { name: 'Paul' },
    expected: { name: new Date() },
    oActual: "{name:'Paul'}",
    oExpected: '{name:new Date()}',
    message: /The expected type is not callable./
  },
  {
    actual: { name: 'Paul' },
    expected: { name: [1, 2, 3] },
    oActual: "{name:'Paul'}",
    oExpected: '{name:[1,2,3]}',
    message: /The expected type is not callable./
  },
  {
    actual: { name: 'Paul' },
    expected: { name: {} },
    oActual: "{name:'Paul'}",
    oExpected: '{name:{}}',
    message: /The expected type is not callable./
  },
  {
    actual: { name: 'Paul' },
    expected: { name: [Number, null, true] },
    oActual: "{name:'Paul'}",
    oExpected: '{name:[Number,null,true]}',
    message: /The expected type is not callable./
  },
  {
    actual: { name: 'Paul' },
    expected: { name: ['string'] },
    oActual: "{name:'Paul'}",
    oExpected: "{name:['string']}",
    message: /The expected type is not callable./
  },
  {
    actual: { name: 'Paul' },
    expected: { name: [/string/] },
    oActual: "{name:'Paul'}",
    oExpected: '{name:[/string/]}',
    message: /The expected type is not callable./
  },
  {
    actual: { name: 'Paul' },
    expected: { name: [/string/, 'string', null, Number, Boolean] },
    oActual: "{name:'Paul'}",
    oExpected: "{name:[/string/,'string',null,Number,Boolean]}",
    message: /The expected type is not callable./
  },
  {
    actual: { name: 'Paul' },
    expected: { name: [Number, 'instance'] },
    oActual: "{name:'Paul'}",
    oExpected: "{name:[Number,'instance']}",
    message: /The expected type is not callable./
  },
  {
    actual: { name: 'Paul' },
    expected: { name: [Number, /instance/] },
    oActual: "{name:'Paul'}",
    oExpected: "{name:[Number,'instance']}",
    message: /The expected type is not callable./
  }
];
