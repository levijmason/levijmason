import { Project } from "@/app/lib/cms/actions/";
import {
  Button,
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
          footer: "flex flex-wrap gap-2",
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
          {data.preview_link ? (
            <Button
              href={`${data.preview_link}`}
              target="_blank"
              isIconOnly
              as={NextLink}
              size="lg"
              radius="full"
              variant="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={"w-6 h-6 hover:fill-primary"}
              >
                <title>Website / Link</title>
                <path
                  fillRule="evenodd"
                  d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          ) : null}
          {data.code_link ? (
            <Button
              href={`${data.code_link}`}
              target="_blank"
              isIconOnly
              as={NextLink}
              size="lg"
              radius="full"
              variant="light"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={"w-6 h-6 hover:fill-primary"}
              >
                <title>GitHub Repository</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </Button>
          ) : null}
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
        footer: "flex flex-wrap gap-2 w-full",
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
        {data.preview_link ? (
          <Button
            href={`${data.preview_link}`}
            target="_blank"
            isIconOnly
            as={NextLink}
            size="lg"
            radius="full"
            variant="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={"w-6 h-6 hover:fill-primary"}
            >
              <title>Website / Link</title>
              <path
                fillRule="evenodd"
                d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        ) : null}
        {data.code_link ? (
          <Button
            href={`${data.code_link}`}
            target="_blank"
            isIconOnly
            as={NextLink}
            size="lg"
            radius="full"
            variant="light"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={"w-6 h-6 hover:fill-primary"}
            >
              <title>GitHub Repository</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
};
