import { mailOptions, transporter } from "@/service/mail-service";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const requestBody = await request.json();

    const { email } = requestBody;

    if (!email || email.trim() === "") {
      return NextResponse.error("Bad Request", { status: 400 });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Newsletter Signup",
        html: `<b>Email: </b>${email}`,
      });
    } catch (error) {
      console.log(error);
      return NextResponse.error("Bad Request", { status: 400 });
    }
    return NextResponse.json(
      { message: "Successfully Submitted" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.error("Error processing the request", { status: 500 });
  }
}
