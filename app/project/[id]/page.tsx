import Navbar from "@/components/Navbar";
import projects from "@/constants/projects";
import ProjectImage from "./components/ProjectImage";
import { ProjectTypes } from "@/types/constants/projects";
import { Footer } from "@/components/Footer";
import { CheckRouter } from "./components/CheckRouter";
import { SetLoading } from "@/components/SetLoading";

export default function Home({ params }: { params: { id: string } }) {
  const project: ProjectTypes | undefined = projects[params.id];

  return (
    <section>
      <CheckRouter project={project} />
      <SetLoading value={false} />
      <Navbar />
      <div className="mt-[6.25rem] animation-left">
        <a href={project?.link ? project.link : ""}>
          <ProjectImage src={project?.img} />
        </a>
        <div className="mt-16 mb-20 flex gap-8 items-center justify-between sm:flex-col sm:items-start sm:justify-normal">
          <div>
            <h1 className="text-[2.5rem] font-bold tracking-wider dark:text-support-100">
              {project?.name}
            </h1>
            <div className="flex flex-wrap gap-2 mt-4 max-w-md sm:mb-10">
              {project?.technologies.map((technology, i) => {
                return (
                  <p
                    className="px-2 py-1 bg-support-300 rounded-sm font-medium text-sm dark:bg-support-900 dark:text-support-100"
                    key={technology + i}
                  >
                    {technology}
                  </p>
                );
              })}
            </div>
          </div>
          {project?.source && (
            <a
              href={project.source}
              className="block w-max bg-primary-100 text-primary-300 uppercase px-5 py-2 font-bold rounded leading-4 text-base cursor-pointer border-2 border-transparent border-solid transition-all duration-300 hover:bg-transparent hover:border-primary-100 whitespace-nowrap"
            >
              código fonte
            </a>
          )}
        </div>
        {project?.description}
      </div>
      <Footer />
    </section>
  );
}
