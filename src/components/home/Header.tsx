import Link from "next/link";

const navs = [
  { herf: '/', title: 'Home' },
  { herf: '/fantastic', title: 'GSAP Fantasy' },
  { herf: 'https://library.saintengineerofficial.online', title: 'library(Radix/Next)' },
  { herf: 'https://czh13.github.io/czh_react_ui/', title: 'library(old)' },
]

export const Header = () => {

  return (
    <div className='w-screen'>
      <div className="lg:px-20 pt-5 flex items-center justify-center lg:justify-between fixed z-10 top-3 w-full">
        <div className='flex items-center gap-10 text-white/80'>
          {
            navs.map((nav, index) => (
              <div key={index} className='relative group'>
                <Link href={nav.herf} className='no-underline text-white/80 uppercase hover:text-white transition-all'>
                  {nav.title}
                </Link>
                <div className='h-[1px] w-full bg-white/80 absolute bottom-0 left-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
              </div>
            ))
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