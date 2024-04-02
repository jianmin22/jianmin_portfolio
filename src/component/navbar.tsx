"use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import cn from 'clsx';
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger
// } from "../components/ui/navigation-menu"

// export default function Navbar() {
//     const [nav, setNav] = useState(false);

//     return (
//         <div className="flex fixed inset-x-0 top-0 justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
//             <div>
                // <Link className="flex items-center gap-2 text-3xl font-semibold ml-auto" href="/">
                // <img src="../../images/navbar-doraemon-icon.png" alt="" height="40" width="40" />
                //     <span>JM&apos;s Portfolio</span>
                // </Link>
//             </div>
//             <NavigationMenu>
//                 <NavigationMenuList>
//                     <NavigationMenuItem>
//                         <Link href="/" legacyBehavior passHref>
//                             <NavigationMenuLink className="py-2 px-4 bg-gray-800 text-white">
//                                 Home
//                             </NavigationMenuLink>
//                         </Link>
//                     </NavigationMenuItem>
//                     <NavigationMenuItem>
//                         <Link href="/about-me" legacyBehavior passHref>
//                             <NavigationMenuLink className="py-2 px-4 bg-gray-800 text-white">
//                                 About Me
//                             </NavigationMenuLink>
//                         </Link>
//                     </NavigationMenuItem>
//                     <NavigationMenuItem >
//                         <NavigationMenuTrigger className="py-2 px-4 bg-gray-800 text-white">
//                             My Experience
//                         </NavigationMenuTrigger>
//                         <NavigationMenuContent>
//                             <ul className="p-4 md:w-[100px] lg:w-[300px]">
//                                 <ListItem href="/my_experience/timeline" title="My Timeline">
//                                     A timeline of my life journey
//                                 </ListItem>
//                                 <ListItem href="/my_experience/projects" title="My Coding Projects">
//                                     My significant coding projects and their details
//                                 </ListItem>
//                                 <ListItem href="/my_experience/achievements" title="Achievements">
//                                     Some of my achievements and awards
//                                 </ListItem>
//                                 {/* <ListItem href="my_experience/skills" title="Skills">
//                                     Skills I have acquired and proficient in...
//                                 </ListItem>
//                                 <ListItem href="my_experience/cca-hobbies" title="CCA & Hobbies">
//                                     What do I do in my free time?
//                                 </ListItem> */}
//                             </ul>
//                         </NavigationMenuContent>
//                     </NavigationMenuItem>
//                     <NavigationMenuItem>
//                         <Link href="/contact-me" legacyBehavior passHref>
//                             <NavigationMenuLink className="py-2 px-4 bg-gray-800 text-white">
//                                 Contact Me
//                             </NavigationMenuLink>
//                         </Link>
//                     </NavigationMenuItem>
//                 </NavigationMenuList>
//             </NavigationMenu>
//         </div>
//     )
// };
// const ListItem = React.forwardRef<
//     React.ElementRef<"a">,
//     React.ComponentPropsWithoutRef<"a">
// >(function ListItem({ className, title, children, ...props }, ref) {
//     return (
//         <li>
//             <NavigationMenuLink asChild>
//                 <a
//                     ref={ref}
//                     className={cn(
//                         "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//                         className
//                     )}
//                     {...props}
//                 >
//                     <div className="text-sm font-medium leading-none">{title}</div>
//                     <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                         {children}
//                     </p>
//                 </a>
//             </NavigationMenuLink>
//         </li>
//     )
// })
// Import necessary modules
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            href: "/",
            title: "Home"
        },
        {
            id: 2,
            href: "/about-me",
            title: "About Me"
        },
        {
            id: 3,
            title: "My Experience",
            subLinks: [
                { href: "/my_experience/timeline", title: "My Timeline" },
                { href: "/my_experience/projects", title: "My Coding Projects" },
                { href: "/my_experience/achievements", title: "Achievements" }
            ]
        },
        {
            id: 4,
            href: "/contact-me",
            title: "Contact Me"
        }
    ];
    
    return (
<div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav z-50">
    <div>
        <Link className="flex items-center gap-2 text-3xl font-semibold ml-auto" href="/">
            <img src="../../images/navbar-doraemon-icon.png" alt="" height="40" width="40" />
            <span>JM&apos;s Portfolio</span>
        </Link>
    </div>

    <ul className="hidden md:flex">
        {links.map(({ id, href, title, subLinks }) => (
            <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
            >
                {subLinks ? (
                    <div className="relative group">
                        {/* Opening <a> tag */}
                        <a href="#" className="group">
                            {title}
                            </a>
                            {/* Opening <ul> tag */}
                            <ul className="absolute hidden group-hover:block bg-gray-800 text-white py-2 px-4 space-y-1">
                                {subLinks.map((subLink, index) => (
                                    <li key={index}>
                                        {/* Nested <Link> component */}
                                        <Link href={subLink.href}>{subLink.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        
                        {/* Closing <a> tag */}
                    </div>
                ) : (
                    // Regular <Link> component if no sub-links
                    <Link href={href}>{title}</Link>
                )}
            </li>
        ))}
    </ul>

    <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
    >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>

    {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, href, title, subLinks }) => (
                <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                    {subLinks ? (
                        <div className="relative group">
                            <a href="#" className="group">
                                {title}
                                </a>
                                <ul className="absolute hidden group-hover:block bg-gray-800 text-white py-2 px-4 space-y-1">
                                    {subLinks.map((subLink, index) => (
                                        <li key={index}>
                                            <Link onClick={() => setNav(!nav)} href={subLink.href}>{subLink.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                        </div>
                    ) : (
                        <Link onClick={() => setNav(!nav)} href={href}>{title}</Link>
                    )}
                </li>
            ))}
        </ul>
    )}
</div>

    );
};
