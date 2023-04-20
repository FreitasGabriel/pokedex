import { Nav } from "./styles";
import Image from "next/image";

export const Menu = () => {
  return (
    <Nav>
      <div className="menu-logo__container">
        <Image
          className="menu-logo__img"
          src="/images/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
    </Nav>
  );
};
