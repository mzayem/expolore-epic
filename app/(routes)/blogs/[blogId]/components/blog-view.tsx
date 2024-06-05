import BlogBanner from "./blog-banner";
import { Blog, Image } from "@prisma/client";
import BlogContent from "./content";
import ImageView from "./image-view";
import { useState } from "react";

interface BlogWithImages extends Blog {
  images: Image[];
}

interface BlogViewParams {
  blog: BlogWithImages;
}

export default async function BlogView({ blog }: BlogViewParams) {
  return (
    <>
      <BlogBanner
        label={blog?.title}
        author={blog?.name}
        imageUrl={blog?.images[0]?.url}
      />
      <BlogContent content={blog?.content} images={blog.images} />
    </>
  );
}
