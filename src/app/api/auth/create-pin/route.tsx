import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
  try{
    const response = await fetch(`${process.env.USER_ADMIN_API}/user/pin`,{
        method:'POST',
        body: JSON.stringify({...body}),
        headers:{
          'Content-Type':'Application/json'
      }
    });
    const result = await response.json();
    // if(result)
    return NextResponse.json(result);
  }catch(err:any){
    console.log(err.message)
    return NextResponse.json(err.message);
  }

}

