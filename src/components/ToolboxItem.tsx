import { Fragment, type ElementType } from "react"
import { TechIcon } from "./TechIcon"
import { twMerge } from "tailwind-merge"


interface ToolboxItemProps {
  Toolbox: { name: string, icon: ElementType }[],
  className?: string,
  itemWrapperClassName?: string
}

export const ToolboxItem = ({ Toolbox, className, itemWrapperClassName }: ToolboxItemProps) => {
  return <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
    <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemWrapperClassName)}>
      {
        [...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {
              Toolbox.map((tool) => (
                <div key={tool.name} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-full">
                  <TechIcon component={tool.icon} />
                  <span className="font-semibold">{tool.name}</span>
                </div>
              ))
            }
          </Fragment>
        ))
      }
    </div>
  </div>
}