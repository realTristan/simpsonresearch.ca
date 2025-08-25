"use client";

import { GithubRepo } from "@/lib/types/github";
import { useEffect, useState } from "react";

/**
 * Fetches projects from GitHub API
 * @param url
 * @returns Promise<any>
 */
async function fetchProjects(url: string): Promise<GithubRepo[]> {
  return await fetch(url)
    .then((response) => response.json())
    .then((json: GithubRepo[]) => json)
    .catch((error) => {
      console.log(error);
      return [];
    });
}

/**
 * Projects component
 * @returns JSX.Element
 */
export default function Projects(): JSX.Element {
  const [projects, setProjects] = useState<GithubRepo[]>([]);

  useEffect(() => {
    if (projects.length > 0) return;

    fetchProjects("https://api.github.com/users/realTristan/repos").then((p1) =>
      fetchProjects(
        "https://api.github.com/users/simpsonresearch/repos",
      ).then((p2) => setProjects([...p1, ...p2])),
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

      {projects.map((data: GithubRepo, i: number) => (
        <a
          key={i}
          href={data.html_url}
          rel="noopener noreferrer"
          target="_blank"
          className="fade-in my-12 translate-y-0 duration-300 ease-in-out hover:-translate-y-8 lg:w-[35rem]"
        >
          <h2 className="text-center text-xl font-black tracking-wider text-white">
            <mark className="bg-transparent text-blue-600">#</mark>
            &nbsp;{data.name}
          </h2>

          <p className="text-md font-base mt-4 text-center text-gray-200">
            {data.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {data.topics.map((topic: string, j: number) => (
              <p
                key={j}
                className="text-center text-[0.60rem] uppercase tracking-widest text-gray-50"
              >
                {topic}
              </p>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
