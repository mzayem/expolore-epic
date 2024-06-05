"use client";

import { Blog, Image } from "@prisma/client";
import Container from "./ui/container";
import BlogCard from "./ui/blog-card";

interface BlogWithImages extends Blog {
  images: Image[];
}

interface BlogListProps {
  data: BlogWithImages[];
}

export default function BlogList({ data }: BlogListProps) {
  return (
    <Container className="my-10">
      <p className="text-gray-600">Hot blogs</p>
      <h3 className="text-3xl font-bold">Latest blogs</h3>
      <BlogCard data={data} />
    </Container>
  );
}
