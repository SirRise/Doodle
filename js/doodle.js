export default class Doodle {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
    }

    draw(context) {
        context.fillStyle = '#01df01';
        context.fillRect(this.x, this.y, this.width/2, this.width/2);
    }
}