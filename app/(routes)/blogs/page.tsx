import Container from "@/components/ui/container";
import { BlogsClient } from "./components/blogs-client";
import prismadb from "@/lib/prismadb";

export const revalidate = 0;

export default async function BlogsPage() {
  const blogs = await prismadb.blog.findMany({
    include: {
      images: true,
    },
  });

  return (
    <>
      <Container className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <BlogsClient data={blogs} />
        </div>
      </Container>
    </>
  );
}
