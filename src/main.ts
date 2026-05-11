const bricksContainer = document.getElementById("bricks");
const livesContainer = document.querySelector(".lives");

if (!bricksContainer) {
  throw new Error("Bricks container not found");
}

const rows = 7;
const cols = 8;
const lives = 3;

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const brick = document.createElement("div");
    brick.classList.add("brick");
    bricksContainer.appendChild(brick);
  }
}

for (let life = 0; life < lives; life++) {
  const life = document.createElement("img");
  life.src = "./src/assets/heart.png";
  life.classList.add("life-icon");

  livesContainer?.appendChild(life);
}
