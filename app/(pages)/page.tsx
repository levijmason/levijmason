import { getArtists } from "@/lib/cms/actions";
import { getFeaturedProjects } from "@/lib/cms/actions/get-featured-projects";
import { ArtistData, ProjectCard } from "@/ui/features";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import NextLink from "next/link";

export default async function Home() {
  const artists = await getArtists();
  const featuredProjects = await getFeaturedProjects();

  return (
    <section className="w-full flex flex-col space-y-60 snap-mandatory snap-y">
      {/* HEADER/ INTRO */}
      <div className="w-full md:items-center flex flex-col md:flex-row gap-24 pt-8 md:pt-28 md:pl-24 snap-always snap-center">
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
      <div className="w-full md:items-center flex flex-col md:flex-row gap-16 snap-always snap-center">
        <div className="flex flex-col gap-8 max-w-prose md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold">
            Learned in listening
          </h2>
          <p className="text-lg md:text-xl font-light leading-loose tracking-wide">
            Beyond tapping my fingers, music has been a masterclass in
            communication and collaboration.
          </p>
        </div>
        <ArtistData artists={artists} />
      </div>
      {/* PROJECTS */}
      <div className="w-full md:items-center justify-center flex flex-col-reverse md:flex-row gap-16 pb-8 md:pb-20 snap-always snap-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((p: any) => {
            return <ProjectCard key={p.name} data={p} featured={true} />;
          })}
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-6 max-w-prose md:py-12">
            <h2 className="text-2xl md:text-3xl font-bold">Due to doing</h2>
            <p className="text-lg md:text-xl font-light leading-loose tracking-wide">
              I&apos;ve started, and worked on a lot of projects
            </p>
          </div>
          <Button
            as={NextLink}
            href="/projects"
            color="primary"
            radius="full"
            variant="ghost"
            className="w-full text-foreground"
          >
            See projects
          </Button>
        </div>
      </div>
    </section>
  );
}
