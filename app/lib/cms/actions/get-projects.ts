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
  images: Array<{ id: string; projects_id: string }>;
  featured?: boolean;
  cover: any;
}

export async function getProjects(): Promise<Array<Project>> {
  const data = (await cms.request(
    readItems("projects", {
      filter: {
        _or: [
          {
            status: {
              _eq: "published",
            },
          },
        ],
      },
    })
  )) as any;
  if (!data) {
    throw new Error("No projects data returned from CMS");
  }
  return data;
}
