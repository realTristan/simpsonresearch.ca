import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    if (projects.length > 0) return;

    async function fetchProjects(url: string) {
      return await fetch(url)
        .then((response) => response.json())
        .then((json) => setProjects((projects) => [...projects, ...json]))
        .catch((error) => console.log(error));
    }

    fetchProjects("https://api.github.com/users/realTristan/repos");
    fetchProjects(
      "https://api.github.com/users/Simpson-Computer-Technologies-Research/repos",
    );
  }, [projects]);

  return (
    <div className="fade-in mx-10 flex flex-col items-center justify-center">
      <a
        href="/"
        className="group mb-12 flex h-full w-full flex-col items-center justify-center"
      >
        <h1 className="mb-7 text-center text-6xl font-black tracking-wider text-white duration-500 ease-in-out group-hover:tracking-widest">
          SIMPSON RESEARCH
        </h1>
        <div className="h-1 w-80 rounded-full bg-blue-600 duration-500 ease-in-out group-hover:w-96"></div>
      </a>

      {projects.map((data: any, i: number) => (
        <a
          key={i}
          href={data.html_url}
          rel="noopener noreferrer"
          target="_blank"
          className="fade-in my-12 w-[20rem] translate-y-0 duration-300 ease-in-out hover:-translate-y-8 md:w-[40rem] lg:mx-0 lg:mr-10 2xl:w-[50rem]"
        >
          <h2 className="text-center text-xl font-black tracking-wider text-white">
            <mark className="bg-transparent text-blue-600">#</mark>
            &nbsp;{data.name}
          </h2>
          <p className="text-md font-base mt-4 text-center text-gray-200">
            {data.description}
          </p>
          <div className="mt-6 flex items-center justify-center">
            {data.topics.map((topic: string, j: number) => (
              <span
                key={j}
                className="mx-4 text-center text-[0.60rem] uppercase tracking-widest text-gray-50"
              >
                {topic}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
