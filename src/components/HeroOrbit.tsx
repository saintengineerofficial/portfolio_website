import type { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

interface HeroOrbitProps extends PropsWithChildren {
  size: number
  rotation: number
  duration?: string
  shouldOrbit?: boolean
  shouldSpin?: boolean
  spinDuration?: string
}

export const HeroOrbit = ({ children, size, rotation, duration = '10s', shouldOrbit = true, shouldSpin = false, spinDuration }: HeroOrbitProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className={twMerge(shouldOrbit && "animate-spin")} style={{ animationDuration: duration }}>
        <div className="flex items-start justify-start"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`
          }}>
          <div className={twMerge(shouldSpin && "animate-spin")} style={{ animationDuration: spinDuration }}>
            <div className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`
              }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}