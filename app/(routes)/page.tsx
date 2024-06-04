import Banner from "@/components/banner";
import BlogList from "@/components/blog-list";
import Container from "@/components/ui/container";
import prismadb from "@/lib/prismadb";

export default async function Home() {
  const blogs = await prismadb.blog.findMany();
  return (
    <>
      <Banner
        label="Expore blogs here!"
        imageUrl="https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-may-one-spring-travel-banner-background-image_217010.jpg"
      />

      <Container>
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <BlogList />
        </div>
      </Container>
    </>
  );
}
