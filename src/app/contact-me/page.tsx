import { GalleryCarousel } from "~/component/gallery-carousel";
import NavBar from "~/component/navbar";
export default function Conta() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900">
      <NavBar />
      <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-center pt-10 text-white sm:text-[5rem]">
          <span className="text-red-200">C</span>o<span className="text-blue-200">n</span>t<span className="text-emerald-100">a</span>c<span className="text-violet-200">t </span>M<span className="text-yellow-100">e</span>
        </h1>
      

        <div className="flex justify-between gap-12 items-center">
        <div className="border border-white p-4 rounded-lg w-1/3 mb-10 mx-5">
          <div className="container flex flex-col items-center gap-12 px-4">
            <img src="../../images/isfj.png" alt="About Me" className="rounded-lg w-64 md:w-96" />
            <h2 className="text-md text-white text-medium">My MBTI is ISFJ. ISFJ (Defender) is a personality type with the Introverted, Observant, Feeling, and Judging traits. These people tend to be warm and unassuming in their own steady way. They're efficient and responsible, giving careful attention to practical details in their daily lives.</h2>
          </div>
        </div>
        <div className="border border-white p-4 rounded-lg w-1/3 mb-10 mx-5">
          <div className="container flex flex-col items-center gap-12 px-4">
            <img src="../../images/isfj.png" alt="About Me" className="rounded-lg w-64 md:w-96" />
            <h2 className="text-md text-white text-medium">My MBTI is ISFJ. ISFJ (Defender) is a personality type with the Introverted, Observant, Feeling, and Judging traits. These people tend to be warm and unassuming in their own steady way. They're efficient and responsible, giving careful attention to practical details in their daily lives.</h2>
          </div>
        </div>
        <div className="border border-white p-4 rounded-lg w-1/3 mb-10 mx-5">
          <div className="container flex flex-col items-center gap-12 px-4">
            <img src="../../images/isfj.png" alt="About Me" className="rounded-lg w-64 md:w-96" />
            <h2 className="text-md text-white text-medium">My MBTI is ISFJ. ISFJ (Defender) is a personality type with the Introverted, Observant, Feeling, and Judging traits. These people tend to be warm and unassuming in their own steady way. They're efficient and responsible, giving careful attention to practical details in their daily lives.</h2>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}
