import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, message } = body;

  // Log the contact form submission (replace with email service later)
  console.log("Contact form submission:", {
    firstName,
    lastName,
    email,
    message,
  });

  return NextResponse.json({ success: true });
}
