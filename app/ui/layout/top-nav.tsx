"use client";
import { ThemeSwitcher } from "@/ui/layout";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Link as UILink } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import NextImage from "next/image";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const TopNav = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Projects", "Resume", "Contact"];
  const router = useRouter();

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      maxWidth={"full"}
    >
      <NavbarContent justify="start">
        <NavbarBrand
          as={Link}
          href={"/"}
          className="flex flex-row gap-4 items-center"
        >
          {currentPath === "/" ? null : (
            <Image
              as={NextImage}
              aria-label="Levi Mason logo"
              alt="Levi Mason logo"
              src="/images/levi-clouds.png"
              width={53}
              height={53}
              classNames={{
                img: "aspect-square min-w-[53px] min-h-[53px]",
              }}
            />
          )}
          <h1 className="text-2xl md:text-3xl font-extrabold hover:text-primary">
            Levi J. Mason
          </h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex">
        <div className="flex space-x-6 py-3 px-6 bg-default-100 border-2 border-transparent rounded-full">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <UILink
                href={`/${item.toLowerCase()}`}
                color={
                  currentPath === `/${item.toLowerCase()}`
                    ? "primary"
                    : "foreground"
                }
                size="lg"
                className={"w-full hover:text-primary"}
              >
                {item}
              </UILink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent justify="end">
        <div className="hidden md:flex">
          <ThemeSwitcher />
        </div>
        <NavbarMenuToggle
          icon={
            isMenuOpen ? (
              <svg
                aria-label="Close menu"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                aria-label="Open menu"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            )
          }
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex md:hidden"
        />
      </NavbarContent>

      <NavbarMenu className="py-20 gap-6">
        <div className="flex flex-col pl-4">
          {menuItems.map((item, index) => {
            const onPressHandler = () => {
              setIsMenuOpen(false);
              router.push(`/${item.toLowerCase()}`);
            };
            return (
              <>
                <NavbarMenuItem key={`${item}-${index}`} className={"py-4"}>
                  <UILink
                    onPress={onPressHandler}
                    color={
                      currentPath === `/${item.toLowerCase()}`
                        ? "primary"
                        : "foreground"
                    }
                    className={"w-full text-2xl hover:text-primary-400"}
                  >
                    {item}
                  </UILink>
                </NavbarMenuItem>
                <Divider className="rounded-full" />
              </>
            );
          })}
        </div>
        <ThemeSwitcher />
      </NavbarMenu>
    </Navbar>
  );
};
