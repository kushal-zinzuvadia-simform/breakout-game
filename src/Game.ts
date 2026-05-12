import { Brick } from "./Brick";

export class Game {
    bricks: Brick[] = [];

    constructor(
        private canvas: HTMLCanvasElement,
        private ctx: CanvasRenderingContext2D
    ) {
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

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (const brick of this.bricks) {
            brick.draw(this.ctx);
        }
    }
}