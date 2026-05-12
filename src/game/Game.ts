import { Ball } from "./Ball";
import { Brick } from "./Brick";
import { Input } from "./Input";
import { Paddle } from "./Paddle";
import { updateScore } from "../ui/score";

export class Game {
    paddle: Paddle;
    bricks: Brick[] = [];
    ball: Ball;

    constructor(
        private canvas: HTMLCanvasElement,
        private ctx: CanvasRenderingContext2D
    ) {
        this.paddle = new Paddle(canvas.width);
        new Input(this.paddle);
        this.ball = new Ball(canvas.width, canvas.height);

        this.createBricks();
    }

    createBricks() {
        const rows = 6;
        const cols = 7;

        const brickWidth = 80;
        const brickHeight = 30;

        const padding = 10;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * (brickWidth + padding) + 50;
                const y = row * (brickHeight + padding) + 40;

                this.bricks.push(new Brick(x, y, brickWidth, brickHeight));
            }
        }
    }

    update() {
        this.paddle.update();
        this.ball.update(this.paddle);

        for (const brick of this.bricks) {
            if (!brick.destroyed &&
                this.ball.x + this.ball.radius > brick.x &&
                this.ball.x - this.ball.radius < brick.x + brick.width &&
                this.ball.y + this.ball.radius > brick.y &&
                this.ball.y - this.ball.radius < brick.y + brick.height
            ) {
                brick.destroyed = true;
                this.ball.dy *= -1;
                updateScore(10);
            }
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.paddle.draw(this.ctx);
        this.ball.draw(this.ctx);

        for (const brick of this.bricks) {
            brick.draw(this.ctx);
        }
    }

    reset() {
        this.paddle.reset();
        this.ball.reset();

        this.bricks = [];

        this.createBricks();
    }
}
