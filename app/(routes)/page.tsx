import Banner from "@/components/banner";
import BlogList from "@/components/blog-list";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner
          label="Expore blogs here!"
          imageUrl="https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-may-one-spring-travel-banner-background-image_217010.jpg"
        />
        <div className="flex flex-col gap-y-9 px-4 sm:px-6 lg:px-8">
          <BlogList />
        </div>
      </div>
    </Container>
  );
}
