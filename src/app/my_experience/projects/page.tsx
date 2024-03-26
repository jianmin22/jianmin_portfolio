import { GalleryCarousel } from "~/component/gallery-carousel";
import NavBar from "~/component/navbar";
export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900">
      <NavBar />
      <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-center pt-10 text-white sm:text-[5rem]">
          <span className="text-red-200">C</span>o<span className="text-blue-200">n</span>t<span className="text-emerald-100">a</span>c<span className="text-violet-200">t </span>M<span className="text-yellow-100">e</span>
        </h1>


        <div className="flex justify-between mt-10 gap-12 items-center">
          <div className="border border-white p-4 rounded-lg w-1/3 mb-10 mx-5">
            <div className="container flex flex-col items-center gap-12 px-4">
              <img src="../../images/email.png" alt="Email" className="rounded-full w-56 md:w-48" />
              <h2 className="text-md text-white text-medium text-center">
                Here is my personal email: sohjianmin123476@gmail.com. Feel free to contact me via email for any inquiries!
                <br />
                <br />
                Link To Contact Me Via Email:&nbsp;
                <a href="mailto:sohjianmin123476@gmail.com" className="text-blue-200 text-medium">Email Me</a>
              </h2>
            </div>
          </div>
          <div className="border border-white p-4 rounded-lg w-1/3 mb-10 mx-5">
            <div className="container flex flex-col items-center gap-12 px-4">
              <img src="../../images/linkedin.png" alt="Linkedin" className="rounded-full w-56 md:w-48" />
              <h2 className="text-md text-white text-medium text-center">
                Below is the link to my LinkedIn Profile. Click on it to see my profile, and please feel free to DM me or connect with me!
                <br />
                <br />
                Link To My LinkedIn Profile:&nbsp;
                <a href="https://www.linkedin.com/in/jian-min-soh-114174201/?originalSubdomain=sg" className="text-md text-blue-200 text-medium" target="_blank">Linkedin</a>
              </h2>
            </div>
          </div>
          <div className="border border-white p-4 rounded-lg w-1/3 mb-10 mx-5">
            <div className="container flex flex-col items-center gap-12 px-4">
              <img src="../../images/instagram.png" alt="Instagram" className="rounded-full w-56 md:w-48" />
              <h2 className="text-md text-white text-medium text-center">
              Below is the link to my Instagram Profile. Click on it to see my profile, and please feel free to DM me or we can follow each other!
                <br />
                <br />
                Link To My Instagram Profile:&nbsp;
                <a href="https://www.instagram.com/im_j_min?igsh=MTAybDY0OGtubGFoZg%3D%3D&utm_source=qr" className="text-md text-blue-200 text-medium" target="_blank">Instagram</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
