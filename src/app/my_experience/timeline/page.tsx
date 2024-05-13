/* eslint-disable @next/next/no-img-element */
import NavBar from "~/component/navbar";
import { Card, CardContent } from "~/components/ui/card";
export default function Timeline() {
  const timeline = [
    {
      date: "15 November 2003",
      title: "Jian Min's Birthday!",
      description: `Im Bornded!`,
      image: "../../images/timeline-1.png",
    },
    {
      date: "Year 2010 - 2015",
      title: "Primary School",
      description: `I studied at Evergreen Primary School, I attended CCAs, which includes: Choir and Library.`,
      image: "../../images/timeline-2.jpg",
    },
    {
      date: "Year 2010 - Present",
      title: "Taekwondo",
      description: `This is my favourite sport.\nI had participated in the national interschool champianship poomsae(represent evergreen secondary).\nI have been practicing sparring\nI am currently Red belt\nDue to covid, I stopped going for gradings, but I still go for training or sometimes train at home`,
      image: "../../images/timeline-3.jpg",
    },
    {
      date: "Year 2016 - 2019",
      title: "Secondary School",
      description: `I studied at Evergreen Secondary School, I graduated with NLevel Certificate from Evergreen Secondary School.
      I managed to scored 11 marks for my EMB3. My CCA was Singapore Red Cross Youth, and i won several awards and first aid Certification.`,
      image: "../../images/timeline-4.png",
    },
    {
      date: "Year 2020 - 2022",
      title: "ITE College West",
      description: `I studied in ITE College West, Higher Nitec in Cyber and Network Security. Gained insights on IT and Cyber Security. Took certifications like Certified Secure Computer User (CSCU) and joined CTF competition like DSTA Brainhack.`,
      image: "../../images/timeline-5.png",
    },
    {
      date: "Year 2022 - Present",
      title: "Singapore Polytechnic",
      description: `I am currently studying in Singapore Polytechnic, Diploma in Information Technology. I am currently in my final year. Through my polytechnic journey, I learned alot about programming, networking, cybersecurity, business analysis and project management. I gained strong interest in IT through my polytechnic journey. I also learn independent learning and time management as I am in the indurstry now curriculumn pathway, self disipline and strong interest towards what we are doing is the key since we have to research and implement the project ourself.`,
      image: "../../images/timeline-6.png",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900">
      <NavBar />
      <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
        <h1 className="pt-10 text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-red-200">M</span>y{" "}
          <span className="text-blue-200">Ti</span>m
          <span className="text-emerald-100">e</span>l
          <span className="text-violet-200">i</span>n
          <span className="text-yellow-100">e</span>
        </h1>
        <div className="container mx-auto h-full w-full">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {timeline.map((item, key) => (
              <li key={key} className="mb-10 ms-6">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200"></div>
                <Card className="bg-inivisible w-full flex-none border-0">
                  <CardContent className="p-5">
                  <div className="text-base md:text-lg flex flex-col gap-2 pb-3">
                      <time className="text-xs font-normal text-gray-400">{item.date}</time>
                      <div className="text-xl font-bold text-white">{item.title}</div>
                      <p className="text-sm font-normal text-gray-200">{item.description}</p>
                    </div>
                    <div className="flex h-[250px]">
                      <img
                        src={item.image}
                        alt="Timeline"
                        className="h-full rounded-lg object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
