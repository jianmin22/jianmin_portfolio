/* eslint-disable @next/next/no-img-element */
import NavBar from "~/component/navbar";

export default function Achievements() {
  const certificates = [
    { id: 1, image: "../../images/prisma.png", description: "Certificate 1 Descripfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeetion" },
    { id: 2, image: "../../images/timeline-2.jpg", description: "Certificate 2 Description" },
    { id: 3, image: "../../images/timeline-2.jpg", description: "Certificate 3 Description" },
    { id: 4, image: "../../images/timeline-2.jpg", description: "Certificate 4 ferrrrrrrrrrrrrrrrrrrrrrrkjnqwDescription" },
    { id: 5, image: "../../images/timeline-2.jpg", description: "Certificate 1 Description" },
    { id: 6, image: "../../images/timeline-2.jpg", description: "Certificate 2 Description" },
    { id: 7, image: "../../images/timeline-2.jpg", description: "Certificate 3 Description" },
    { id: 8, image: "../../images/timeline-2.jpg", description: "Certificate 4 Description" },
    // Add more certificates as needed
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900">
      <NavBar />
      <div className="container flex flex-col items-center gap-12 px-4 py-16">
        <h1 className="pt-10 text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-red-200">A</span>c<span className="text-blue-200">h</span>i<span className="text-emerald-100">ev</span>e<span className="text-violet-200">me</span>n<span className="text-yellow-100">ts</span>
        </h1>
        <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certificates.map(cert => (
            <div key={cert.id} className="flex flex-col items-center border border-gray-300 p-4 rounded-lg">
              <img src={cert.image} alt={`Certificate ${cert.id}`} className="w-full max-h-96 object-contain" />
              <p className="mt-4 text-sm text-white">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
