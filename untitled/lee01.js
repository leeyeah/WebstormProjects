var cost = (function () {
    var args = [];
    var tmps = [];
    return function () {
        if(arguments.length === 0)
        {
            var money = 0
            for(var i=0,l=args.length;i<l;i++)
            {
                money+=args[i];
            }
            return money;
        }else{
            //[].push.apply(args,arguments)
            //[].push.apply(args,arguments)
            Array.prototype.push.apply(args,arguments)
        }

    }
})();

cost(100)
cost(200)
cost(300)

console.log(cost())

console.log('----------------------------------------')

var Plane = function () {

}

Plane.prototype.fire = function () {
    console.log('send from plane');
}

var MissileDecorator = function (plane) {
    this.plane = plane
}
MissileDecorator.prototype.fire=function () {
    this.plane.fire();
    console.log('send from MissileDecorator');
}

var AtomDecorator = function (plane) {
    this.plane = plane
}

AtomDecorator.prototype.fire = function () {
    this.plane.fire()
    console.log('send from Atom')
}

var plane = new Plane();
plane = new MissileDecorator(plane);
plane = new AtomDecorator(plane);

plane.fire();
