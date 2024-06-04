"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

import { Separator } from "@/components/ui/separator";
import { Blog, Image } from "@prisma/client";
import Banner from "@/components/banner";
import BlogList from "@/components/blog-list";
import BlogCard from "@/components/ui/blog-card";

interface BlogWithImages extends Blog {
  images: Image[];
}

interface BlogsClientProps {
  data: BlogWithImages[];
}

export function BlogsClient({ data }: BlogsClientProps) {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <Heading
          title={`Blogs (${data.length})`}
          description="Read and create blogs here"
        />

        <Button onClick={() => router.push(`/blogs/new`)}>
          <Plus className="mr-2 h-4 w-4 " />
          Create New
        </Button>
      </div>
      <Separator className="my-5" />
      <BlogCard data={data} />
    </>
  );
}
