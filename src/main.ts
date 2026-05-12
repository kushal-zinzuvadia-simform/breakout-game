import { Game } from "./game/Game";
import { renderLives } from "./ui/lives";

const canvas = getCanvas();
const ctx = getContext(canvas);
const startBtn = getStartButton();

canvas.width = 720;
canvas.height = 650;

export const game = new Game(canvas, ctx);

let animationId: number | null = null;
let isGameRunning = false;

init();

function init() {
  renderLives();
  game.draw();
  bindEvents();
}

function bindEvents() {
  startBtn.addEventListener("click", startGame);
}

function gameLoop() {
  if (!isGameRunning) {
    return;
  }

  game.update();
  game.draw();

  if (game.isWon) {
    stopGame();
    restartGame();

    setTimeout(() => {
      alert("You Win!");
    }, 100);

    game.isWon = false;
    return;
  }

  animationId = requestAnimationFrame(gameLoop);
}

export function startGame() {
  if (isGameRunning) {
    return;
  }

  game.reset();
  isGameRunning = true;

  gameLoop();
}

export function stopGame() {
  isGameRunning = false;

  if (animationId !== null) {
    cancelAnimationFrame(animationId);
  }
}

export function restartGame() {
  stopGame();
  game.reset();
  game.draw();
}

function getCanvas() {
  const canvas = document.getElementById("game-canvas");

  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("Canvas not found");
  }

  return canvas;
}

function getContext(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("2D context not supported");
  }

  return ctx;
}

function getStartButton() {
  const startBtn = document.querySelector(".start-btn");

  if (!(startBtn instanceof HTMLButtonElement)) {
    throw new Error("Start button not found");
  }

  return startBtn;
}
