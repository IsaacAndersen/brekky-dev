import { ImageResponse } from "next/og";
import { loadFonts } from "./og-fonts";

export const alt = "Brekky Labs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadFonts();

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
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontFamily: "Young Serif",
            color: "rgb(45, 45, 42)",
          }}
        >
          Brekky Labs
        </div>
        <div
          style={{
            fontSize: 26,
            fontFamily: "Bitter",
            color: "rgb(45, 45, 42)",
            opacity: 0.5,
            marginTop: 16,
          }}
        >
          Software development studio in Pittsburgh, PA
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
