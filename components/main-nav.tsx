"use client";

import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const route = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: `/create-blogs`,
      label: "Create Blog",
      active: pathname === `/create-blogs`,
    },
    {
      href: `/api-page`,
      label: "API",
      active: pathname === `/api-page`,
    },
  ];
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {route.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
