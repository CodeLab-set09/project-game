"use client";

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
          <div className="text-center">
            {" "}
            2024 Codify by CodeLab, All rights are reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            {/* <li>
              <XIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
            <li>
              <InstaIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};
