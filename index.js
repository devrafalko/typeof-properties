const ofType = require('of-type');
const cliColor = require('cli-color');
const error = cliColor.red;
const warn = cliColor.blue.bgYellow;
module.exports = function(a,o,c){
  const errArgObject = warn('typeof-properties')+': '+error('The first argument must be of type [Object].');
  const errTypesObject = warn('typeof-properties')+': '+error('The second argument must be of type [Object].');
  const errItems = warn('typeof-properties')+': '+error('Each property value of the second [Object] argument must be of type [String|RegExp].');
  const isArgObject = ofType(a,'object');
  const isTypesObject = ofType(o,'object');
  if(!isArgObject){
    var err = new TypeError(errArgObject);
    throw err;
  }
  if(!isTypesObject){
    var err = new TypeError(errTypesObject);
    throw err;
  }
  if(!isArgObject||!isTypesObject) return;
  const clb = ofType(c,'function');
  var r = true;
  for(var x in o){
    var t = o[x];
    if(!ofType(o[x],'string|regexp')){
      var err = new TypeError(errItems);
      throw err;
    }
    var isStr = ofType(t,'string');
    var res = ofType(a[x],t);
    if(!res){
      r = false;
      var act = ofType(a[x],'undefined') ? 'undefined':ofType(a[x],'null') ? 'null':ofType(a[x],'arguments') ? 'object Arguments':a[x].constructor.name;
      var truthyFalsy = '';
      var exp = isStr ? 
        t.split('|').map((i)=>{
          const truthy = i==='truthy';
          const falsy = i==='falsy';
          const args = i==='arguments';
          const nullOrUnd = i==='null'||i==='undefined';
          truthyFalsy = truthy ? '<<falsy>> ':falsy ? '<<truthy>> ':truthyFalsy;
          return nullOrUnd||truthy||falsy||args ? i.toLowerCase():i[0].toUpperCase()+i.slice(1).toLowerCase();
        }).join('|'):
        (()=>{
          var r = t.toString();
          truthyFalsy = r.match(/truthy/) ? '<<falsy>> ':r.match(/falsy/) ? '<<truthy>> ':'';
          return r;
        })();
      var msg = `Invalid property ["${x}"]. The [${act}] ${truthyFalsy}value has been assigned, while the ${isStr ? `[${exp}] one`:`value of the type matching the regular expression: ${exp}`} is expected.`;
      if(clb){
        c({actual:act,expected:exp,message:msg,name:x});
      } else {
        var err = new TypeError(error(msg));
        throw err;
      }
    }
  }
  return r;
};