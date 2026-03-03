import Image from "next/image";

const images = [
  "/cube/database.jpg", // Data foundations
  "/cube/cloud.jpg", // Cloud
  "/cube/pipeline.webp", // Data engineering
  "/cube/chart.jpg", // Analytics
  "/cube/code.jpg", // Coding
  "/cube/neural.avif",
];

export default function HeroCube() {
  return (
    <div className="flex-auto flex items-center justify-center">
      {/* Perspective */}
      <div className="[perspective:1000px] w-[220px] h-[220px] sm:w-[280px] sm:h-[280px]">
        {/* Cube */}
        <div className="relative w-full h-full [transform-style:preserve-3d] animate-cube-spin hover:[animation-play-state:paused]">
          <Face src={images[0]} className="rotate-y-0 translate-z" />
          <Face src={images[1]} className="rotate-y-90 translate-z" />
          <Face src={images[2]} className="rotate-y-180 translate-z" />
          <Face src={images[3]} className="-rotate-y-90 translate-z" />
          <Face src={images[4]} className="rotate-x-90 translate-z" />
          <Face src={images[5]} className="-rotate-x-90 translate-z" />
        </div>
      </div>
    </div>
  );
}

function Face({ src, className }: { src: string; className: string }) {
  return (
    <div
      className={`absolute inset-0 rounded-xl overflow-hidden border border-black/10 shadow-xl bg-white/5 backdrop-blur ${className}`}
    >
      <Image
        src={src}
        alt="cube face"
        fill
        className="object-cover opacity-90"
        priority
      />
      {/* subtle premium overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
    </div>
  );
}
