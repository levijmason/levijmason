"use server";

import cms from "@/app/lib/cms/client";
import { readItems } from "@directus/sdk";

export interface Artist {
  name: string;
  link: string;
  spotify_id: string;
}

export async function getArtists(): Promise<Array<Artist>> {
  const data = (await cms.request(
    readItems("artists", {
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
    throw new Error("No artist data returned from CMS");
  }
  return data;
}
