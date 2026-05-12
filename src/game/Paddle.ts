export class Paddle {
    width = 120;
    height = 20;

    x = 300;
    y = 550;

    moveLeft = false;
    moveRight = false;

    speed = 8;

    constructor(public canvasWidth: number) {
        this.x = (canvasWidth - this.width) / 2;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#23395d";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        if (this.moveLeft) {
            this.x -= this.speed;
        }

        if (this.moveRight) {
            this.x += this.speed;
        }

        this.x = Math.max(0, Math.min(this.x, this.canvasWidth - this.width));
    }

    reset() {
        this.x = (this.canvasWidth / 2) - (this.width / 2);
    }
}
