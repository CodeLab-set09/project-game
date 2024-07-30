import React from "react";
import { ModeToggle } from "./ModeToggle";

const BaseHeader = () => {
  return (
    <main className="flex h-[70px] border-b justify-center items-center">
      <div className="w-[90%] flex h-full items-center justify-between">
        <div>Logo</div>
        <section>
          <ModeToggle />
        </section>
      </div>
    </main>
  );
};

export default BaseHeader;
