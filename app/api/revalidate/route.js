import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";

const TAG_MAP = {
  settings: "promobanner",
  listino: "listino",
  gallery: "gallery",
};

function isAuthorized(request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return false; // senza segreto configurato, rifiuta tutto

  const received = Buffer.from(request.headers.get("Authorization") ?? "");
  const expected = Buffer.from(`Bearer ${secret}`);

  return received.length === expected.length && timingSafeEqual(received, expected);
}

export async function POST(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ message: "Accesso negato" }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "JSON non valido" }, { status: 400 });
  }

  const targetTag = TAG_MAP[body?._type];

  if (!targetTag) {
    return NextResponse.json({ message: "Tipo non mappato, ignorato" }, { status: 200 });
  }

  try {
    revalidateTag(targetTag, "max");
    return NextResponse.json({ revalidated: true, tag: targetTag, now: Date.now() });
  } catch (error) {
    console.error("Errore revalidate:", error);
    return NextResponse.json({ message: "Errore interno" }, { status: 500 });
  }
}