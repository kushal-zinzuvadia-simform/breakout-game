import { Game } from "./game/Game";
import { renderLives } from "./ui/lives";

const canvas = document.getElementById("game-canvas");
const startBtn = document.querySelector(".start-btn");

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("Canvas not found");
}

if (!(startBtn instanceof HTMLButtonElement)) {
  throw new Error("Start button not found");
}

canvas.width = 720;
canvas.height = 650;

const ctx = canvas.getContext("2d");

if (!ctx) {
  throw new Error("2D context not supported");
}

export const game = new Game(canvas, ctx);

let animationId: number | null = null;
let isGameRunning = false;

export function initCanvas() {
  renderLives();
  game.draw();
}

initCanvas();

function gameLoop() {
  if (!isGameRunning) {
    return;
  }

  game.draw();
  game.update();

  animationId = requestAnimationFrame(gameLoop);
}

export function stopGame() {
  isGameRunning = false;

  if (animationId) {
    cancelAnimationFrame(animationId);
  }
}

export function startGame() {
  if (isGameRunning) {
    return;
  }

  game.reset();
  isGameRunning = true;

  gameLoop();
}

export function restartGame() {
  stopGame();
  game.reset();
  game.draw();
}

startBtn.addEventListener("click", () => {
  startGame();
});
