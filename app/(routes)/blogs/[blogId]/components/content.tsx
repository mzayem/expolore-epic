"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/ui/container";
import Image from "next/image";
import { useState } from "react";
import ImageView from "./image-view";

interface BlogContentProps {
  content: string;
  images: { id: string; url: string }[];
}

export default function BlogContent({ content, images }: BlogContentProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  return (
    <Container className="flex flex-col justify-center items-center ">
      <div className="mb-4 p-8 text-left w-full  relative">
        <h3 className="text-3xl md:text-2xl sm:text-1xl font-bold pb-5">
          Post Content
        </h3>
        <p>{content}</p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-screen-lg px-8 relative pb-10"
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
              onClick={() => handleImageClick(image.url)}
            >
              <div className="p-1 h-full">
                <Card className="relative h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-6 relative h-full">
                    <Image
                      src={image.url}
                      alt="image"
                      layout="fill"
                      className="object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute lg:-left-14 md:left-4 sm:left-4  opacity-100 hover:opacity-100" />
        <CarouselNext className="absolute lg:-right-14 md:right-4 sm:right-4 opacity-100 hover:opacity-100" />
      </Carousel>

      {selectedImage && (
        <ImageView
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </Container>
  );
}
