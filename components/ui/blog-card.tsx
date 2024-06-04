"use client";

import { Blog, Image } from "@prisma/client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import ImageComponent from "next/image";
import { Button } from "./button";

interface BlogWithImages extends Blog {
  images: Image[];
}

interface BlogListProps {
  data: BlogWithImages[];
}

export default function BlogCard({ data }: BlogListProps) {
  return (
    <>
      <div className="flex">
        {data.map((blog) => (
          <Card key={blog.id} className=" flex flex-col space-y-5 my-10 w-full">
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
                  {blog?.content}
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
