'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const ServiceSummarySection = () => {
  const sectionRef = useRef<HTMLElement | null>(null)

  const title1Ref = useRef<HTMLDivElement | null>(null)
  const title2Ref = useRef<HTMLDivElement | null>(null)
  const title3Ref = useRef<HTMLDivElement | null>(null)
  const title4Ref = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      if (!title1Ref.current || !title2Ref.current || !title3Ref.current || !title4Ref.current) return

      gsap.to(title1Ref.current, {
        xPercent: 20,
        scrollTrigger: {
          trigger: title1Ref.current,
          scrub: true,
        },
      })

      gsap.to(title2Ref.current, {
        xPercent: -20,
        scrollTrigger: {
          trigger: title2Ref.current,
          scrub: true,
        },
      })

      gsap.to(title3Ref.current, {
        xPercent: 60,
        scrollTrigger: {
          trigger: title3Ref.current,
          scrub: true,
        },
      })

      gsap.to(title4Ref.current, {
        xPercent: -100,
        scrollTrigger: {
          trigger: title4Ref.current,
          scrub: true,
        },
      })
    },
    { scope: sectionRef } //把 GSAP context 限制在这个 section
  )

  return (
    <section
      ref={sectionRef}
      className="my-20 overflow-hidden font-light leading-snug text-center text-3xl"
    >
      <div ref={title1Ref}>
        <p>Architucture</p>
      </div>

      <div ref={title2Ref} className="flex items-center justify-center gap-3 translate-x-16">
        <p className="font-normal">Development</p>
        <div className="w-10 h-1 md:w-32" />
        <p>Deployment</p>
      </div>

      <div ref={title3Ref} className="flex items-center justify-center gap-3 -translate-x-48">
        <p>APIs</p>
        <div className="w-10 h-1 md:w-32" />
        <p className="italic">Frontends</p>
        <div className="w-10 h-1 md:w-32" />
        <p>Scalability</p>
      </div>

      <div ref={title4Ref} className="translate-x-48">
        <p>Databases</p>
      </div>
    </section>
  )
}

export default ServiceSummarySection
