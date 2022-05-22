import Image from "next/image";
import Link from "next/link";
import { useTheme as useNextTheme } from "next-themes";

import {
  Container,
  Row,
  Col,
  Text,
  Spacer,
  Switch,
  useTheme,
} from "@nextui-org/react";

import logo from "../img/me.png";
import github from "../img/GitHub.png";
import instagram from "../img/Instagram.png";
import twitter from "../img/Twitter.png";
import linkedIn from "../img/LinkedIn.png";

const NavBar = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <header>
      <nav>
        <Container fluid>
          <Spacer />
          <Row align="center" justify="space-between">
            {/* Logo & Title */}
            <Col>
              <Row justify="flex-start" align="center">
                <Image
                  src={logo}
                  alt="Levi J Mason profile pic"
                  width={75}
                  height={75}
                />
                <Spacer />
                <Text
                  h1
                  size={40}
                  weight="bold"
                >
                  Levi J Mason
                </Text>
              </Row>
            </Col>

            {/* Nav Links */}
            <Row justify="center" align="center">
              <Link href="/">home </Link>
              <Spacer x={2} />
              <Link href="/about"> about </Link>
              <Spacer x={2} />
              <Link href="/projects"> projects </Link>
              <Spacer x={2} />
              <Link href="/contact"> contact</Link>
            </Row>

            <Col>
              <Row justify="flex-end" align="center">
                <Link href="https://www.github.com/levijmason">
                  <Image
                    src={github}
                    alt="GitHub logo"
                    width={36}
                    height={36}
                  />
                </Link>
                <Spacer x={0.5} />
                <Link href="https://www.linkedIn.com/in/levijmason">
                  <Image
                    src={linkedIn}
                    alt="linkedIn logo"
                    width={36}
                    height={36}
                  />
                </Link>
                <Spacer x={0.5} />
                <Link href="https://www.instagram.com/levijmason">
                  <Image
                    src={instagram}
                    alt="Instagram logo"
                    width={36}
                    height={36}
                  />
                </Link>
                <Spacer x={0.5} />
                <Link href="https://www.twitter.com/levijmason">
                  <Image
                    src={twitter}
                    alt="Twitter logo"
                    width={36}
                    height={36}
                  />
                </Link>

                <Spacer />
                {/* Theme toggle */}
                <Switch
                  checked={isDark}
                  onChange={(e) =>
                    setTheme(e.target.checked ? "dark" : "light")
                  }
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
