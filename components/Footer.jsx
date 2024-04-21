const Footer = () => {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="flex flex-col items-center rounded-md p-4 py-8">
        <div className="text-center text-md font-semibold text-white">
          <a
            href="#"
            className="px-6 py-2 font-poppins transition cursor-pointer hover:underline underline-offset-2 hover:uppercase"
          >
            About
          </a>
          <a
            href="#"
            className="px-6 py-2 font-poppins transition cursor-pointer hover:underline underline-offset-2 hover:uppercase"
          >
            Features
          </a>
          <a
            href="#"
            className="px-6 py-2 font-poppins transition cursor-pointer hover:underline underline-offset-2 hover:uppercase"
          >
            Works
          </a>
          <a
            href="#"
            className="px-6 py-2 font-poppins transition cursor-pointer hover:underline underline-offset-2 hover:uppercase"
          >
            Support
          </a>
          <a
            href="#"
            className="px-6 py-2 font-poppins transition cursor-pointer hover:underline underline-offset-2 hover:uppercase"
          >
            Help
          </a>
        </div>
        <div className="mb-8 mt-8 w-48 border-b  border-solid border-b-white"></div>
        <p className="text-sm text-white font-semibold font-poppins">
          © Copyright 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
