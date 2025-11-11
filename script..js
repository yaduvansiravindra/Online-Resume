const sections = document.querySelectorAll("section");
  const revealOnScroll = () => {
    const trigger = window.innerHeight / 1.2;
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < trigger) {
        sec.style.animation = "fadeIn 0.8s ease forwards";
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);