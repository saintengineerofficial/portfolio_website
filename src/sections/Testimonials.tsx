import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "刘**",
    position: "后端开发工程师",
    text: "Saint 在将我们的网站转变为强大的营销工具方面发挥了重要作用。他对细节的关注和对我们品牌的理解能力非常出色。我们对结果感到非常满意！",
    avatar: memojiAvatar1,
  },
  {
    name: "谢**",
    position: "产品经理",
    text: "与 Saint 合作非常愉快。他在前端开发方面的专业知识使我们的设计以我们从未想象过的方式栩栩如生。该网站超出了我们的预期。",
    avatar: memojiAvatar2,
  },
  {
    name: "蔡**",
    position: "项目组长",
    text: "Saint 创造无缝用户体验的能力无与伦比。自推出新设计以来，我们的网站转化率显著提高。我们非常高兴。",
    avatar: memojiAvatar3,
  },
  {
    name: "谭**",
    position: "前端负责人",
    text: "Saint 是一位真正的前端人才。他将我们复杂的产品改造成直观且引人入胜的用户界面。我们已经看到了客户的积极反馈。",
    avatar: memojiAvatar4,
  },
  {
    name: "后端开发工程师",
    position: "陈**",
    text: "Saint 在我们网站上的工作非常出色。他是一位才华横溢的开发人员，也是一位出色的沟通者。我们强烈推荐他。",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24">
    <div className="container">
      <SectionHeader title="What Our Clients Say about Me" eyebrow="Happy Clients" description="Dont just take my word for it, here are some of the things my clients have said about me" />
      <div className="mt-12 md:mt-20 py-4 -my-4 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-8 pr-8 flex-none animate-more-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {
                testimonials.map((testimonial) => (
                  <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition-all duration-300">
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full overflow-hidden flex-shrink-0">
                        <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:text-base md:mt-6">{testimonial.text}</p>
                  </Card>
                ))
              }
            </Fragment>
          ))
          }
        </div>
      </div>
    </div>
  </div>;
};
