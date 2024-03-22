"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import cn from 'clsx';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "../components/ui/navigation-menu"

export default function Navbar() {
    const [nav, setNav] = useState(false);

    return (
        <div className="flex fixed inset-x-0 top-0 justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
            <div>
                <Link className="flex items-center gap-2 text-3xl font-semibold ml-auto" href="/">
                <img src="../../images/navbar-doraemon-icon.png" alt="" height="40" width="40" />
                    <span>JM&apos;s Portfolio</span>
                </Link>
            </div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className="py-2 px-4 bg-gray-800 text-white">
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about-me" legacyBehavior passHref>
                            <NavigationMenuLink className="py-2 px-4 bg-gray-800 text-white">
                                About Me
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem >
                        <NavigationMenuTrigger className="py-2 px-4 bg-gray-800 text-white">
                            My Experience
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="p-4 md:w-[100px] lg:w-[300px]">
                                <ListItem href="my_experience/timeline" title="My Timeline">
                                    A timeline of my life journey
                                </ListItem>
                                <ListItem href="my-experience/projects" title="My Coding Projects">
                                    My significant coding projects and their details
                                </ListItem>
                                <ListItem href="my_experience/achievements" title="Achievements">
                                    Some of my achievements and awards
                                </ListItem>
                                {/* <ListItem href="my_experience/skills" title="Skills">
                                    Skills I have acquired and proficient in...
                                </ListItem>
                                <ListItem href="my_experience/cca-hobbies" title="CCA & Hobbies">
                                    What do I do in my free time?
                                </ListItem> */}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/contact-me" legacyBehavior passHref>
                            <NavigationMenuLink className="py-2 px-4 bg-gray-800 text-white">
                                Contact Me
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
};
const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(function ListItem({ className, title, children, ...props }, ref) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})