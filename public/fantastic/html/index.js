document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(SplitText);
  console.log("🚀 ~ gsap:", gsap);

  const splitTextIntoLines = (selector, options = {}) => {
    const defaults = {
      type: "lines",
      mask: "lines",
      linesClass: "line",
      ...options,
    };

    return SplitText.create(selector, defaults);
  };

  splitTextIntoLines(".preloader-copy p");

  splitTextIntoLines(".preloader-counter p");

  gsap.set(["nav", ".hero-img", ".hero-content"], { y: "35svh" });

  const animateCounter = (selector, duration = 4, delay = 0) => {
    const el = document.querySelector(selector);

    // 决定总跳数：3 ~ 5 次
    const totalSteps = Math.floor(Math.random() * 3) + 3;

    // 每一步的时间
    const stepDuration = (duration * 1000) / totalSteps;

    let step = 0;

    const jump = () => {
      step++;

      // 计算当前目标值
      const value = step === totalSteps ? 100 : Math.min(Math.floor((step / totalSteps) * 100 + Math.random() * 8), 99);

      el.textContent = value.toString().padStart(2, "0");

      if (step < totalSteps) {
        setTimeout(jump, stepDuration);
      }
    };

    setTimeout(jump, delay * 1000);
  };

  animateCounter(".preloader-counter p", 4.5, 1);

  const tl = gsap.timeline();
  tl.to([".preloader-copy p .line", ".preloader-counter p .line"], {
    y: "0%",
    duration: 1,
    stagger: 0.075,
    ease: "power3.out",
    delay: 1,
  })
    .to(
      ".preloader-revealer",
      {
        scale: 0.1,
        duration: 0.75,
        ease: "power2.out",
      },
      "<",
    )
    .to(".preloader-revealer", {
      scale: 0.25,
      duration: 1,
      ease: "power3.out",
    })
    .to(".preloader-revealer", {
      scale: 0.5,
      duration: 0.75,
      ease: "power3.out",
    })
    .to(".preloader-revealer", {
      scale: 0.75,
      duration: 0.5,
      ease: "power2.out",
    })
    .to(".preloader-revealer", {
      scale: 1,
      duration: 1,
      ease: "power3.out",
    })
    .to(
      ".preloader",
      {
        clipPath: "polygon(0% 0%, 100% 0%,100% 0%,0% 0%)",
        duration: 1.25,
        ease: "power3.out",
      },
      "-=1",
    )
    .to(
      ["nav", ".hero-img", ".hero-content"],
      {
        y: "0%",
        duration: 1.25,
        ease: "power3.out",
      },
      "<",
    );
});
