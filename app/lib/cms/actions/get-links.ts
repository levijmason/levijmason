"use server";
import cms from "@/app/lib/cms/client";
import { readItems } from "@directus/sdk";

export interface Links {
  github?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  threads?: string;
  x?: string;
  youtube?: string;
  spotify?: string;
  website?: string;
  link?: string;
  email?: string;
}

export async function getLinks(): Promise<Links> {
  const data = (await cms.request(readItems("links"))) as any;
  if (!data) {
    throw new Error("No links data returned from CMS");
  }
  return data;
}
