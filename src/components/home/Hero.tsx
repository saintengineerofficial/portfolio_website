'use client'
import memojiImage from '@/assets/images/memoji-computer.png'
import grainImage from '@/assets/images/grain.jpg'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import StartIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import { HeroOrbit } from '@/components/HeroOrbit'
import Image from 'next/image'

export const HeroSection = () => {

  const handleGoEmail = () => {
    window.location.href = 'mailto:zhihao_cai@163.com?subject=如果您觉得我符合贵公司技术要求,您可以向我发送面试邀请,感谢'
  }

  return <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
    <div className="absolute  inset-0 -z-30 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div className="absolute inset-0  opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
      }}> </div>
      <div className=" size-[620px] hero-ring"></div>
      <div className=" size-[820px] hero-ring"></div>
      <div className=" size-[1020px] hero-ring"></div>
      <div className=" size-[1220px] hero-ring"></div>
      <HeroOrbit size={430} rotation={-14} duration='30s' shouldSpin={true} spinDuration='3s'><SparkleIcon className="size-8 text-emerald-300/20" /></HeroOrbit>
      <HeroOrbit size={440} rotation={79} duration='32s' shouldSpin={true} spinDuration='3s'><SparkleIcon className="size-5 text-emerald-300/20" /></HeroOrbit>
      <HeroOrbit size={520} rotation={-41} duration='34s' shouldSpin={true} spinDuration='6s'><div className="size-2 rounded-full bg-emerald-300/20" /></HeroOrbit>
      <HeroOrbit size={530} rotation={178} duration='36s' shouldSpin={true} spinDuration='3s'><SparkleIcon className="size-10 text-emerald-300/20" /></HeroOrbit>
      <HeroOrbit size={550} rotation={20} duration='38s' shouldSpin={true} spinDuration='3s'><StartIcon className="size-12 text-emerald-300" /></HeroOrbit>
      <HeroOrbit size={590} rotation={98} duration='40s' shouldSpin={true} spinDuration='6s'><StartIcon className="size-8 text-emerald-300" /></HeroOrbit>
      <HeroOrbit size={650} rotation={-5} duration='42s' shouldSpin={true} spinDuration='6s'><div className="size-2 rounded-full bg-emerald-300/20" /></HeroOrbit>
      <HeroOrbit size={710} rotation={144} duration='44s' shouldSpin={true} spinDuration='3s'><SparkleIcon className="size-14 text-emerald-300/20" /></HeroOrbit>
      <HeroOrbit size={720} rotation={85} duration='46s' shouldSpin={true} spinDuration='6s'><div className="size-3 rounded-full bg-emerald-300/20" /></HeroOrbit>
      <HeroOrbit size={800} rotation={-72} duration='48s' shouldSpin={true} spinDuration='6s'><StartIcon className="size-28 text-emerald-300" /></HeroOrbit>

    </div>
    <div className="container">
      <div className="flex flex-col items-center">
        <Image src={memojiImage} className="size-[100px]" alt="memoji"></Image>
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 rounded-full animate-ping-large absolute inset-0"></div>
          </div>
          <div className="text-sm font-semibold">Saint</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
        <p className="mt-4 text-center text-sm text-white/60 md:text-lg">
          I specialize in transforming designs into funtional,high-performance web applications.Lets work together to bring your ideas to life.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore my work</span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl" onClick={handleGoEmail}>
          <span>🙌</span>
          <span className="font-semibold">Lets work together</span>
        </button>
      </div>
    </div>
  </div>;
};
