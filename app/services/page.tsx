import { Card, CardBody, CardHeader } from "@nextui-org/card";

export default function Services() {
  return (
    <section className="justify-evenly w-full">
      <h2 className="text-4xl font-bold">My services</h2>
      <br />
      <p className="text-xl">
        Here are a few of the projects I&apos;ve worked on over the past few
        years.
      </p>
      <br />
      <Card className="p-4 mb-4">
        <CardHeader className="pb-0 pt-2 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2"></CardBody>
      </Card>
      <Card className="p-4 mb-4">
        <CardHeader className="pb-0 pt-2 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2"></CardBody>
      </Card>
      <Card className="p-4 mb-4">
        <CardHeader className="pb-0 pt-2 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2"></CardBody>
      </Card>

      {/* <p>
        I&apos;m a seasoned professional with over five years of experience in
        music business and tech consulting. With a strong foundation in
        full-stack development and experience at Endava, a global IT
        consultancy, I have built websites and applications from start to
        finish, delivering exceptional user experiences. As the founder of Trip
        the Fan, a thriving music management firm, I excels in developing
        strategic partnerships, curating exceptional artist experiences, and
        overseeing effective promotional campaigns. My ability to seamlessly
        blend music business and tech consulting makes me a valuable asset,
        bringing a unique perspective and wealth of experience to drive success.
      </p> */}
    </section>
  );
}
