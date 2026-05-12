export class Brick {
    destroyed = false;

    constructor(
        public x: number,
        public y: number,
        public width: number,
        public height: number,
    ) { }

    draw(ctx: CanvasRenderingContext2D) {
        if (this.destroyed) return;

        ctx.fillStyle = "#4c7b91";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
