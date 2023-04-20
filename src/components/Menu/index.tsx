import { Nav, MenuItem, MenuList } from "./styles";
import Image from "next/image";
import Link from "next/link";

export const Menu = () => {
  return (
    <Nav>
      <div className="menu-wrapper">
        <div className="menu-logo__container">
          <Image
            className="menu-logo__img"
            src="/images/logo.svg"
            alt="logo"
            priority
            width={100}
            height={100}
          />
        </div>

        <MenuList>
          <MenuItem>
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/pokedex">Pokedex</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/legendary">Legendaries</Link>
          </MenuItem>
        </MenuList>
      </div>
    </Nav>
  );
};
