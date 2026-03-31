import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "1Task: Focus timer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const iconData = await readFile(
    join(process.cwd(), "public", "app-icon.png")
  );
  const iconBase64 = `data:image/png;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "hsl(44.27, 74.1%, 72.75%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <img
          src={iconBase64}
          width={120}
          height={120}
          style={{ borderRadius: 26, marginBottom: 24 }}
        />
        <div
          style={{
            fontSize: 56,
            color: "rgb(45, 45, 42)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          1Task: Focus timer
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgb(45, 45, 42)",
            opacity: 0.6,
            marginTop: 16,
          }}
        >
          One thing at a time
        </div>
      </div>
    ),
    { ...size }
  );
}
