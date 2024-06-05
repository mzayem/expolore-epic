"use client";

import { Blog, Image } from "@prisma/client";
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
    <div className="grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((blog) => (
        <div key={blog.id} className="overflow-hidden rounded-lg shadow-md">
          <div
            onClick={() => {
              router.push(`/blogs/${blog.id}`);
            }}
            className="cursor-pointer"
          >
            <ImageComponent
              src={blog?.images?.[0]?.url}
              alt="image"
              width={500}
              height={300}
              className="object-cover w-full h-64"
            />
            <div className="p-4 flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-500 mb-2">Author: {blog?.name}</p>
              <p className="text-gray-700">{blog?.content.substring(0, 100)}</p>
              <div className="py-4 items-end justify-end">
                <Button onClick={() => router.push(`/blogs/${blog.id}`)}>
                  View Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
