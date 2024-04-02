import * as React from "react"

import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"

const SkillsAcquired = [
    {
        title: "HTML",
        description: "I have acquired this skills during my time at Singapore Polytechnic, I have developed 2 website with HTML, one is  ",
        imageSrc: "../../images/html.png"
    },
    {
        title: "CSS",
        description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
        imageSrc: "../../images/css.png"
    },
    {
        title: "Bootstrap",
        description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
        imageSrc: "../../images/bootstrap.png"
    },
    {
        title: "Tailwind CSS",
        description: "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
        imageSrc: "../../images/tailwind-css.png"
    },
    {
        title: "Next.js",
        description: "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
        imageSrc: "../../images/next-js.png"
    },
    
    {
        title: "JavaScript",
        description: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
        imageSrc: "../../images/javascript.png"
    },
    {
        title: "TypeScript",
        description: "TypeScript is an open-source language which builds on JavaScript, one of the world's most used tools, by adding static type definitions.",
        imageSrc: "../../images/typescript.png"
    },
    {
        title: "React",
        description: "React is a free and open-source front-end JavaScript library for building user interfaces or UI components.",
        imageSrc: "../../images/react.png"
    },
    {
        title:"Stripe",
        description: "Stripe is a technology company that builds economic infrastructure for the internet.",
        imageSrc: "../../images/stripe.png"
    },
    {
        title: "Firebase",
        description: "Firebase is a platform developed by Google for creating mobile and web applications.",
        imageSrc: "../../images/firebase.png"
    },
    {
        title: "MongoDB",
        description: "MongoDB is a source-available cross-platform document-oriented database program.",
        imageSrc: "../../images/mongodb.png"
    },
    {
        title: "Node.js",
        description: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
        imageSrc: "../../images/nodejs.png"
    },
    {
        title: "C++",
        description: "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes.",
        imageSrc: "../../images/cplusplus.png"
    },
    {
        title:"Python",
        description: "Python is an interpreted high-level general-purpose programming language.",
        imageSrc: "../../images/python.png"
    },
    {
        title: "Java",
        description: "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        imageSrc: "../../images/java.png"
    },

    {
        title: "Figma",
        description: "Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.",
        imageSrc: "../../images/figma.png"
    },
    {
        title:"React Native",
        description: "React Native is an open-source mobile application framework created by Facebook, Inc.",
        imageSrc: "../../images/react-native.png"
    },
    {
        title:"Express JS",
        description: "Express.js, or simply Express, is a back end web application framework for Node.js.",
        imageSrc: "../../images/express-js.png"
    },
    {
        title:"CockroachDB",
        description: "CockroachDB is a distributed SQL database built on a transactional and strongly-consistent key-value store.",
        imageSrc: "../../images/cockroach-db.png"
    },
    {
        title:"Cyber Security",
        description: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.",
        imageSrc: "../../images/cybersecurity.png"
    },
    {
        title:"Networking",
        description: "Networking is the practice of connecting computers and other devices to share resources.",
        imageSrc: "../../images/networking.png"
    },
    {
        title:"Database Management (Data Seeding, SQL, Data Modelling)",
        description: "Database design is the organization of data according to a database model.",
        imageSrc: "../../images/database-management.png"
    },
    {
        title:"MS SQL",
        description: "Microsoft SQL Server is a relational database management system developed by Microsoft.",
        imageSrc: "../../images/mssql.png"
    },
    {
        title:"MySQL",
        description: "MySQL is an open-source relational database management system.",
        imageSrc: "../../images/mysql.png"
    },
    {
        title:"JWT",
        description: "Independently learned JSON Web Token. It is an Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims.",
        imageSrc: "../../images/jwt.png"
    },
    {
        title: "Data Analysis Using Excel",
        description:"Microsoft Excel is a spreadsheet developed by Microsoft for Windows, macOS, Android and iOS. It features calculation, graphing tools, pivot tables, and a macro programming language called Visual Basic for Applications.",
        imageSrc: "../../images/excel.png"
    },
    {
        title:"Prisma",  
        description: "Prisma is an open-source database toolkit.",
        imageSrc: "../../images/prisma.png"
    },
    {
        title:"TRPC",
        description: "TRPC is a modern TypeScript framework for building scalable, reliable, and type-safe APIs.",
        imageSrc: "../../images/trpc.png"
    }

]
export function SkillsAcquiredCarousel() {
    return (
      <Carousel className="w-full max-w-screen-xl m-10 overflow-hidden">
        <CarouselContent className="-ml-1">
          {SkillsAcquired.map((skill, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center p-6 h-96" >
                    <div className="h-2/3 p-5">
                    <img 
                      src={skill.imageSrc} 
                      alt={skill.title} 
                      style={{ maxWidth: "90%", height: "auto", maxHeight: "150px" }} 
                    />
                    </div>
                    <div className="m-5 h-1/3 justify-start items-start ">
                      <h3 className="font-bold">{skill.title}</h3>
                      <p>{skill.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }
  
  
