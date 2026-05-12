import { Paddle } from "./Paddle";

export class Input {
    constructor(private paddle: Paddle) {
        window.addEventListener("keydown", this.keyDown)
        window.addEventListener("keyup", this.keyUp)
    }

    keyDown = (e: KeyboardEvent) => {
        if (e.key == "ArrowLeft") {
            this.paddle.moveLeft = true;
        }

        if (e.key == "ArrowRight") {
            this.paddle.moveRight = true;
        }
    }

    keyUp = (e: KeyboardEvent) => {
        if (e.key == "ArrowLeft") {
            this.paddle.moveLeft = false;
        }

        if (e.key == "ArrowRight") {
            this.paddle.moveRight = false;
        }
    }
}
