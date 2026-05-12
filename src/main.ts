import { Game } from "./game/Game";
import { renderLives } from "./ui/lives";

const canvas = document.getElementById("game-canvas");

if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error("Canvas not found");
}

canvas.width = 720;
canvas.height = 650;

const ctx = canvas.getContext("2d");

if (!ctx) {
  throw new Error("2D context not supported");
}

export const game = new Game(canvas, ctx);

let animationId: number | null = null;
let isGameOver = false;

export function initCanvas() {
  renderLives();
  game.draw();
}

initCanvas();

function gameLoop() {
  if (isGameOver) {
    return;
  }

  game.draw();
  game.update();

  animationId = requestAnimationFrame(gameLoop);
}

gameLoop();

export function stopGame() {
  isGameOver = true;

  if (animationId) {
    cancelAnimationFrame(animationId);
  }
}

export function restartGame() {
  isGameOver = false;

  game.reset();

  gameLoop();
}
