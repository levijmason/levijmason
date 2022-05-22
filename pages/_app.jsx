import "../styles/globals.css";
import { darkTheme, lightTheme } from "../styles/themes";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import NavBar from "../components/NavBar";

function ManageMe({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <NavBar />

        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default ManageMe;
