"use client";

interface BannerProps {
  label: string;
  imageUrl: string;
}

export default function Banner({ label, imageUrl }: BannerProps) {
  return (
    <div
      className="flex flex-col justify-center items-center  h-[500px] bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
        <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-sm">
          {label}
        </div>
      </div>
      ;
    </div>
  );
}

//
