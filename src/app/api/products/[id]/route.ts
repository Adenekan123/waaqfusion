import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest,{params}:{params:{id:string}}) {
  try {
    const response = await fetch(
      `${process.env.API_BASE_URL}/product/${params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return NextResponse.json(result);
  } catch (err: any) {
    console.log(err.message);
    return NextResponse.json(err.message);
  }
}
