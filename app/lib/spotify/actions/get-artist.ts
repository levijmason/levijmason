import { spotify } from "@/lib/spotify/client";
import { Artist } from "@spotify/web-api-ts-sdk";

export async function getArtistSpotify(data: string): Promise<Artist> {
  const res = await spotify.artists.get(data);
  return res;
}
