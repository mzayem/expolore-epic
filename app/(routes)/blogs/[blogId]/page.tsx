import NextTopLoader from "nextjs-toploader";
import BlogView from "./components/blog-view";
import prismadb from "@/lib/prismadb";

export default async function BlogPage({
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

  if (!blog) {
    return <div>No blog found</div>;
  }

  return (
    <>
      <NextTopLoader />
      <BlogView blog={blog} />
    </>
  );
}
