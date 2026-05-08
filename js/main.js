const layers = document.querySelectorAll('.layer');

let offset = 0;

function animate() {
  offset += 0.02; // МЕДЛЕННО = плавно

  layers.forEach((layer, index) => {
    const speed = 0.3 + index * 0.05;
    const movement = Math.sin(offset * speed) * (5 + index * 2);

    layer.style.transform = `translateX(${movement}px)`;
  });

  requestAnimationFrame(animate);
}

animate();