import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "heyo: reach out";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const iconData = await readFile(
    join(process.cwd(), "public", "heyo-icon.png")
  );
  const iconBase64 = `data:image/png;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFF8F0",
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
            color: "#2d2d2a",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          heyo: reach out
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#9370DB",
            marginTop: 16,
          }}
        >
          Stay close to the people who matter
        </div>
      </div>
    ),
    { ...size }
  );
}
