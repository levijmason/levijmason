import { getLinks } from "@/app/lib/cms/actions";
import { SocialLinks } from "@/ui/layout";
import { Divider } from "@nextui-org/divider";

export const Footer = async () => {
  const links = await getLinks();

  return (
    <footer className="flex flex-col items-center p-8 md:px-28 w-full h-32 bg-background">
      <Divider className="my-14 rounded-full" />
      <SocialLinks links={links} />
      <p className="text-foreground pt-12 pb-16">
        <b>©</b> {new Date().getFullYear()}, <b>Levi J. Mason</b>
      </p>
    </footer>
  );
};
