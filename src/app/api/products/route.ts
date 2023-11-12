import { NextRequest, NextResponse } from "next/server";
console.log(`${process.env.API_BASE_URL}/product/filter`)
export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/product/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    return NextResponse.json(result);
  } catch (err: any) {
    console.log(err.message);
    return NextResponse.json(err.message);
  }
}

// export async function DELETE(request: NextRequest) {
//   const session = await getServerSession(authoptions);
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get("productid");
//   try {
//     const response = await fetch(
//       `${process.env.API_BASE_URL}/product/delete?productid=${id}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer  ${session?.apiToken}`,
//         },
//       }
//     );
//     const result = await response.json();
//     return NextResponse.json(result);
//   } catch (err: any) {
//     console.log(err.message);
//     return NextResponse.json(err.message);
//   }
// }


