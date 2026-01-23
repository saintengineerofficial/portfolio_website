"use client"
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import BookImage from '@/assets/images/book-cover.png';
import HTMLIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import ReactIcon from '@/assets/icons/react.svg';
import NextIcon from '@/assets/icons/next.svg';
import NuxtIcon from '@/assets/icons/nuxt.svg';
import VueIcon from '@/assets/icons/vue.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import MapImage from '@/assets/images/map.png';
import SmileEmoji from '@/assets/images/memoji-smile.png';
import Image from 'next/image';
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItem } from '@/components/ToolboxItem';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Toolbox = [
  { name: "React", icon: ReactIcon },
  { name: "Next", icon: NextIcon },
  { name: "Vue", icon: VueIcon },
  { name: "Nuxt", icon: NuxtIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "HTML5", icon: HTMLIcon },
  { name: "CSS3", icon: CSSIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
];

const hoobies = [
  { name: "Reading", icon: '🙌', left: '5%', top: '5%' },
  { name: "Music", icon: '🎸', left: '50%', top: '5%' },
  { name: "Gaming", icon: '🎮', left: '50%', top: '35%' },
  { name: "Coding", icon: '💻', left: '10%', top: '20%' },
  { name: "Cooking", icon: '🍳', left: '20%', top: '65%' },
  { name: "Traveling", icon: '🌍', left: '50%', top: '65%' },
]

export const AboutSection = () => {
  const constraintsRef = useRef(null);
  return <div id="about" className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader title="A Glimpse Into My World" eyebrow="About Me" description="Learn more about who I am,what I do,and what inspires me" />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader className="px-6 pt-6" title="My Reads" description="Here are my favorite books that I had read" />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={BookImage} alt="Book" />
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader title="My Toolbox" description="My favorite tools and technologies that I use to build my projects" />
            <ToolboxItem itemWrapperClassName="animate-more-left [animation-duration:20s]" Toolbox={Toolbox} />
            <ToolboxItem className="mt-6" itemWrapperClassName="animate-more-right [animation-duration:15s]" Toolbox={Toolbox} />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader title="Beyond the Code" description="Explore my journey beyond the code, from my passion for reading to my love for music and travel." />
            <div className="flex-1 relative" ref={constraintsRef}>
              {
                hoobies.map((hoobie) => (
                  <motion.div key={hoobie.name}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-500 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hoobie.left,
                      top: hoobie.top,
                    }}
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <span className="font-medium text-gray-950">{hoobie.icon}</span>
                    <span className="text-lg">{hoobie.name}</span>
                  </motion.div>
                ))
              }
            </div>
          </Card>
          <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
            <Image src={MapImage} alt="map" className="h-full w-full object-cover object-left-top" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full
          after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-sky-400  rounded-full -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-sky-400  rounded-full -z-10"></div>
              <Image src={SmileEmoji} alt="smile" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>;
};
