import { ImageResponse } from "next/og";
import { loadFonts, loadIcon } from "../og-fonts";

export const alt = "1Task: Focus timer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [fonts, icon] = await Promise.all([
    loadFonts(),
    loadIcon("app-icon.png"),
  ]);

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
            color: "rgb(45, 45, 42)",
          }}
        >
          1Task
        </div>
        <div
          style={{
            fontSize: 26,
            fontFamily: "Bitter",
            color: "rgb(45, 45, 42)",
            opacity: 0.5,
            marginTop: 12,
          }}
        >
          Focus timer for iOS. One thing at a time.
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
