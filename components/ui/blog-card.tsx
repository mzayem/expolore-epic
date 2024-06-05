"use client";

import { Blog, Image } from "@prisma/client";

import { Card, CardContent, CardDescription, CardTitle } from "./card";
import ImageComponent from "next/image";
import { Button } from "./button";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface BlogWithImages extends Blog {
  images: Image[];
}

interface BlogListProps {
  data: BlogWithImages[];
}

export default function BlogCard({ data }: BlogListProps) {
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <div className="flex-col">
        {data.map((blog) => (
          <Card
            onClick={() => {
              router.push(`/blogs/${blog.id}`);
            }}
            key={blog.id}
            className=" flex flex-col space-y-5 my-10 w-full"
          >
            <CardContent className="flex flex-row gap-10 py-5">
              <ImageComponent
                src={blog?.images?.[0]?.url}
                alt="image"
                width={70}
                height={70}
                className="aspect-square justify-center object-cover w-28 h-28 rounded-md"
              />
              <div className="flex flex-col justify-center space-y-3 w-4/5 ">
                <div>
                  <CardTitle>{blog.title}</CardTitle>
                  <p className=" text-gray-500">Author: {blog?.name}</p>
                </div>

                <CardDescription className="text-gray-700">
                  {blog?.content.substring(0, 50)}
                </CardDescription>
              </div>
              <div className=" flex flex-col justify-center">
                <Button>view post</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
