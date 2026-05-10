import type { GameState } from "../types";

export class WildernessCanvas {
  private readonly canvas: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D;
  private state: GameState | null = null;
  private startTime = performance.now();
  private frame = 0;
  private readonly handleResize = () => this.resize();

  constructor(canvas: HTMLCanvasElement) {
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Canvas rendering is unavailable.");
    }

    this.canvas = canvas;
    this.context = context;
    this.resize();
    window.addEventListener("resize", this.handleResize);
  }

  setState(state: GameState): void {
    this.state = state;
  }

  start(): void {
    const draw = () => {
      this.render(performance.now());
      this.frame = window.requestAnimationFrame(draw);
    };
    draw();
  }

  stop(): void {
    window.cancelAnimationFrame(this.frame);
    window.removeEventListener("resize", this.handleResize);
  }

  private resize(): void {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    this.canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    this.context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  private render(now: number): void {
    const ctx = this.context;
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    const t = (now - this.startTime) / 1000;

    const sky = ctx.createLinearGradient(0, 0, 0, height);
    sky.addColorStop(0, "#151915");
    sky.addColorStop(0.5, "#26322a");
    sky.addColorStop(1, "#1c1712");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, width, height);

    this.drawMoon(ctx, width, height, t);
    this.drawFog(ctx, width, height, t);
    this.drawForestLayer(ctx, width, height, 0.68, "#121711", 0.35, t);
    this.drawForestLayer(ctx, width, height, 0.78, "#0c100d", 0.8, t + 7);
    this.drawGround(ctx, width, height);

    if (this.state?.buildings.campfire) {
      this.drawCampfire(ctx, width, height, t);
    } else {
      this.drawColdAsh(ctx, width, height, t);
    }
  }

  private drawMoon(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    t: number
  ): void {
    const x = width * 0.78;
    const y = height * 0.22 + Math.sin(t * 0.08) * 3;
    const radius = Math.max(18, Math.min(width, height) * 0.08);
    const glow = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius * 3.6);
    glow.addColorStop(0, "rgba(234, 221, 179, 0.34)");
    glow.addColorStop(1, "rgba(234, 221, 179, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, radius * 3.6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(238, 226, 188, 0.76)";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawFog(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    t: number
  ): void {
    ctx.save();
    ctx.globalAlpha = 0.18;
    ctx.fillStyle = "#d5d0bf";
    for (let i = 0; i < 4; i += 1) {
      const y = height * (0.48 + i * 0.09);
      const drift = ((t * (8 + i * 2) + i * 140) % (width + 260)) - 130;
      ctx.beginPath();
      ctx.ellipse(drift, y, 150 + i * 38, 16 + i * 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(drift - width * 0.55, y + 8, 180, 15, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  private drawForestLayer(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    baseline: number,
    color: string,
    alpha: number,
    t: number
  ): void {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;

    const groundY = height * baseline;
    const count = Math.ceil(width / 42) + 2;
    for (let i = -1; i < count; i += 1) {
      const x = i * 42 + Math.sin(i * 2.3 + t * 0.2) * 4;
      const treeHeight = 54 + ((i * 31) % 44);
      ctx.beginPath();
      ctx.moveTo(x, groundY - treeHeight);
      ctx.lineTo(x - 22, groundY);
      ctx.lineTo(x + 22, groundY);
      ctx.closePath();
      ctx.fill();

      ctx.fillRect(x - 3, groundY - 18, 6, 30);
    }

    ctx.restore();
  }

  private drawGround(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    const ground = ctx.createLinearGradient(0, height * 0.72, 0, height);
    ground.addColorStop(0, "#1f2117");
    ground.addColorStop(1, "#12110d");
    ctx.fillStyle = ground;
    ctx.fillRect(0, height * 0.72, width, height * 0.28);

    ctx.strokeStyle = "rgba(208, 177, 113, 0.12)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 10; i += 1) {
      const y = height * (0.77 + i * 0.025);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.quadraticCurveTo(width * 0.5, y + (i % 2 === 0 ? 7 : -5), width, y + 3);
      ctx.stroke();
    }
  }

  private drawColdAsh(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    t: number
  ): void {
    const x = width * 0.5;
    const y = height * 0.82;
    ctx.fillStyle = "rgba(160, 152, 132, 0.2)";
    ctx.beginPath();
    ctx.ellipse(x, y, 38 + Math.sin(t) * 2, 9, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(210, 194, 148, 0.32)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x - 32, y - 1);
    ctx.lineTo(x + 30, y + 3);
    ctx.moveTo(x - 18, y + 5);
    ctx.lineTo(x + 22, y - 5);
    ctx.stroke();
  }

  private drawCampfire(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    t: number
  ): void {
    const x = width * 0.5;
    const y = height * 0.82;
    const flicker = Math.sin(t * 12) * 0.12 + Math.sin(t * 19) * 0.08;
    const glow = ctx.createRadialGradient(x, y - 10, 4, x, y - 8, 110);
    glow.addColorStop(0, "rgba(255, 194, 92, 0.46)");
    glow.addColorStop(1, "rgba(255, 116, 45, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y - 8, 110, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#5d4730";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(x - 30, y + 7);
    ctx.lineTo(x + 32, y - 1);
    ctx.moveTo(x - 24, y - 2);
    ctx.lineTo(x + 24, y + 7);
    ctx.stroke();

    ctx.fillStyle = "#f2bb63";
    ctx.beginPath();
    ctx.moveTo(x, y - 56 - flicker * 18);
    ctx.bezierCurveTo(x - 24, y - 25, x - 8, y - 8, x, y - 3);
    ctx.bezierCurveTo(x + 16, y - 17, x + 22, y - 34, x, y - 56 - flicker * 18);
    ctx.fill();

    ctx.fillStyle = "#d94d2f";
    ctx.beginPath();
    ctx.moveTo(x + 2, y - 38 + flicker * 8);
    ctx.bezierCurveTo(x - 11, y - 20, x - 4, y - 5, x + 2, y - 2);
    ctx.bezierCurveTo(x + 13, y - 17, x + 14, y - 27, x + 2, y - 38 + flicker * 8);
    ctx.fill();
  }
}
