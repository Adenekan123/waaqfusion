import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authoptions } from "../[...nextauth]/next-options";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authoptions);
    const body = await request.json();
  try{
    const response = await fetch(`${process.env.USER_ADMIN_API}/user/profile/password`,{
        method:'PATCH',
        body: JSON.stringify({...body}),
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer  ${session?.apiToken}`
        }
    });
    const result = await response.json();
    if(result)
    return NextResponse.json(result);
  }catch(err:any){
    console.log(err.message)
    return NextResponse.json(err.message);
  }

}

