import prismadb from "@/lib/prismadb";
import { BlogForm } from "./components/blog-form";
import Container from "@/components/ui/container";

export default async function BlogFormPage({
  params,
}: {
  params: { blogId: string };
}) {
  const blog = await prismadb.blog.findUnique({
    where: {
      id: params.blogId,
    },
    include: {
      images: true,
    },
  });
  return (
    <Container className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BlogForm initialData={blog} />
      </div>
    </Container>
  );
}
