function looseJsonParse(obj){
    return Function('"use strict";return (' + obj + ')')();
}

console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))