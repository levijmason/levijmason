"use server";

import cms from "@/lib/cms/client";
import { readItems } from "@directus/sdk";

export interface Project {
  status: "published" | "draft";
  name: string;
  company: string;
  description: string;
  tech_stack: Array<string>;
  code_link: string;
  preview_link: string;
  images: Array<string>;
  featured?: boolean;
}

export async function getFeaturedProjects(): Promise<Array<Project>> {
  const data = (await cms.request(
    readItems("projects", {
      filter: {
        _or: [
          {
            featured: {
              _eq: true,
            },
          },
        ],
      },
    })
  )) as any;
  if (!data) {
    throw new Error("No projects data returned from CMS");
  }
  return data.sort((a: Project, b: Project) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );
}
