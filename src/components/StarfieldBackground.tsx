import { useEffect, useRef } from 'react';

const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleDirection: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.05;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.02;
        this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        // Twinkle effect
        this.opacity += this.twinkleSpeed * this.twinkleDirection;
        if (this.opacity <= 0 || this.opacity >= 1) {
          this.twinkleDirection *= -1;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Comet class
    class Comet {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      tailLength: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 3 + 2;
        this.angle = Math.PI / 4 + Math.random() * Math.PI / 4;
        this.opacity = 1;
        this.tailLength = 20;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        
        // Fade out as it moves
        if (this.y > canvas.height * 0.7) {
          this.opacity -= 0.01;
        }
      }

      draw() {
        if (!ctx || this.opacity <= 0) return;

        // Draw comet tail
        const gradient = ctx.createLinearGradient(
          this.x,
          this.y,
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(96, 165, 250, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        );
        ctx.stroke();

        // Draw comet head
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      isDead() {
        return this.y > canvas.height + 50 || this.opacity <= 0;
      }
    }

    // Create stars
    const stars: Star[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push(new Star());
    }

    // Create comets array
    const comets: Comet[] = [];
    let cometSpawnTimer = 0;

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(14, 18, 26, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      // Spawn new comets randomly
      cometSpawnTimer++;
      if (cometSpawnTimer > 100 && Math.random() > 0.98) {
        comets.push(new Comet());
        cometSpawnTimer = 0;
      }

      // Update and draw comets
      for (let i = comets.length - 1; i >= 0; i--) {
        comets[i].update();
        comets[i].draw();
        
        if (comets[i].isDead()) {
          comets.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: '#0e121a' }}
    />
  );
};

export default StarfieldBackground;
