import { Project, getProjects } from "@/lib/cms/actions";
import { ProjectCard } from "@/ui/features/";

export default async function Tech() {
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
    <section className="flex flex-col w-full space-y-14 md:px-16">
      <div className="flex flex-col gap-8 max-w-prose md:py-12">
        <h2 className="text-4xl font-bold pt-8">Apps & Websites 💻</h2>
        <p className="text-lg md:text-xl font-light leading-loose tracking-wide">
          These are some things on the internet that I&apos;ve developed.
        </p>
      </div>
      <br />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.map((p: Project) => {
          return <ProjectCard key={p.name} data={p} featured={false} />;
        })}
      </div>
    </section>
  );
}
