import Container from "@/components/ui/container";
import { BlogsClient } from "./components/blogs-client";
import { Separator } from "@radix-ui/react-separator";

export default function BlogFormPage() {
  return (
    <>
      <Container className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <BlogsClient data={[]} />
        </div>
      </Container>
    </>
  );
}
