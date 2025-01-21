import grainBackground from "@/assets/images/grain.jpg";
import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

// export const Card = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
export const Card = ({ children, className, ...other }: ComponentPropsWithoutRef<'div'>) => {
  return <div
    className={twMerge("bg-gray-800 rounded-3xl relative overflow-hidden z-0 after:content-[''] after:absolute after:inset-0 after:z-10 after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:rounded-3xl after:pointer-events-none", className)}
    {...other}
  >
    <div className="absolute inset-0 -z-10 opacity-5" style={{
      backgroundImage: `url(${grainBackground.src})`,
    }}></div>
    {children}
  </div>;
};
