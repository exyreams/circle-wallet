import Image from "next/image";
import Link from "next/link";
import images from "@/assets";

import { Button } from "@/components";

const Navbar = () => {
  return (
    <>
      <Link href="/">
        <div className="absolute top-0 left-10 cursor-pointer z-10">
          <Image
            src={images.logo}
            alt="logo"
            style={{ objectFit: "contain" }}
            width={200}
            height={200}
          />
        </div>
      </Link>
      <div className="absolute top-0 right-10 pt-8">
        <Button name="Login" />
      </div>
    </>
  );
};

export default Navbar;
