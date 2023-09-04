"use client";

import projects from "@/constants/projects";
import React from "react";
import ButtonAction from "./ButtonAction";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/Loading";
import { Context } from "@/contexts/Context";

const Projects = () => {
  const router = useRouter();
  const context = React.useContext(Context);
  const [mobile, setMobile] = React.useState<boolean>(false);
  const [hide, setHide] = React.useState<boolean>(false);
  const [projectsKeys, setProjectsKeys] = React.useState(Object.keys(projects));

  function showAll() {
    setProjectsKeys(Object.keys(projects));
    setHide(false);
  }

  function hideProjects() {
    const projectskeys = Object.keys(projects);
    setProjectsKeys(projectskeys.slice(0, 3));
    setHide(true);
  }

  React.useEffect(() => {
    function checkMobile() {
      setMobile(window.innerWidth <= 640);
      if (window.innerWidth <= 640) {
        const projectskeys = Object.keys(projects);
        setProjectsKeys(projectskeys.slice(0, 3));
        setHide(true);
      } else {
        setProjectsKeys(Object.keys(projects));
        setHide(false);
      }
    }

    window.addEventListener("resize", checkMobile);

    checkMobile();

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  function transferTo(project: string) {
    context?.setLoading(true);
    router.push(`/project/${project}`);
  }

  return (
    <div className="mt-8 grid grid-cols-3 gap-8 justify-between lg:grid-cols-2 sm:flex sm:flex-col relative">
      {projectsKeys.map((projectRef) => {
        const project = projects[projectRef];

        return (
          <div key={projectRef} className="py-8 px-4 bg-support-200 relative">
            <h2 className="text-2xl font-semibold mb-4 tracking-wider text-center">
              {project.name}
            </h2>
            <p className="text-support-900 text-base mb-5">
              {project.smallDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-20">
              {project.technologies.map((technologie, i) => {
                return (
                  <p
                    className="px-2 py-1 bg-support-300 rounded-sm font-medium text-sm"
                    key={projectRef + i}
                  >
                    {technologie}
                  </p>
                );
              })}
            </div>
            <ButtonAction
              className="absolute bottom-8 left-2/4 transform -translate-x-2/4"
              onClick={() => transferTo(projectRef)}
            >
              VER MAIS
            </ButtonAction>
          </div>
        );
      })}
      {mobile && hide && (
        <ButtonAction className="mx-auto" onClick={showAll}>
          VER TODOS
        </ButtonAction>
      )}
      {mobile && !hide && (
        <ButtonAction className="mx-auto" onClick={hideProjects}>
          VER MENOS
        </ButtonAction>
      )}
    </div>
  );
};

export default Projects;
