import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authoptions } from "../../auth/[...nextauth]/next-options";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authoptions);
  try{
    const response = await fetch(`${process.env.USER_ADMIN_API}/user/profile/image`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer  ${session?.apiToken}`
        }
    });
    const result = await response.json();
    return NextResponse.json(result);
  }catch(err:any){
    console.log(err.message)
    return NextResponse.json(err.message);
  }

}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authoptions);
  const body = await request.formData();
  console.log(body)
  try{
    const response = await fetch(`${process.env.USER_ADMIN_API}/user/profile/image`,{
        method:'PATCH',
        headers:{
          'Authorization':`Bearer  ${session?.apiToken}`
        },
        body
    });
    const result = await response.json();
    return NextResponse.json(result);
  }catch(err:any){
    console.log(err.message)
    return NextResponse.json(err.message);
  }

}

