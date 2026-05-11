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









const cards = document.querySelectorAll(".card");

let active = 2; // центральная карточка

function render() {
  cards.forEach((card, i) => {
    let offset = i - active;

    // бесконечный цикл
    if (offset < -2) offset += cards.length;
    if (offset > 2) offset -= cards.length;

    // скрытые карты
    if (offset < -2 || offset > 2) {
      card.style.opacity = 0;
      card.style.transform = "translate(-50%, -50%) scale(0.6)";
      return;
    }

    card.style.opacity = 1;

    // 🟡 ЦЕНТР
    if (offset === 0) {
      card.style.transform = `
        translate(-50%, -50%)
        translateX(0px)
        translateY(0px)
        scale(1.15)
        rotate(0deg)
      `;
      card.style.zIndex = 10;
    }

    // 🔵 ЛЕВО БЛИЖНЯЯ
    else if (offset === -1) {
      card.style.transform = `
        translate(-50%, -50%)
        translateX(-190px)
        translateY(-20px)
        scale(0.95)
        rotate(-12deg)
      `;
      card.style.zIndex = 9;
    }

    // 🔵 ПРАВА БЛИЖНЯЯ
    else if (offset === 1) {
      card.style.transform = `
        translate(-50%, -50%)
        translateX(190px)
        translateY(-20px)
        scale(0.95)
        rotate(12deg)
      `;
      card.style.zIndex = 9;
    }

    // 🔵 ЛЕВА ДАЛЬНЯЯ
    else if (offset === -2) {
      card.style.transform = `
        translate(-50%, -50%)
        translateX(-320px)
        translateY(-45px)
        scale(0.85)
        rotate(-20deg)
      `;
      card.style.zIndex = 8;
    }

    // 🔵 ПРАВА ДАЛЬНЯЯ
    else if (offset === 2) {
      card.style.transform = `
        translate(-50%, -50%)
        translateX(320px)
        translateY(-45px)
        scale(0.85)
        rotate(20deg)
      `;
      card.style.zIndex = 8;
    }
  });
}

// 🔁 автоматическое переключение
setInterval(() => {
  active = (active + 1) % cards.length;
  render();
}, 2200);

// первый рендер
render();