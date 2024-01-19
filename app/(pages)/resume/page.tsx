import { getResume } from "@/app/lib/cms/actions/get-resume";
import { WorkExperience } from "@/app/ui/features";
import { Skills } from "@/app/ui/features/skills";
import { TechStack } from "@/app/ui/features/tech-stack";
import { Button } from "@nextui-org/react";

export default async function Resume() {
  const { summary, skills, tech_stack } = await getResume();

  return (
    <section className="flex flex-col w-full space-y-14">
      <div className="flex flex-col md:flex-row gap-8 pt-8 justify-between items-baseline">
        <h2 className="text-4xl font-bold">My resume</h2>
        <Button
          size="sm"
          variant="ghost"
          color="primary"
          radius="full"
          className="p-4 text-foreground"
        >
          Request full resume
        </Button>
      </div>
      <br />
      <div className="flex flex-col md:w-11/12 gap-4">
        <h4 className="text-2xl">Summary</h4>
        <p className="text-lg font-light leading-loose tracking-wide">
          {summary}
        </p>
      </div>
      <br /> <Skills data={skills} />
      <br /> <TechStack data={tech_stack} />
      <br /> <WorkExperience />
    </section>
  );
}
