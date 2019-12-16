var Extend = function () {
    this.value=110;
};

Extend.prototype.call = function () {
    this.value++;
    console.log(this.value);
};

var eab = new Extend();
eab.call();
eab.call();
eab.call();

var finc = (function(){
    var i = 0;
    return function(j)
    {
        i++;
        console.log('finc ='+i);
    }
})();

finc()
finc()
//var fincen = finc()
//fincen(6)
//fincen(7)

var extend = (function () {
    var value = 0 ;
    return{
        call:function () {
            value++;
            console.log('value='+value)
        }
    }
})();

extend.call()
extend.call()

var extb = {
  value:0,
  call:function () {
      this.value ++;
      console.log('extb value = '+this.value)
  }
};

extb.call();
extb.call();


var monthlyCost = function () {

    var coust = 0;
    console.log('coust ')
    return function (money) {

        coust = coust+money;

        return coust;
    }
};
var totala = monthlyCost()
var totalb = monthlyCost()

var i =totala(500)
i = totala(1)
i=totala(2)
console.log(i)

i=totalb(200)
console.log(i)
