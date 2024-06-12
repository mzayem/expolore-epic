import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    if (!params.blogId) {
      return new NextResponse("Blog ID is required", { status: 400 });
    }

    const blog = await prismadb.blog.findUnique({
      where: {
        id: params.blogId,
      },
      include: {
        images: true,
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.log("[BLOG_GET]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string; blogId: string } }
) {
  try {
    const { name, title, content, images } = await req.json();

    if (!name) {
      return new NextResponse("name is required", { status: 400 });
    }

    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }

    if (!images || !images.length) {
      return new NextResponse("Images is required", { status: 400 });
    }

    if (!content) {
      return new NextResponse("Content is required", { status: 400 });
    }

    if (!params.blogId) {
      return new NextResponse("Blog ID is required", { status: 400 });
    }

    const blog = await prismadb.blog.update({
      where: {
        id: params.blogId,
      },
      data: {
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.log("[BLOG_PATCH]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string; blogId: string } }
) {
  try {
    if (!params.blogId) {
      return new NextResponse("Blog ID is required", { status: 400 });
    }

    const blog = await prismadb.blog.deleteMany({
      where: {
        id: params.blogId,
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.log("[BLOG_DELETE]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
