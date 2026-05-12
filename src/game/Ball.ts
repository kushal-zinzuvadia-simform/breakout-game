import type { Paddle } from "./Paddle";
import { loseLife } from "../ui/lives";

export class Ball {
    x = 220;
    y = 400;

    radius = 10;

    dx = 3;
    dy = 3;

    constructor(
        public canvasWidth: number,
        public canvasHeight: number
    ) { }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ef3340";
        ctx.fill();

        ctx.closePath();
    }

    update(paddle: Paddle) {
        this.x += this.dx;
        this.y += this.dy;

        // Wall collision
        if (this.x - this.radius < 0 || this.x + this.radius > this.canvasWidth) {
            this.dx *= -1;
        }

        if (this.y - this.radius < 0) {
            this.dy *= -1;
        }

        // Paddle collision
        if ((this.x + this.radius) > paddle.x &&
            (this.x - this.radius) < (paddle.x + paddle.width) &&
            (this.y + this.radius) >= paddle.y &&
            (this.y - this.radius) <= (paddle.y + paddle.height) &&
            this.dy > 0
        ) {
            this.y = paddle.y - this.radius;
            this.dy *= -1;
        }

        // Floor collision
        if (this.y - this.radius > this.canvasHeight) {
            this.reset();

            loseLife();
        }
    }

    reset() {
        this.x = 220;
        this.y = 400;

        this.dx = 3;
        this.dy = 3;
    }
}
