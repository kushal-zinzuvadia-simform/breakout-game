import type { Paddle } from "./Paddle";

export class Ball {
    x = 300;
    y = 400;

    radius = 10;

    dx = 3;
    dy = -3;

    constructor(
        public canvasWidth: number,
        public canvasHeight: number
    ) {
        this.x = (canvasWidth / 2);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ef3340";
        ctx.fill();

        ctx.closePath();
    }

    update(paddle: Paddle) {
        this.x += this.dx;
        this.y -= this.dy;

        // Wall collision
        if (this.x - this.radius < 0 || this.x + this.radius > this.canvasWidth) {
            this.dx *= -1;
        }

        if (this.y - this.radius < 0) {
            this.dy *= -1;
        }

        // Paddle collision
        if (this.x >= paddle.x && this.x < (paddle.x + paddle.width) && (this.y + this.radius) >= paddle.y && (this.y + this.radius) < (paddle.y + paddle.height)) {
            this.dy *= -1;
        }

        // Floor collision
        if (this.y > (this.canvasHeight)) {
            this.x = (this.canvasWidth / 2);
            this.y = 300;

            // Reduce lives remaining
        }
    }
}
