import Image from "next/image";
import images from '@/assets'

const Navbar = () => {
  return (
    <div>
      <Image
        src={images.logo}
        alt="logo"
        style={{ objectFit: "contain" }}
        width={200}
        height={200}
        className="absolute top-0 left-10 "
      />
    </div>
  );
};

export default Navbar;
