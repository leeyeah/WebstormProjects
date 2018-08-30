var os = require("os");
//  /Users/lee/WebstormProjects/untitled1
console.log(os.tmpdir());
console.log('-');
console.log(os.type());
console.log('-');
console.log(os.cpus());
console.log('-');
console.log('-');

var nums = [1,3,5];
var x =nums.find(item=>item==5);
console.log(x);