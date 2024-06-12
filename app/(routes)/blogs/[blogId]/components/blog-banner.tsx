"use client";

interface blogBannerProps {
  label: string;
  author: string;
  imageUrl: string;
}

export default function blogBanner({
  label,
  imageUrl,
  author,
}: blogBannerProps) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 lg:mx-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] bg-center overflow-hidden bg-cover"
      >
        <div className="absolute inset-0 bg-black opacity-50">
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-3 opacity-100">
            <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-sm text-white">
              {label}
            </div>
            <div className="text-white">Author: {author}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
