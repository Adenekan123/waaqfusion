import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authoptions } from "../auth/[...nextauth]/next-options";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const session = await getServerSession(authoptions);
  try{
    const response = await fetch(`${process.env.USER_ADMIN_API}/user/pin`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer  ${session?.apiToken}`,
        },
        body: JSON.stringify(body)
    });
    const result = await response.json();
    return NextResponse.json(result);
  }catch(err:any){
    console.log(err.message)
    return NextResponse.json(err.message);
  }

}

