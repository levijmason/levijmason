import { Chip } from "@nextui-org/chip";

export const Skills = ({ data }: { data: Array<string> }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Skills</h2>
      <br />
      <ul className="flex flex-wrap gap-3">
        {data.map((skill: string) => (
          <Chip
            key={skill}
            as={"li"}
            color={"default"}
            size="md"
            variant="bordered"
            classNames={{
              base: "border-2 border-default-700 hover:border-primary-400 bg-default-100",
            }}
          >
            {skill}
          </Chip>
        ))}
      </ul>
    </div>
  );
};
