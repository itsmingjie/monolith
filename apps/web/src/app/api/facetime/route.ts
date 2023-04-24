import { type NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { headers, ip } = request;

  const token = headers.get("cf-turnstile-response");

  if (!token) {
    return NextResponse.error();
  }

  const turnstileData = new FormData();
  turnstileData.append("secret", process.env.TURNSTILE_SECRET as string);
  turnstileData.append("response", token);
  turnstileData.append("ip", ip as string);

  const turnstileFetch = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: turnstileData,
    }
  );
  const turnstile = await turnstileFetch.json();

  if (!turnstile.success) {
    return NextResponse.error();
  }

  return NextResponse.json({
    url: process.env.FACETIME_URL as string,
  });
};
