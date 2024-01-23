import { Artist } from "@/lib/cms/actions";
import { getArtistSpotify } from "@/lib/spotify/actions";
import { Image } from "@nextui-org/image";
import { Card, CardBody, Link, ScrollShadow } from "@nextui-org/react";
import NextImage from "next/image";

export const ArtistData = ({ artists }: { artists: Array<Artist> }) => {
  // Sort artists alphabetically
  artists.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );

  return (
    <section className="flex flex-col w-full min-w-[15rem] md:min-w-[20rem] gap-6">
      <small className="font-light uppercase text-sm pl-1">
        Management clients
      </small>
      <ScrollShadow
        hideScrollBar
        orientation="horizontal"
        className="flex w-full min-w-[15rem] md:min-w-[22rem] snap-x snap-mandatory overflow-x-auto scroll-pl-10 scroll-pr-10 -mx-0 px-0 gap-4"
      >
        {artists.map(async (artist: Artist) => {
          const spotifyData = await getArtistSpotify(artist.spotify_id);

          return (
            <Card
              key={artist.spotify_id}
              shadow="none"
              className={
                "snap-start mx-1 bg-default-100 border-2 border-transparent hover:border-primary-400"
              }
              classNames={{
                base: "flex flex-col md:flex-row p-4 gap-2 min-w-[15rem] md:min-w-[25rem] md:min-h-[10rem]",
                body: "flex flex-col h-full justify-between min-w-content items-start gap-4",
              }}
            >
              <div className="flex flex-col max-h-56 max-w-56 min-h-52 min-w-52 md:min-h-44 md:min-w-44 aspect-square">
                <Image
                  as={NextImage}
                  src={spotifyData.images[1].url}
                  alt={artist.name}
                  width={202}
                  height={202}
                  className="rounded-lg object-cover w-full h-full aspect-square self-center"
                />
              </div>
              <CardBody>
                <h4 className="text-2xl font-bold">{artist.name}</h4>
                <div className="flex flex-row gap-4 w-full justify-end">
                  <Link
                    isExternal
                    href={spotifyData.external_urls.spotify}
                    className="text-default-800 flex flex-row gap-2 hover:text-primary-400"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className={"w-6 h-6"}
                    >
                      <title>Spotify</title>
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </Link>
                  <Link
                    isExternal
                    href={artist.link}
                    className="text-default-800 flex flex-row gap-2 hover:text-primary-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={"w-6 h-6"}
                    >
                      <title>Website / Link</title>
                      <path
                        fillRule="evenodd"
                        d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </ScrollShadow>
    </section>
  );
};
