"use client";

import { ApiList } from "@/components/api-list";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

export default function ApiWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "";
  }
  return (
    <>
      <div className="p-4">
        <Heading
          title="Api"
          description="use these api to fetch blogs on your site"
        />
      </div>
      <Separator />
      <ApiList entityName="blogs" entityIdName="blogId" />
    </>
  );
}
