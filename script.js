document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 10; 
  const y = (e.clientY / window.innerHeight) * 10;
  document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});
