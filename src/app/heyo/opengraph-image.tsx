import { ImageResponse } from "next/og";
import { loadFonts, loadIcon } from "../og-fonts";

export const alt = "heyo: reach out";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [fonts, icon] = await Promise.all([
    loadFonts(),
    loadIcon("heyo-icon.png"),
  ]);

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
        }}
      >
        <img
          src={icon}
          width={140}
          height={140}
          style={{ borderRadius: 30, marginBottom: 32 }}
        />
        <div
          style={{
            fontSize: 60,
            fontFamily: "Young Serif",
            color: "#2d2d2a",
          }}
        >
          heyo: reach out
        </div>
        <div
          style={{
            fontSize: 26,
            fontFamily: "Bitter",
            color: "#9370DB",
            marginTop: 12,
          }}
        >
          Stay close to the people who matter
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
