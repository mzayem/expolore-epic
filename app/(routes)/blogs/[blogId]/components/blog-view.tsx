import BlogBanner from "./blog-banner";
import Container from "@/components/ui/container";
import { Blog, Image } from "@prisma/client";
import BlogContent from "./content";

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
      <BlogContent content={blog?.content} images={blog?.images[0].url} />
    </>
  );
}
