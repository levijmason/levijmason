"use server";

import cms from "@/app/lib/cms/client";
import { readItems } from "@directus/sdk";

interface Resume {
  summary: string;
  skills: Array<string>;
  tech_stack: Array<string>;
}

export async function getResume(): Promise<Resume> {
  const data = (await cms.request(readItems("resume"))) as any;
  if (!data) {
    throw new Error("No resume data returned from CMS");
  }
  return data;
}
