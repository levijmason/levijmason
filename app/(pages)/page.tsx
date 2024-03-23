import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/react";
import NextImage from "next/image";

export default function Home() {
  return (
    <section className="w-full flex flex-col md:flex-row md:items-center gap-24 pt-8 md:pt-28 md:pl-24 md:px-16">
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
        <h3 className="text-xl md:text-2xl font-light">My name is Levi, and</h3>
        <p className="text-lg md:text-xl font-light leading-loose tracking-wide">
          I&apos;m a{" "}
          <Link
            href="/tech"
            className="text-lg md:text-xl font-normal underline leading-loose tracking-wide text-foreground hover:text-primary"
          >
            technology
          </Link>{" "}
          and{" "}
          <Link
            href="/music"
            className="text-lg md:text-xl font-normal underline leading-loose tracking-wide text-foreground hover:text-primary"
          >
            music business
          </Link>{" "}
          consultant based in <b>Oklahoma City</b>
        </p>
        <br />
        <p className="text-lg md:text-xl font-light leading-loose tracking-wide">
          I&apos;ve spent a lot of the past <b>five years consulting</b> with
          agencies, small businesses, and 🧑‍🎤 creators
        </p>
      </div>
    </section>
  );
}
