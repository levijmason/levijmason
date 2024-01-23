"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

const ROLES = [
  { id: 444444, title: "@*)%$#@!(@!#", company: "^&%*)(@!$#&" },
  {
    id: 444442,
    title: "#)(@#$^#$^(&)",
    company: "(*&)%$#$#@!",
  },
  {
    id: 444443,
    title: "(*&^%$#@(@#!",
    company: "##$^(&)%$#)",
  },
  {
    id: 444444,
    title: "^&%$#&@*)%$#@",
    company: "@*)(@#$^(@!#",
  },
];

export const WorkExperience = () => {
  return (
    <div className="mt-6 space-y-8">
      <h2 className="text-3xl font-bold">Work experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 blur-md">
        {ROLES.map((role: any) => (
          <Card
            key={role.id}
            shadow="none"
            className={"w-full p-4"}
            classNames={{
              base: "bg-default-100 border-2 border-primary-400",
            }}
          >
            <CardHeader>
              <h4 className="text-lg font-bold">{role.title}</h4>
            </CardHeader>

            <CardBody className="flex flex-col items-start">
              <p className="text-tiny uppercase font-semibold">
                {role.company}
              </p>
\            </CardBody>

            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
