import { Chip } from "@nextui-org/chip";

export const TechStack = ({ data }: { data: Array<string> }) => {
  return (
    <div className="flex flex-col md:w-5/6">
      <h2 className="text-3xl font-bold">Tech stack 🥞</h2>
      <br />
      <ul className="flex flex-wrap gap-3">
        {data.map((tech: string) => (
          <Chip
            key={tech}
            as={"li"}
            color={"default"}
            size="md"
            variant="bordered"
            classNames={{
              base: "border-2 border-default-700 hover:border-primary-400 bg-default-100",
            }}
          >
            {tech}
          </Chip>
        ))}
      </ul>
    </div>
  );
};
