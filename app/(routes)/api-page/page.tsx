import Container from "@/components/ui/container";
import ApiWidget from "./components/api-widget";

export default function ApiPage() {
  return (
    <Container className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ApiWidget />
      </div>
    </Container>
  );
}
