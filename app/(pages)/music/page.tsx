import { getArtists } from "@/app/lib/cms/actions";
import { ArtistData } from "@/ui/features";
import Link from "next/link";

export default async function Music() {
  const artists = await getArtists();
  return (
    <section className="flex flex-col w-full space-y-14 md:px-16">
      <div className="flex flex-col gap-8 max-w-prose md:py-20">
        <h2 className="text-4xl font-bold">Learned in listening 🎧</h2>
        <p className="text-lg md:text-xl font-light leading-loose tracking-wide">
          Beyond tapping my fingers, music has been a masterclass in
          communication and collaboration. I&apos;ve been fortunate to be the{" "}
          <Link
            href="https://tripthe.fan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-normal underline leading-loose tracking-wide text-foreground hover:text-primary"
          >
            manager for some incredible artists
          </Link>
          , and have launched an{" "}
          <Link
            href="https://nodead.band"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-normal underline leading-loose tracking-wide text-foreground hover:text-primary"
          >
            archival record label
          </Link>{" "}
          preserving the tunes of artists that have moved on.
        </p>
      </div>
      <section className="flex flex-col md:flew-row w-full space-y-8t">
        {/* <div className="flex flex-col gap-8 max-w-prose md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold">
            Learned in listening
          </h2>
          <p className="text-lg md:text-xl font-light leading-loose tracking-wide">
            Beyond tapping my fingers, music has been a masterclass in
            communication and collaboration.
          </p>
        </div> */}
        <ArtistData artists={artists} />
      </section>
    </section>
  );
}
