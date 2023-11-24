import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authoptions } from "../../auth/[...nextauth]/next-options";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authoptions);
  console.log(session)
  try{
    const response = await fetch(`${process.env.API_PARTNER_BASE_URL}/profile/user`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${session?.apiToken}`
        }
    });
    const result = await response.json();
    return NextResponse.json(result);
  }catch(err:any){
    console.log(err.message)
    return NextResponse.json(err.message);
  }

}
export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authoptions);
  const body = await request.json();
  try{
    const response = await fetch(`${process.env.API_PARTNER_BASE_URL}/profile/user`,{
        method:'PATCH',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${session?.apiToken}`
        },
        body:JSON.stringify(body)
    });
    const result = await response.json();
    return NextResponse.json(result);
  }catch(err:any){
    console.log(err.message)
    return NextResponse.json(err.message);
  }

}

