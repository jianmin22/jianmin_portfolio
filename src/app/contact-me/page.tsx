/* eslint-disable @next/next/no-img-element */
import NavBar from "~/component/navbar";
export default function ContactMe() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900">
      <NavBar />
      <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
        <h1 className="pt-10 text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-red-200">C</span>o
          <span className="text-blue-200">n</span>t
          <span className="text-emerald-100">a</span>c
          <span className="text-violet-200">t </span>M
          <span className="text-yellow-100">e</span>
        </h1>

        <div className="mx-4 mt-10 flex flex-wrap justify-center gap-6 md:mx-0 md:justify-between">
          <div className="mx-5 flex w-full max-w-xs flex-col items-center rounded-lg border border-white p-4 md:w-1/3">
            <img
              src="../../images/email.png"
              alt="Email"
              className="w-32 rounded-full md:w-48"
            />
            <h2 className="text-medium mt-4 text-center text-sm text-white">
              Here is my personal email: sohjianmin123476@gmail.com. Feel free
              to contact me via email for any inquiries!
              <br />
              <br />
              Link To Contact Me Via Email:&nbsp;
              <a
                href="mailto:sohjianmin123476@gmail.com"
                className="text-medium text-blue-200"
              >
                Email Me
              </a>
            </h2>
          </div>
          <div className="mx-5 flex w-full max-w-xs flex-col items-center rounded-lg border border-white p-4 md:w-1/3">
            <img
              src="../../images/linkedin.png"
              alt="Linkedin"
              className="w-32 rounded-full md:w-48"
            />
            <h2 className="text-medium mt-4 text-center text-sm text-white">
              Below is the link to my LinkedIn Profile. Click on it to see my
              profile, and please feel free to DM me or connect with me!
              <br />
              <br />
              Link To My LinkedIn Profile:&nbsp;
              <a
                href="https://www.linkedin.com/in/jian-min-soh-114174201/?originalSubdomain=sg"
                className="text-md text-medium text-blue-200"
                target="_blank"
              >
                Linkedin
              </a>
            </h2>
          </div>
          <div className="mx-5 flex w-full max-w-xs flex-col items-center rounded-lg border border-white p-4 md:w-1/3">
            <img
              src="../../images/instagram.png"
              alt="Instagram"
              className="w-32 rounded-full md:w-48"
            />
            <h2 className="text-medium mt-4 text-center text-sm text-white">
              Below is the link to my Instagram Profile. Click on it to see my
              profile, and please feel free to DM me or we can follow each
              other!
              <br />
              <br />
              Link To My Instagram Profile:&nbsp;
              <a
                href="https://www.instagram.com/im_j_min?igsh=MTAybDY0OGtubGFoZmQ%3D%3D&utm_source=qr"
                className="text-md text-medium text-blue-200"
                target="_blank"
              >
                Instagram
              </a>
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
