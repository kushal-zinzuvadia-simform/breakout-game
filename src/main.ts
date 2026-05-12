import { Game } from "./game/Game";

// Draw lives
const livesContainer = document.querySelector(".lives");
const lives = 3;

for (let life = 0; life < lives; life++) {
  const life = document.createElement("img");
  life.src = "./src/assets/heart.png";
  life.classList.add("life-icon");

  livesContainer?.appendChild(life);
}

// Init Canvas
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

const game = new Game(canvas, ctx);

function gameLoop() {
  game.draw();
  game.update();
  requestAnimationFrame(gameLoop);
}

gameLoop();