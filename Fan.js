var Fan = /** @class */ (function () {
    function Fan(speed, on, radius, color) {
        if (speed === void 0) { speed = 1; }
        if (on === void 0) { on = false; }
        if (radius === void 0) { radius = 5; }
        if (color === void 0) { color = "blue"; }
        this.slow = 1;
        this.medium = 2;
        this.fast = 3;
        this.speed = speed;
        this.on = on;
        this.radius = radius;
        this.color = color;
    }
    Fan.prototype.toString = function () {
        if (this.on == true) {
            return "fan is on: speed = ".concat(this.speed, " color = ").concat(this.color, " radius = ").concat(this.radius);
        }
        else {
            return "fan is off: color = ".concat(this.color, " radius = ").concat(this.radius);
        }
    };
    return Fan;
}());
var fan1 = new Fan(3, true, 10, "yellow");
var fan2 = new Fan(2, false, 5);
console.log(fan1.toString());
console.log(fan2.toString());
