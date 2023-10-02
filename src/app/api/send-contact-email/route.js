import { mailOptions, transporter } from "@/service/mail-service";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const requestBody = await request.json();

    const { name, email, subject, message } = requestBody;

    if (
      !email ||
      email.trim() === "" ||
      !name ||
      name.trim() === "" ||
      !subject ||
      subject.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return NextResponse.error("Bad Request", { status: 400 });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: subject,
        html: `<b>Name: </b>${name}<br/><b>Email: </b>${email}<br/><b>Subject: </b>${subject}<br/><b>Message: </b>${message}`,
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
