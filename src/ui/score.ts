const scoreElement = document.querySelector(".score");

let score = 0;

if (!scoreElement) {
    throw new Error("UI elements not found");
}

export function updateScore(points: number) {
    score += points;
    scoreElement!.textContent = `Score: ${score}`;
}

export function resetScore() {
    score = 0;
    scoreElement!.textContent = `Score: ${score}`;
}
