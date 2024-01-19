import { Project } from "@/app/lib/cms/actions/get-featured-projects";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import NextLink from "next/link";

export const ProjectCard = ({
  data,
  featured,
}: {
  data: Project;
  featured: boolean;
}) => {
  return (
    <Card
      shadow="none"
      className={"w-full p-4"}
      classNames={{
        base: "bg-default-100 border-2 border-transparent hover:border-primary-400",
        header: "flex flex-row items-baseline space-y-3 justify-between",
        body: featured
          ? "hidden"
          : "flex flex-col items-start gap-4 justify-between",
        footer: "flex flex-wrap gap-4",
      }}
    >
      <CardHeader>
        <h4 className="text-lg font-bold">{data.name}</h4>
        {data.company !== data.name ?? (
          <small className="text-primary-500">{data.company}</small>
        )}
      </CardHeader>

      <CardBody>
        {data.description}
        <div className="w-full flex flex-wrap gap-3">
          {data.tech_stack?.map((tech: any) => (
            <Chip
              key={tech}
              color={"default"}
              size="md"
              variant="bordered"
              classNames={{
                base: "bg-default-50 border-default-700",
              }}
            >
              {tech}
            </Chip>
          ))}
        </div>
      </CardBody>

      <CardFooter>
        <ButtonGroup variant="ghost" radius="full" className="w-full">
          {data.code_link ? (
            <Button
              href={`${data.code_link}`}
              target="_blank"
              rel="noopener noreferrer"
              as={NextLink}
              className="w-full border-2 border-transparent hover:border-primary-400 bg-default-50"
              color="default"
            >
              Code
            </Button>
          ) : null}
          {data.preview_link ? (
            <Button
              href={`${data.preview_link}`}
              target="_blank"
              rel="noopener noreferrer"
              as={NextLink}
              className="w-full border-2 border-transparent hover:border-primary-400 bg-default-50"
              color="default"
            >
              Preview
            </Button>
          ) : null}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
