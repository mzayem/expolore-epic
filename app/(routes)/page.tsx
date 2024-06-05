import Banner from "@/components/banner";
import BlogList from "@/components/blog-feed";
import Container from "@/components/ui/container";
import prismadb from "@/lib/prismadb";

export default async function Home() {
  const blogs = await prismadb.blog.findMany({
    include: {
      images: true,
    },
  });
  return (
    <>
      <Banner
        label="Expore blogs here!"
        imageUrl="https://png.pngtree.com/background/20210710/original/pngtree-cartoon-national-holiday-season-travel-banner-picture-image_1008735.jpg"
      />

      <Container>
        <div className="mx-4 sm:mx-8 lg:mx-16">
          <BlogList data={blogs} />
        </div>
      </Container>
    </>
  );
}
