import { stopGame, restartGame } from "../main";
import { resetScore } from "./score";

const livesElement = document.querySelector(".lives");
let lives = 3;

if (!livesElement) {
    throw new Error("UI elements not found");
}

export function renderLives() {
    livesElement!.innerHTML = "";

    for (let i = 0; i < lives; i++) {
        const heart = document.createElement("img");

        heart.src = "src/assets/heart.png";
        heart.alt = "Life";

        heart.classList.add("life-icon");

        livesElement!.appendChild(heart);
    }
}

export function loseLife() {
    lives--;

    renderLives();

    if (lives <= 0) {
        gameOver();
    }
}

function gameOver() {
    stopGame();

    setTimeout(() => {
        alert("Game Over");

        lives = 3;

        renderLives();

        resetScore();

        restartGame();
    }, 100);
}
