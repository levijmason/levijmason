import { getProjects } from "@/app/lib/cms/actions/get-projects";
import { ProjectCard } from "@/app/ui/features/project-card";

export default async function Projects() {
  const data = await getProjects();

  return (
    <div className="flex flex-col w-full space-y-14">
      <h2 className="text-4xl font-bold pt-8">Projects</h2>
      <br />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.map((p: any) => {
          return <ProjectCard key={p.id} data={p} />;
        })}
      </div>
    </div>
  );
}
