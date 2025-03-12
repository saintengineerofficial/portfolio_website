import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg';

const links = [
  { name: 'GitHub', href: 'https://github.com/saintengineerofficial' },
  { name: '稀土掘金', href: 'https://juejin.cn/user/1864415033966120/posts' },
  { name: '18025252853', href: '#' },
  { name: 'zhihao_cai@163.com', href: 'mailto:zhihao_cai@163.com?subject=如果您觉得我符合贵公司技术要求,您可以向我发送面试邀请,感谢' },
]

export const Footer = () => {
  return <footer className="relative overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -z-10 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom,black,transparent)]"></div>
    <div className="container">
      <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between gap-8 items-center">
        <div className="text-white/40">© 2025 - All rights reserved</div>
        <nav className="flex flex-col md:flex-row items-center gap-4 ">
          {links.map((link) => (
            <a href={link.href} target="_blank" key={link.name} className="inline-flex items-center gap-1.5 cursor-pointer">
              <span className="font-semibold">{link.name}</span>
              <ArrowRightIcon className="size-4" />
            </a>
          ))}
        </nav>
      </div>
    </div>
  </footer>;
};
