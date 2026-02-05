'use client'
import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg'

export const ContactSection = () => {
  const handleGoEmail = () => {
    window.location.href = 'mailto:saintengineerofficial@gmail.com?subject=如果您觉得我符合贵公司技术要求,您可以向我发送面试邀请,感谢'
  }
  return <div id='contact' className="py-16 pt-12 lg:py-24 lg:pt-20">
    <div className="container">
      <div className="bg-gradient-to-r from-emerald-500 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
        <div className="absolute inset-0 opacity-5 -z-10" style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif">Lets create something amazing together</h2>
            <p className="text-sm md:text-base mt-2">Ready to bring your ideas to life? Lets discuss your project and how I can help you achieve your goals.</p>
          </div>
          <div onClick={handleGoEmail}>
            <button className="inline-flex items-center gap-2 text-white bg-gray-900 px-4 h-12 rounded-xl w-max border border-gray-900 group">
              <span className="font-semibold">Contact Me</span>
              <ArrowRightIcon className="size-4 group-hover:rotate-45 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
