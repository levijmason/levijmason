import { Project, getProjects } from "@/app/lib/cms/actions/get-projects";
import { ProjectCard } from "@/app/ui/features/project-card";

export default async function Projects() {
  const data = await getProjects();

  // Sort data by featured (true / false / null) last, and sort them alphabetically
  data.sort((a: Project, b: Project) =>
    a.featured && !b.featured
      ? 1
      : !a.featured && b.featured
      ? -1
      : a.name.toLowerCase() > b.name.toLowerCase()
      ? 1
      : -1
  );

  return (
    <div className="flex flex-col w-full space-y-14">
      <h2 className="text-4xl font-bold pt-8">Apps & Websites</h2>
      <br />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.map((p: Project) => {
          return <ProjectCard key={p.name} data={p} featured={false} />;
        })}
      </div>
    </div>
  );
}
