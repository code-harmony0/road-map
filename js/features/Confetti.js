/**
 * Confetti Module
 * Visual celebration effects
 */

const COLORS = ['#3b82f6', '#8b5cf6', '#f59e0b', '#10b981'];
const PARTICLE_COUNT = 60;

/**
 * Shoot confetti celebration
 */
export function shootConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;

  canvas.style.display = 'block';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext('2d');
  const particles = createParticles(canvas.width, canvas.height);

  let animationId;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.2; // gravity
      p.life -= 0.01;
      p.rot += 5;

      if (p.life > 0 && p.y < canvas.height) {
        alive = true;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    if (alive) {
      animationId = requestAnimationFrame(draw);
    } else {
      canvas.style.display = 'none';
    }
  }

  draw();
}

/**
 * Create confetti particles
 * @param {number} width - Canvas width
 * @param {number} height - Canvas height
 * @returns {Array} Particle objects
 */
function createParticles(width, height) {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: -20,
    vx: (Math.random() - 0.5) * 8,
    vy: Math.random() * 5 + 2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: Math.random() * 8 + 4,
    life: 1,
    rot: Math.random() * 360
  }));
}
