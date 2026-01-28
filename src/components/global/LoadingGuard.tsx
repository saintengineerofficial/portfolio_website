"use client";

import React, { useEffect, useRef, type PropsWithChildren } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

const HomeEntranceReveal = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tl: gsap.core.Timeline | null = null;
    let ctx: gsap.Context | null = null;

    if (!containerRef.current) return;

    gsap.registerPlugin(SplitText);

    const splitTextIntoLines = (selector: string, options: Record<string, unknown> = {}) => {
      const defaults = {
        type: "lines",
        mask: "lines",
        linesClass: "line",
        ...options,
      };

      SplitText.create(selector, defaults as any);
    };

    ctx = gsap.context(() => {
      splitTextIntoLines(".preloader-copy p");
      splitTextIntoLines(".preloader-counter p");

      gsap.set(".home-reveal-content", { y: "35svh" });

      const animateCounter = (selector: string, duration = 4, delay = 0) => {
        const el = document.querySelector(selector) as HTMLElement | null;
        if (!el) return;

        const totalSteps = Math.floor(Math.random() * 3) + 3;
        const stepDuration = (duration * 1000) / totalSteps;
        let step = 0;

        const jump = () => {
          step += 1;
          const value =
            step === totalSteps
              ? 100
              : Math.min(Math.floor((step / totalSteps) * 100 + Math.random() * 8), 99);

          el.textContent = value.toString().padStart(2, "0");

          if (step < totalSteps) {
            window.setTimeout(jump, stepDuration);
          }
        };

        window.setTimeout(jump, delay * 1000);
      };

      animateCounter(".preloader-counter p", 4.5, 1);

      tl = gsap.timeline();
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
          ".home-reveal-content",
          {
            y: "0%",
            duration: 1.25,
            ease: "power3.out",
          },
          "<",
        );
    }, containerRef);

    return () => {
      tl?.kill();
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full [&_.line]:translate-y-full [&_.line]:[will-change:transform]"
    >
      <div className="preloader fixed left-0 top-0 z-[50] flex h-[100svh] w-full items-center overflow-hidden bg-black px-[8px] text-white [clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] [will-change:clip-path] max-[1000px]:flex-col">
        <div className="preloader-revealer absolute left-1/2 top-1/2 z-[2] aspect-square w-full -translate-x-1/2 -translate-y-1/2 scale-0 bg-[#202a37] [will-change:transform] max-[1000px]:w-[300%]" />

        <div className="preloader-copy flex flex-1 max-[1000px]:flex-col">
          <div className="preloader-copy-col flex flex-1 max-[1000px]:items-center">
            <p className="w-3/4 text-[0.8rem] font-medium uppercase leading-none tracking-[-0.0125rem] text-white max-[1000px]:w-full">
              Handpicked collections shaped by artistry, balancing rare elements with a focus on
              purity.
            </p>
          </div>
          <div className="preloader-copy-col flex flex-1 max-[1000px]:items-center">
            <p className="w-3/4 text-[0.8rem] font-medium uppercase leading-none tracking-[-0.0125rem] text-white max-[1000px]:w-full">
              Explore timeless essentials built with care, thoughtfully designed to guide you.
            </p>
          </div>
        </div>

        <div className="preloader-counter flex flex-1 justify-end max-[1000px]:items-center">
          <p className="text-[0.8rem] font-medium uppercase leading-none tracking-[-0.0125rem] text-white">
            00
          </p>
        </div>
      </div>

      <div className="home-reveal-content">{children}</div>
    </div>
  );
};

export default HomeEntranceReveal;
