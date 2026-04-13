<script lang="ts">
  import { onMount } from 'svelte';

  type Icon = {
    x: number;
    y: number;
    z: number;
    id: number;
  };

  type Props = {
    images?: string[];
    class?: string;
  };

  let { images = [], class: className = '' }: Props = $props();

  let canvasRef = $state<HTMLCanvasElement | null>(null);
  let iconPositions = $state<Icon[]>([]);
  let isDragging = $state(false);
  let lastMousePos = $state({ x: 0, y: 0 });
  let mousePos = $state({ x: 0, y: 0 });
  let targetRotation = $state<{
    x: number;
    y: number;
    startX: number;
    startY: number;
    startTime: number;
    duration: number;
  } | null>(null);

  let animationFrameId = 0;
  let rotationRef = { x: 0, y: 0 };
  let iconCanvases: HTMLCanvasElement[] = [];
  let imagesLoaded: boolean[] = [];

  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
  }

  $effect(() => {
    if (!images.length || typeof document === 'undefined') return;

    imagesLoaded = new Array(images.length).fill(false);

    iconCanvases = images.map((src, index) => {
      const offscreen = document.createElement('canvas');
      offscreen.width = 44;
      offscreen.height = 44;
      const offCtx = offscreen.getContext('2d');

      if (offCtx) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = src;
        img.onload = () => {
          offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
          offCtx.beginPath();
          offCtx.arc(22, 22, 22, 0, Math.PI * 2);
          offCtx.closePath();
          offCtx.clip();
          offCtx.drawImage(img, 0, 0, 44, 44);
          imagesLoaded[index] = true;
        };
      }

      return offscreen;
    });
  });

  $effect(() => {
    const nextIcons: Icon[] = [];
    const count = images.length;

    if (!count) {
      iconPositions = [];
      return;
    }

    const offset = 2 / count;
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i += 1) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;

      nextIcons.push({
        x: Math.cos(phi) * r * 104,
        y: y * 104,
        z: Math.sin(phi) * r * 104,
        id: i
      });
    }

    iconPositions = nextIcons;
  });

  function handleMouseDown(event: MouseEvent) {
    const canvas = canvasRef;
    const rect = canvas?.getBoundingClientRect();
    if (!canvas || !rect) return;

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    for (const icon of iconPositions) {
      const cosX = Math.cos(rotationRef.x);
      const sinX = Math.sin(rotationRef.x);
      const cosY = Math.cos(rotationRef.y);
      const sinY = Math.sin(rotationRef.y);

      const rotatedX = icon.x * cosY - icon.z * sinY;
      const rotatedZ = icon.x * sinY + icon.z * cosY;
      const rotatedY = icon.y * cosX + rotatedZ * sinX;
      const screenX = canvas.width / 2 + rotatedX;
      const screenY = canvas.height / 2 + rotatedY;
      const scale = (rotatedZ + 210) / 310;
      const radius = 22 * scale;
      const dx = x - screenX;
      const dy = y - screenY;

      if (dx * dx + dy * dy < radius * radius) {
        const targetX = -Math.atan2(icon.y, Math.sqrt(icon.x * icon.x + icon.z * icon.z));
        const targetY = Math.atan2(icon.x, icon.z);
        const distance = Math.sqrt(
          Math.pow(targetX - rotationRef.x, 2) + Math.pow(targetY - rotationRef.y, 2)
        );

        targetRotation = {
          x: targetX,
          y: targetY,
          startX: rotationRef.x,
          startY: rotationRef.y,
          startTime: performance.now(),
          duration: Math.min(1800, Math.max(700, distance * 900))
        };
        return;
      }
    }

    isDragging = true;
    lastMousePos = { x: event.clientX, y: event.clientY };
  }

  function handleMouseMove(event: MouseEvent) {
    const rect = canvasRef?.getBoundingClientRect();
    if (rect) {
      mousePos = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    }

    if (!isDragging) return;

    const deltaX = event.clientX - lastMousePos.x;
    const deltaY = event.clientY - lastMousePos.y;

    rotationRef = {
      x: rotationRef.x + deltaY * 0.002,
      y: rotationRef.y + deltaX * 0.002
    };

    lastMousePos = { x: event.clientX, y: event.clientY };
  }

  function handleMouseUp() {
    isDragging = false;
  }

  onMount(() => {
    const canvas = canvasRef;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
      const dx = mousePos.x - centerX;
      const dy = mousePos.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const speed = 0.0025 + (distance / maxDistance) * 0.008;

      if (targetRotation) {
        const elapsed = performance.now() - targetRotation.startTime;
        const progress = Math.min(1, elapsed / targetRotation.duration);
        const eased = easeOutCubic(progress);

        rotationRef = {
          x: targetRotation.startX + (targetRotation.x - targetRotation.startX) * eased,
          y: targetRotation.startY + (targetRotation.y - targetRotation.startY) * eased
        };

        if (progress >= 1) {
          targetRotation = null;
        }
      } else if (!isDragging) {
        rotationRef = {
          x: rotationRef.x + (dy / canvas.height) * speed,
          y: rotationRef.y + (dx / canvas.width) * speed
        };
      }

      for (const icon of iconPositions) {
        const cosX = Math.cos(rotationRef.x);
        const sinX = Math.sin(rotationRef.x);
        const cosY = Math.cos(rotationRef.y);
        const sinY = Math.sin(rotationRef.y);

        const rotatedX = icon.x * cosY - icon.z * sinY;
        const rotatedZ = icon.x * sinY + icon.z * cosY;
        const rotatedY = icon.y * cosX + rotatedZ * sinX;
        const scale = (rotatedZ + 210) / 310;
        const opacity = Math.max(0.22, Math.min(1, (rotatedZ + 170) / 220));
        const imageCanvas = iconCanvases[icon.id];

        ctx.save();
        ctx.translate(canvas.width / 2 + rotatedX, canvas.height / 2 + rotatedY);
        ctx.scale(scale, scale);
        ctx.globalAlpha = opacity;

        if (imageCanvas && imagesLoaded[icon.id]) {
          ctx.drawImage(imageCanvas, -22, -22, 44, 44);
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  });
</script>

<canvas
  bind:this={canvasRef}
  width={420}
  height={420}
  onmousedown={handleMouseDown}
  onmousemove={handleMouseMove}
  onmouseup={handleMouseUp}
  onmouseleave={handleMouseUp}
  class={className}
  aria-label="Interactive 3D icon cloud"
></canvas>
