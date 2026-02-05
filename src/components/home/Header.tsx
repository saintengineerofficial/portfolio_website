import Link from "next/link";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { twMerge } from "tailwind-merge";


const navs = [
  { herf: '/fantastic', title: 'GSAP Fantasy(动画)' },
  { herf: '/portfolio', title: 'Portfolio(作品集)' },
  { herf: 'https://juejin.cn/user/1864415033966120/posts', title: 'Blog' },
  { herf: 'https://github.com/saintengineerofficial', title: 'Github' },
  { herf: 'https://library.saintengineerofficial.online', title: 'library(Radix UI/Next)' },
]

const urls = [
  { herf: 'https://library.saintengineerofficial.online/', title: 'library', desc: 'Radix UI + Next.js的二次封装组件库' },
  { herf: 'https://totoai.saintengineerofficial.online/', title: 'totoai', desc: '' },
  { herf: 'https://rag.saintengineerofficial.online/', title: 'Deep Research Web RAG Agent', desc: '自动化检索 + 报告生成' },
  { herf: 'https://repaid-website.vercel.app/', title: 'Landing Page', desc: '支付类官网' },
  { herf: 'https://award-winning-website-lime.vercel.app/', title: 'GSAP Work', desc: 'GSAP动画官网' },
]

export const Header = () => {

  return (
    <div className='w-screen'>
      <div className="lg:px-10 pt-5 flex items-center justify-center lg:justify-between fixed z-10 top-3 w-full">
        <div className='flex items-center gap-6 text-white/80'>
          {
            navs.map((nav, index) => {

              if (index === 1) {
                return (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <div className='relative group'>
                        <p className={twMerge('no-underline  uppercase hover:text-white transition-all text-sm cursor-pointer bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent font-semibold')}>
                          {nav.title}
                        </p>
                        <div className='h-[1px] w-full bg-white/80 absolute bottom-0 left-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 rounded-2xl border border-neutral-200/70 bg-white p-3 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.25)]">
                      <div className="grid gap-4">
                        {
                          urls.map((url, index) => (
                            <Link
                              key={index}
                              href={url.herf}
                              target="_blank"
                              className="group block space-y-2 rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-neutral-200"
                            >
                              <h4 className="leading-none font-semibold text-neutral-900 transition-colors group-hover:text-neutral-950">
                                {url.title}
                              </h4>
                              <p className="text-sm text-neutral-500 transition-colors group-hover:text-neutral-700">
                                {url.desc}
                              </p>
                            </Link>
                          ))
                        }
                      </div>
                    </PopoverContent>
                  </Popover>
                )
              }

              if (index === 4) {
                return (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <div className='relative group'>
                        <p className={twMerge('no-underline uppercase hover:text-white transition-all text-sm cursor-pointer')}>
                          {nav.title}
                        </p>
                        <div className='h-[1px] w-full bg-white/80 absolute bottom-0 left-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 rounded-2xl border border-neutral-200/70 bg-white p-3 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.25)]">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Link href={nav.herf} className="block rounded-lg px-3 py-2 font-semibold text-neutral-900 hover:bg-neutral-50">
                            library(Radix UI/Next)
                          </Link>
                        </div>
                        <div className="space-y-2">
                          <Link href='https://czh13.github.io/czh_react_ui/' className="block rounded-lg px-3 py-2 font-medium text-neutral-900 hover:bg-neutral-50">
                            library(React)
                          </Link>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                )
              }

              return (
                <div key={index} className='relative group'>
                  <Link href={nav.herf} className={twMerge('no-underline text-white/80 uppercase hover:text-white transition-all text-sm',
                    (nav.herf === '/fantastic' || nav.herf === '/portfolio') && 'bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent font-semibold')}>
                    {nav.title}
                  </Link>
                  <div className='h-[1px] w-full bg-white/80 absolute bottom-0 left-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
                </div>
              )
            })
          }
        </div>
        <div className='flex flex-col items-center gap-4 text-white/80 font-medium lg:flex-row lg:justify-center'>
          <span>+86 18025252853</span>
          <span>saintengineerofficial@gmail.com</span>
        </div>
      </div>
    </div>
  )
};
