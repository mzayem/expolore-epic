"use client";

import { ApiList } from "@/components/api-list";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

export default function ApiWidget() {
  return (
    <>
      <div className="p-4">
        <Heading
          title="Api"
          description="use these api to fetch blogs on your site"
        />
      </div>
      <Separator />
      <ApiList entityName="blogs" entityIdName="{blogId}" />
    </>
  );
}
