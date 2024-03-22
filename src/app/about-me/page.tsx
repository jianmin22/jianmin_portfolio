import { ScrollArea } from "~/components/ui/scroll-area"
import NavBar from "~/component/navbar";
import { SkillsAcquiredCarousel } from "~/component/skills-acquired-carousel";
export default function AboutMe() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900">
      <NavBar />
      <div className="container flex flex-col items-center gap-12 px-4 py-16">
        <h1 className=" text-5xl font-extrabold tracking-tight text-center pt-10 text-white sm:text-[5rem]">
          <span className="text-red-200">A</span>b<span className="text-blue-200">o</span>u<span className="text-emerald-100">t </span> <span className="text-violet-200">M</span><span className="text-yellow-100">e</span>
        </h1>
      </div>
      <div className="container flex flex-col md:flex-row justify-between items-center gap-12 px-4">
        <img src="../../images/aboutme-img1.jpg" alt="About Me" className="rounded-lg w-64 md:w-96" />
        <div className="bg-white flex items-center justify-center h-full shadow-lg rounded-lg m-4">
          <span className="text-md font-medium p-5 py-10 text-black text-center">
            Hello and thank you for visiting my portfolio website!
            <br /><br />
            My name is Soh Jian Min, and I am currently Studying at Singapore Polytechnic for Diploma in Information Technology. Previously, I completed a Higher Nitec in Cyber and Network Security at ITE in 2022.
            <br /><br />
            I have a strong interest in various technology fields, including full stack development, cybersecurity, networking, and artificial intelligence. The dynamic nature of technology continuously fascinates me, driving my commitment to regularly improve my skills. Whether troubleshooting errors or acquiring new knowledge, the satisfaction derived from overcoming challenges fuels my passion for technology.
            <br /><br />
            I firmly believe that consistent dedication and hard work are essential to keeping pace with the rapid evolution of technology. Technology isn&apos;t just a career path for me, it&apos;s a passion that motivates me to continuously strive for improvement.
            <br /><br />
            Please feel free to explore further by scrolling down and navigating around my portfolio website. Thank you once again for visiting.
          </span>
        </div>
      </div>
      <img src="../../gif/arrow-down.gif" alt="Arrow Down" className="rounded-lg w-36 h-16 mt-5" />
      <div className="container flex flex-col items-start gap-12 px-4 py-16">
        <h1 className=" text-5xl font-extrabold tracking-tight pt-10 text-white sm:text-[3rem]">
          <span className="text-red-200">M</span><span className="text-blue-200">B</span><span className="text-emerald-100">T</span><span className="text-violet-200">I</span>
        </h1>
      </div>
      <div className="border border-white p-4 rounded-lg mb-10 mx-5">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-12 px-4">
          <img src="../../images/isfj.png" alt="About Me" className="rounded-lg w-64 md:w-96" />
          <h2 className="text-md text-white text-medium">My MBTI is ISFJ. ISFJ (Defender) is a personality type with the Introverted, Observant, Feeling, and Judging traits. These people tend to be warm and unassuming in their own steady way. They&apos;re efficient and responsible, giving careful attention to practical details in their daily lives.</h2>
        </div>
      </div>


      <div className="container flex flex-col items-start gap-12 px-4 py-16">
        <h1 className=" text-5xl font-extrabold tracking-tight pt-10 text-white sm:text-[3rem]">
          <span className="text-red-200">Sk</span>i<span className="text-blue-200">lls</span> Ac<span className="text-emerald-100">qu</span>i<span className="text-violet-200">r</span>e<span className="text-yellow-100">d</span>
        </h1>
      </div>
      <SkillsAcquiredCarousel />
    </main>
  );
}
