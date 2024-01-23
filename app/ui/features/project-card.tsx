import { Project } from "@/app/lib/cms/actions/";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import NextImage from "next/image";
import NextLink from "next/link";

export const ProjectCard = ({
  data,
  featured,
}: {
  data: Project;
  featured: boolean;
}) => {
  if (featured)
    return (
      <Card
        shadow="none"
        classNames={{
          base: "w-full p-4 bg-default-100 border-2 border-transparent hover:border-primary-400 flex flex-col justify-between",
          header: "flex flex-row items-baseline space-y-3 justify-between",
          footer: "flex flex-wrap gap-4",
        }}
      >
        <Image
          as={NextImage}
          src={"https://directus.levijmason.dev/assets/" + data.cover}
          alt={data.name}
          width={"400"}
          height={"300"}
          className="w-full rounded-lg"
        />

        <CardHeader>
          <h4 className="text-lg font-bold">{data.name}</h4>
          {data.company !== data.name ?? (
            <small className="text-primary-500">{data.company}</small>
          )}
        </CardHeader>

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

  return (
    <Card
      shadow="none"
      classNames={{
        base: "w-full p-4 bg-default-100 border-2 border-transparent hover:border-primary-400 flex flex-col",
        header: "flex flex-row items-baseline space-y-3 justify-between",
        body: featured
          ? "hidden"
          : "flex flex-col items-start gap-4 justify-between text-default-800",
        footer: "flex flex-wrap gap-4 w-full",
      }}
    >
      {data.cover && data.featured ? (
        <Image
          as={NextImage}
          src={"https://directus.levijmason.dev/assets/" + data.cover}
          alt={data.name}
          width={"400"}
          height={"300"}
          className="w-full rounded-lg"
        />
      ) : null}

      <CardHeader>
        <h4 className="text-lg font-bold">{data.name}</h4>
        {data.company !== data.name ?? (
          <small className="text-primary-500">{data.company}</small>
        )}
      </CardHeader>

      <CardBody>{data.description}</CardBody>

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
