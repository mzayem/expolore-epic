import ApiWidget from "./components/api-widget";

export default function ApiPage() {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ApiWidget />
      </div>
    </div>
  );
}
