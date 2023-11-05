import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authoptions } from "../../auth/[...nextauth]/next-options";

const giftcardNotifications = async (apiToken: string) => {
  const response = await fetch(
    `${process.env.USER_ADMIN_API}/user/card-notification`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer  ${apiToken}`,
      },
    }
  );
  return await response.json();
};
const withdrawalNotifications = async (apiToken: string) => {
  const response = await fetch(
    `${process.env.USER_ADMIN_API}/user/wd-notification`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer  ${apiToken}`,
      },
    }
  );
  return await response.json();
};

export async function GET(request: NextRequest) {
  const session = await getServerSession(authoptions);
  if(!session?.apiToken) return NextResponse.json({message:'Invalid Token'});
  try {
    const [giftcards,withdrawal] = await Promise.all([giftcardNotifications(session?.apiToken),withdrawalNotifications(session?.apiToken)]);
    return NextResponse.json({giftcards,withdrawal});
  } catch (err: any) {
    console.log(err.message);
    return NextResponse.json(err.message);
  }
}
// export async function GET(request: NextRequest) {
//   const session = await getServerSession(authoptions);
//   try {
//     const response = await fetch(
//       `${process.env.USER_ADMIN_API}/user/card-notification`,
//       {
//         method: "GET",
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
