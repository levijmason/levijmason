import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Input, Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";

export default function Contact() {
  return (
    <section className="justify-evenly lg:my-12">
      <h2 className="text-4xl font-bold pb-4">
        Interested in working together?
      </h2>
      <p>
        Feel free to reach out using the form below, or by emailing me at{" "}
        <Link href="mailto:levi@bad.glass">levi@bad.glass</Link>!
      </p>
      <Divider className="my-8" />
      <form className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <Input
            isRequired
            type="text"
            variant="underlined"
            label="Name"
            placeholder="Patrick Star"
            size="lg"
          />
          <Input
            isRequired
            type="email"
            variant="underlined"
            label="Email"
            placeholder="you.look@bad.glass"
            size="lg"
          />
        </div>
        <Textarea
          isRequired
          variant="underlined"
          label="Message"
          placeholder="Type your message here..."
          size="lg"
        />
        <Button color="primary" className="w-full lg:w-auto">
          Send message
        </Button>
      </form>
    </section>
  );
}
