var canvas = document.getElementById('histogram');
var ctx = canvas.getContext('2d');

var Circle = function () {
    this.color;
    this.x;
    this.y;
    this.radius;
    this.draw = function (ctx,color,x,y,radius) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,true);
        ctx.fill();
        ctx.closePath();

    }
    }
var planet = new Circle(ctx);
planet.color = 'blue';
planet.y = 450;
planet.x = 400;
planet.radius = 100;
planet.draw(ctx,planet.color);
