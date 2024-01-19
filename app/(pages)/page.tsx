import { Artist, getArtists } from "@/lib/cms/actions";
import { getFeaturedProjects } from "@/lib/cms/actions/get-featured-projects";
import { getArtistSpotify } from "@/lib/spotify/actions";
import { Image } from "@nextui-org/image";
import { Card, CardBody, ScrollShadow } from "@nextui-org/react";
import NextImage from "next/image";
import { ProjectCard } from "../ui/features";

const ArtistData = async ({ artists }: { artists: Array<Artist> }) => {
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
        className="flex w-full min-w-[15rem] md:min-w-[20rem] snap-x snap-mandatory overflow-x-auto scroll-pl-10 scroll-pr-10 -mx-0 px-0 gap-4"
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
                base: "flex flex-col md:flex-row p-4 gap-2 min-w-[15rem] md:min-w-[23rem] md:min-h-[10rem] items-center",
                body: "flex flex-col min-w-content items-start space-y-3",
              }}
            >
              <Image
                as={NextImage}
                src={spotifyData.images[1].url}
                alt={artist.name}
                width={200} //{spotifyData.images[0].height
                height={200}
                classNames={{
                  img: "object-cover rounded-lg",
                }}
              />
              <CardBody>
                <h4 className="text-2xl font-bold">{artist.name}</h4>
                {/* <Link
                isExternal
                href={spotifyData.external_urls.spotify}
                className="text-default-800 flex flex-row gap-2"
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
                Followers: {spotifyData.followers.total}
              </Link> */}
              </CardBody>
            </Card>
          );
        })}
      </ScrollShadow>
    </section>
  );
};

export default async function Home() {
  const artists = await getArtists();
  const featuredProjects = await getFeaturedProjects();

  return (
    <section className="w-full flex flex-col space-y-56 snap-mandatory snap-y">
      {/* HEADER/ INTRO */}
      <div className="w-full md:items-center flex flex-col md:flex-row gap-24 pt-8 md:pt-28 md:pl-20 snap-always snap-center">
        <Image
          as={NextImage}
          src="/images/levi-clouds.png"
          alt="Levi Mason"
          width={200}
          height={200}
          className="min-w-[200px] min-h-[200px]"
        />
        <div className="flex flex-col max-w-prose">
          <h2 className="text-3xl md:text-4xl font-bold">👋 Hey there!</h2>
          <br />
          <h3 className="text-xl md:text-2xl font-light">
            My name is Levi, and
          </h3>
          <p className="text-lg md:text-xl font-light leading-loose tracking-wide">
            I&apos;m a <b>technology</b> and <b>business</b> consultant based in{" "}
            <b>Oklahoma City</b>
          </p>
          <br />
          <p className="text-lg md:text-xl font-light leading-loose tracking-wide">
            I&apos;ve spent a lot of the past <b>five years consulting</b> with
            agencies, small businesses, and 🧑‍🎤 creators
          </p>
        </div>
      </div>
      {/* MUSIC */}
      <div className="w-full md:items-center flex flex-col md:flex-row gap-16 pb-8 md:pb-24 snap-always snap-center">
        <div className="flex flex-col gap-8 max-w-prose md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold">
            Learned in listening
          </h2>
          <p className="text-lg md:text-xl text-opacity-50 font-light leading-loose tracking-wide">
            Beyond just tapping my fingers, music has been a masterclass in
            communication, and collaboration. From learning my first instruments
            to managing independent artists, I&apos;ve always had a hum in the
            drum.
          </p>
        </div>
        <ArtistData artists={artists} />
      </div>
      {/* PROJECTS */}
      <div className="w-full md:items-center flex flex-col-reverse md:flex-row gap-16 pb-8 md:pb-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuredProjects.map((project) => {
            return (
              <ProjectCard key={project.code_link} data={project} featured />
            );
          })}
        </div>
        <div className="flex flex-col gap-8 max-w-prose md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold">Due to doing</h2>
          <p className="text-lg md:text-xl font-light leading-loose tracking-wide">
            I&apos;ve had the privelege of working for and alongside some
            amazing teams.
          </p>
        </div>
      </div>
    </section>
  );
}
