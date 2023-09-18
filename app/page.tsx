import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

export default function Home() {
  return (
    <section className="justify-evenly w-full">
      <h2 className="text-4xl font-bold">Hey there!</h2>
      <br />
      <h3 className="text-2xl">My name is Levi, and</h3>
      <p className="text-xl">
        I&apos;m a <b>technology</b> and <b>music business</b> consultant based
        in Oklahoma City.
      </p>
      <br />
      <p className="text-xl">
        I&apos;ve spent a lot of the past <b>five years consulting</b> for
        agencies, small businesses, and creators, while also running my own{" "}
        <b>music management firm</b>.
      </p>
      <Divider className="my-8" />
      <h2 className="text-4xl font-bold">My expertise</h2>
      <br />
      <Card className="py-4 px-3">
        <CardHeader className="pb-0 pt-2 flex-col items-start">
          <h4 className="font-bold text-large">Frontend Engineering</h4>
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2"></CardBody>
      </Card>
    </section>
  );
}
