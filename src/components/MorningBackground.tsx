import { useEffect, useRef } from "react";

interface Bird {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  wingPhase: number;
}

const MorningBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const birds: Bird[] = [];
    const birdCount = 15;

    // Initialize birds
    for (let i = 0; i < birdCount; i++) {
      birds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.6, // Keep birds in upper 60% of screen
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 15 + 10,
        wingPhase: Math.random() * Math.PI * 2,
      });
    }

    const drawBird = (bird: Bird) => {
      ctx.save();
      ctx.translate(bird.x, bird.y);

      // Determine bird direction
      if (bird.vx < 0) {
        ctx.scale(-1, 1);
      }

      // Wing flap animation
      const wingAngle = Math.sin(bird.wingPhase) * 0.5;

      // Bird body (simple V shape)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.6)"; // Blue color
      ctx.lineWidth = 2;
      ctx.lineCap = "round";

      // Left wing
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-bird.size * Math.cos(wingAngle), -bird.size * Math.sin(wingAngle) - bird.size * 0.3);
      ctx.stroke();

      // Right wing
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(bird.size * Math.cos(wingAngle), -bird.size * Math.sin(wingAngle) - bird.size * 0.3);
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw soft clouds
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      for (let i = 0; i < 5; i++) {
        const x = (Date.now() / 5000 + i * 0.2) % 1.2 * canvas.width - canvas.width * 0.1;
        const y = 100 + i * 80;
        ctx.beginPath();
        ctx.arc(x, y, 60, 0, Math.PI * 2);
        ctx.arc(x + 50, y, 80, 0, Math.PI * 2);
        ctx.arc(x + 100, y, 60, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw birds
      birds.forEach((bird) => {
        bird.x += bird.vx;
        bird.y += bird.vy;
        bird.wingPhase += 0.15;

        // Boundary checks with wrapping
        if (bird.x < -50) bird.x = canvas.width + 50;
        if (bird.x > canvas.width + 50) bird.x = -50;
        if (bird.y < -50) bird.y = canvas.height * 0.6;
        if (bird.y > canvas.height * 0.6) bird.y = -50;

        drawBird(bird);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-gradient-to-b from-sky-200 via-blue-100 to-white"
    />
  );
};

export default MorningBackground;
