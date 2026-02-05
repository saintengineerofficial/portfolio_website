"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
]

export const Header = () => {

  return (
    <div className='w-screen'>
      <div className="lg:px-20 pt-5 flex items-center justify-center lg:justify-between fixed z-10 top-3 w-full">
        <NavigationMenu className=''>
          <NavigationMenuList className='flex-1 flex items-center gap-5'>

            <NavigationMenuItem >
              <NavigationMenuLink className='relative'>
                <Link href='/' className='no-underline uppercase hover:text-white transition-all text-sm bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent font-semibold'>
                  GSAP Fantasy(动画)
                </Link>
                <div className='h-[1px] w-full bg-white/80 absolute bottom-0 left-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="flex items-center text-sm bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent font-semibold">
                Portfolio(作品集)
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <li key={component.title}>
                      <NavigationMenuLink asChild>
                        <Link href={component.href}>
                          <div className="flex flex-col gap-1 text-sm">
                            <div className="leading-none font-medium">
                              {component.title}
                            </div>
                            <div className="text-muted-foreground line-clamp-2">
                              {component.description}
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className='relative'>
                <Link href='https://juejin.cn/user/1864415033966120/posts' className='no-underline text-white/80 uppercase hover:text-white transition-all text-sm'>
                  Blog
                </Link>
                <div className='h-[1px] w-full bg-white/80 absolute bottom-0 left-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></div>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex flex-col items-center gap-4 text-white/80 font-medium lg:flex-row lg:justify-center'>
          <span>+86 18025252853</span>
          <span>saintengineerofficial@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

