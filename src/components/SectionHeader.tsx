import AnimatedTextLines from "@/components/global/AnimatedTextLines";

export const SectionHeader = ({ title, eyebrow, description }: { title: string, eyebrow: string, description: string }) => {
  return <>
    <div className="flex justify-center">
      <p className="uppercase font-semibold tracking-widest text-center bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">{eyebrow}</p>
    </div>
    <AnimatedTextLines
      text={title}
      className="font-serif text-3xl md:text-5xl text-center mt-6"
    />
    <AnimatedTextLines
      text={description}
      className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto"
    />
  </>;
};
