"use client";
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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Nav = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Projects", "About", "Contact"];

  console.log(currentPath);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth={"full"} height={"5rem"}>
      <NavbarContent>
        <NavbarBrand>
          <Link href={"/"}>
            <h1 className="text-2xl font-bold">Levi J. Mason</h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <UILink
              color={
                `/${item.toLowerCase()}` === currentPath
                  ? "primary"
                  : "foreground"
              }
              className="w-full"
              href={`/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </UILink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitcher />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className={"py-4"}>
            <UILink
              color={
                `/${item.toLowerCase()}` === currentPath
                  ? "primary"
                  : "foreground"
              }
              className={"w-full text-3xl"}
              href={`/${item.toLowerCase()}`}
            >
              {item}
            </UILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
