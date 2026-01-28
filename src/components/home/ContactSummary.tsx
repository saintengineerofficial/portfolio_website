'use client'
import Marquee from '@/components/global/Marquee';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const items = ["Innovation", "Precision", "Trust", "Collaboration", "Excellence"];
const items2 = ["contact me", "contact me", "contact me", "contact me", "contact me"];

const ContactSummarySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center", // 当容器的“中心”对齐视口的“中心”时触发
        end: "+=800 center", // 从 start 开始，再向下滚动 800px 后结束
        scrub: 0.5, // 动画会根据滚动位置同步执行，0.5 表示延迟 0.5 秒缓冲
        // pin: true, //滚动时固定这个元素（让它 stay 在原位）
        // pinSpacing: true, //被 pin 后，页面不会跳动（会为其腾出高度空间）
        markers: false,
      }
    })
  }, [])

  return (
    <section ref={containerRef} className='flex flex-col items-center justify-between min-h-screen gap-12 mt-16'>
      <Marquee items={items} className='text-5xl' />
      <div className="overflow-hidden font-light text-center">
        <p className='text-5xl lg:text-8xl'>
          “ Let’s build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <span className="font-normal">together</span> “
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2 bg-white text-5xl"
        iconClassName="stroke-gold stroke-2 text-primary"
      />
    </section>
  )
}

export default ContactSummarySection