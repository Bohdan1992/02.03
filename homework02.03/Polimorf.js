/**
 * Created by Богдан on 08.03.2017.
 */
    function  Figure(x, y) {
        this._x = x;
        this._y = y;
        this.getSquare = function () {
            return 0;
        }
    }

    function  Square(x) {
        this._x = x;
        this.getSquare = function () {
            return Math.pow(x, 2);
        }
    }

    function  Triangle(x, y) {
        this._x = x;
        this._y = y;
        this.getSquare = function () {
            return (_x * _y) / 2;
        }
    }

    function  Rectangle(x, y) {
        this._x = x;
        this._y = y;
        this.getSquare = function () {
            return x * _y;
        }
    }

    function  Circle(y) {
        this._y = y;
        this.getSquare = function () {
            return Math.PI * Math.pow(_y, 2);
        }
    }
    
    function Pyramide(a, c) {
        this._a = a;
        this._c = c;
        this.getSquare = function () {
            return (Math.sqrt((Math.pow(_c, 2)) - ((Math.pow(_a, 2)) / 4)) * (_a /2)) + Math.pow(_a, 2);
        }
    }

    var figure = new Figure(1, 1);
    Square.prototype = figure;
    Rectangle.prototype = figure;
    Triangle.prototype = figure;
    Circle.prototype = figure;
    Pyramide.prototype = figure;

    var square = Square(2);
    square.getSquare();
    var rect = Rectangle(2, 7);
    rect.getSquare();
    var tria =Triangle(4, 5);
    tria.getSquare();
    var circ = Circle(5);
    circ.getSquare();
    var tutankhamun = Pyramide(3,4);
    tutankhamun.getSquare();
