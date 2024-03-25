import * as React from "react"

import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"

const hobbies = [
    {
        title: "Coding (Full Stack Development)",
        description: "I have acquired this skills during my time at Singapore Polytechnic, I have developed 2 website with HTML, one is  ",
        imageSrc: "../../images/html.png"
    },
    {
        title: "UI/UX Design",
        description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
        imageSrc: "../../images/css.png"
    },
    {
        title: "Cybersecurity",
        description: "I have a higher nitec in cyber and network securiry certificate. I learned how to protect systems, networks, and programs from digital attacks. I have acquired skills in ethical hacking, penetration testing, and security analysis.",
        imageSrc: "../../images/bootstrap.png"
    },
    {
        title: "Taekwondo",
        description: "I an a red belt holder. Since 12 years old, I have been practicing Taekwondo. It has taught me discipline, respect, and perseverance. I have participated in national school games competition.",
        imageSrc: "../../images/tailwind-css.png"
    },
    {
        title: "Singing",
        description: `Singing is one of my passion since young. I have not stopped learning how to sing. I have been attending chinese singing competitions over the years.`,
        imageSrc: "../../images/next-js.png"
    },
    
    {
        title: "Watching Drama",
        description: `I love watching Chinese dramas which relaxes me and relieves stress. They&apos;re not just entertaining, they teach valuable life lessons too.`,
        imageSrc: "../../images/javascript.png"
    },
    {
        title: "Eat",
        description: "Eating brings me joy, whether I'm happy or sad. It's my way of treating myself and finding happiness. I indulge in my favorite foods to reward myself for hard work.",
        imageSrc: "../../images/eat.png"
    },
    {
        title: "Sleep",
        description: `Sleep helps me de-stress and recharge. When I feel unhappy or stressed, I sleep and then eat. It gives me the energy to face and solve problems.`,
        imageSrc: "../../images/sleep.png"
    },
    {
        title:"Idol",
        description: `My idol is Tan Jian Ci (檀健次), a Chinese singer, dancer, and actor. His dedication and hard work inspire me, proving that anything is possible with effort and persistence.`,
        imageSrc: "../../images/idol.jpg"
    }

]
export function HobbiesCarousel() {
    return (
      <Carousel className="w-full max-w-screen-xl m-10">
        <CarouselContent className="-ml-1">
          {hobbies.map((hobby, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center p-6 h-96" >
                    <div className="h-2/3 p-3">
                    <img 
                      src={hobby.imageSrc} 
                      alt={hobby.title} 
                      style={{ maxWidth: "95%", height: "auto", maxHeight: "170px" }} 
                    />
                    </div>
                    <div className="m-3 h-1/3 justify-start items-start ">
                      <h3 className="font-bold">{hobby.title}</h3>
                      <p>{hobby.description}</p>
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
  
  
