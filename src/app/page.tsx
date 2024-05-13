/* eslint-disable @next/next/no-img-element */
import { GalleryCarousel } from "~/component/gallery-carousel";
import NavBar from "~/component/navbar";
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900">
      <NavBar />
      <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-center pt-10 text-white sm:text-[5rem]">
          <span className="text-red-200">We</span>lco<span className="text-blue-200">m</span>e T<span className="text-emerald-100">o So</span>h Ji<span className="text-violet-200">an</span> Mi<span className="text-yellow-100">n&apos;s</span> <span className="text-red-200">P</span>o<span className="text-blue-200">r</span>t<span className="text-emerald-100">f</span>o<span className="text-violet-200">l</span>i<span className="text-yellow-100">o</span>
        </h1>
        <GalleryCarousel />
        <div className="flex max-w-md flex-col rounded-xl bg-white p-4 items-center">
          <div className="text-lg text-center">
            This website is build using Next.js, Typescript, ShadCN and Tailwind CSS
          </div>
        </div>

        <div className="flex justify-between gap-12 items-center">
          <img src="../../images/typescript.png" alt="TypeScript" className="rounded-full h-12 w-12" />
          <img src="../../images/next-js.png" alt="Next.js" className="rounded-full h-12 w-12" />
          <img src="../../images/shadcn.png" alt="Shadcn" className="rounded-full h-12 w-12" />
          <img src="../../images/tailwind-css.png" alt="Tailwind CSS" className="rounded-full h-12 w-12" />
        </div>
      </div>
    </main>
  );
}
