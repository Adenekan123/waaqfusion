import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/image/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "image/webp",
      },
    });
    const result = await response.blob();
    console.log(result)
    return new Response(result)
  } catch (err: any) {
    console.log(err.message);
    return NextResponse.json(err.message);
  }
}
