"use client";

import TextPressure from "./TextPressure";

export default function Footer() {
  return (
    <footer className="w-full bg-bg-primary border-t border-text-primary/10 overflow-hidden">
      <div className="relative h-[15vh] md:h-[20vh] w-full flex flex-col justify-end pb-8">
        <div className="opacity-20 hover:opacity-10 transition-opacity duration-1000 cursor-default">
          <TextPressure
            text="DINESHKUMAR"
            flex={true}
            scale={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#000000"
            minFontSize={48}
          />
        </div>
      </div>
    </footer>
  );
}
