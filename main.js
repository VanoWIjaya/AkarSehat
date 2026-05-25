document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
      threshold: 0.1,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);
  
    const animateTargets = document.querySelectorAll(
      ".main-container",
    );
    animateTargets.forEach((target) => {
      target.style.opacity = "0";
      target.style.transform = "translateY(30px)";
      target.style.transition =
        "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      observer.observe(target);
    });
  });