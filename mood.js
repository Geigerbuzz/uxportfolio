document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById("gallery");
  
    let targetX = 0;
    let targetY = 0;
    let panX = 0;
    let panY = 0;
    let time = 0;
  
    window.onmousemove = e => {
      const mouseX = e.clientX,
            mouseY = e.clientY;
  
      const xDecimal = mouseX / window.innerWidth,
            yDecimal = mouseY / window.innerHeight;
  
      const maxX = gallery.offsetWidth - window.innerWidth,
            maxY = gallery.offsetHeight - window.innerHeight;
  
      targetX = maxX * xDecimal * -1;
      targetY = maxY * yDecimal * -1;
    };
  
    function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    }
  
    function updateGalleryPosition() {
      time += 0.01;
  
      const lagFactor = 0.1;
      panX = lerp(panX, targetX, lagFactor);
      panY = lerp(panY, targetY, lagFactor);
  
      const wobbleIntensity = 5;
      const wobbleX = wobbleIntensity * Math.sin(time);
      const wobbleY = wobbleIntensity * Math.cos(time);
  
      gallery.style.transform = `translate(${panX + wobbleX}px, ${panY + wobbleY}px)`;
  
      // Call the function again at the next available frame
      requestAnimationFrame(updateGalleryPosition);
    }
  
    // Start updating the gallery position
    updateGalleryPosition();
  });
  