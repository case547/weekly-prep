// Class syntax for OOP - not in 'good parts'
class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    moveBy(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}
// is the same as this function syntax for FP:
function Point (x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.moveBy =
    function(dx, dy) {
        this.x += dx;
        this.y += dy;
    };