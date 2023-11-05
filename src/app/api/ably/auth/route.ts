import * as Ably from "ably/promises";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const uid = url.searchParams.get('uid');

  if (!process?.env?.NEXT_PUBLIC_ABLY_API_KEY || !uid) {
    return NextResponse.json({ message: "missing ably api key" },{status:500});
  }

  try {
    const client = new Ably.Rest(process?.env?.NEXT_PUBLIC_ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({
      clientId: uid,
    });
    return NextResponse.json(tokenRequestData);
  } catch (err: any) {
    console.log(err.message);
    return NextResponse.json(err.message);
  }
}
