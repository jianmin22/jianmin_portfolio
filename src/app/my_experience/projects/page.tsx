/* eslint-disable @next/next/no-img-element */
import NavBar from "~/component/navbar";

// Example data structure for the projects
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for Project 1",
    githubUrl: "https://github.com/project1",
    imageUrl: "../../images/project-1.png"
  },
  {
    id: 2,
    title: "Form Creation Website",
    description: `A pet project done with Tailwind CSS, Croacoach DB, Next JS, Typescript, Prisma, TRPC and Next Auth. This websites allows login with either google or discord and allows form filling and saving forms. This is to prepare my knowledge on these technical stacks and implement it when i do the project for industry now curriculumn project which also uses these technical stacks.`,
    githubUrl: "https://github.com/project2",
    imageUrl: "../../images/project-2.png"
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-900">
      <NavBar />
      <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
        <h1 className="pt-10 text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <span className="text-red-200">M</span>y
          <span className="text-blue-200"> Pr</span>o
          <span className="text-emerald-100">j</span>e
          <span className="text-violet-200">c</span>t
          <span className="text-yellow-100">s</span>
        </h1>
        <div className="flex flex-col gap-12 mt-10 w-full">
          {projects.map((project) => (
            <div key={project.id} className="mx-5 mb-10 rounded-lg border border-white p-4 w-full flex flex-col md:flex-row">
              <div className="flex justify-center items-center flex-shrink-0 w-full md:w-1/3">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-48 w-auto max-w-full rounded-lg"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-4 text-white flex flex-col justify-between">
                <h2 className="text-lg font-medium">{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.githubUrl} className="text-blue-400 hover:text-blue-600 mt-4">
                  GitHub Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
