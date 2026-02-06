import AwardWinningWebsite from "@/assets/images/Macbook-Air-award-winning-website-lime.vercel.app.png";
import Rag from "@/assets/images/Macbook-Air-rag.saintengineerofficial.online.png";
import ReactLibrary from "@/assets/images/Macbook-Air-library.saintengineerofficial.online.png";
import TotoAI from "@/assets/images/Macbook-Air-totoai.saintengineerofficial.online.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2026",
    title: "AI Chat + Notes",
    results: [
      { title: "AISDK + NextJS + TailwindCSS + AI Elements + AI Gateway + Hono + Prisma" },
      { title: "AI 对话与知识笔记平台" },
      { title: "集成多模型与工具调用，支持流式对话、可解释工具结果与笔记管理，面向知识检索与整理场景" },
    ],
    link: "https://totoai.saintengineerofficial.online/",
    image: TotoAI,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Deep Research Web RAG Agent",
    results: [
      { title: "AISDK + NextJS + TailwindCSS + OpenRouter + TailwindCSS + exa-js" },
      { title: "自动化检索 + 报告生成" },
      { title: "基于 AI SDK，用户输入主题，系统先自动提问补充信息，再基于回答触发深度研究，实时展示研究步骤和引用来源，并生成可下载的报告" },
    ],
    link: "https://rag.saintengineerofficial.online/",
    image: Rag,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "GSAP Work",
    results: [{ title: "NextJs + TailwindCSS + Gsap" }, { title: "支持多端展示的响应式网站" }, { title: "Gsap开发的炫酷的动画效果" }],
    link: "https://award-winning-website-lime.vercel.app/",
    image: AwardWinningWebsite,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Library(Radix UI/Next)",
    results: [{ title: "NextJs + React + TypeScript + Dumi + Jest " }, { title: "一系列移动端常用的组件，包括布局、输入框、导航等" }, { title: "组件都提供了丰富的配置选项和样式自定义" }],
    link: "https://library.saintengineerofficial.online/",
    image: ReactLibrary,
  },
];

export const ProjectsSection = () => {
  return (
    <section id='projects' className='pb-16 lg:py-24'>
      <div className='container'>
        <SectionHeader title='Featured Projects' eyebrow='Real-world Results' description='See how I had transformed concepts into engaging digital experiences.' />
        <div className='flex flex-col gap-20 mt-10 md:mt-20'>
          {portfolioProjects.map((project, index) => (
            <Card key={project.title} className='px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky' style={{ top: `calc(64px + ${index * 40}px)` }}>
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='inline-flex font-bold uppercase tracking-widest text-sm bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent'>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className='font-serif text-2xl mt-2 md:text-4xl md:mt-5'>{project.title}</h3>
                  <hr className='border-t-2 border-white/5 mt-4 md:mt-5' />
                  <ul className='mt-4 flex flex-col gap-4 md:mt-5'>
                    {project.results.map(result => (
                      <li key={result.title} className='flex gap-2 text-sm text-white/50 md:text-base'>
                        <CheckCircleIcon className='size-5 md:size-6' />
                        <span className='flex-1'>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target='_blank'>
                    <button className='bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
                      <span>Visit Live Project</span>
                      <ArrowRightIcon className='size-4' />
                    </button>
                  </a>
                </div>
                <div className='relative'>
                  <Image src={project.image} alt={project.title} className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none' />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
