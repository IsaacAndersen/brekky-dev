import { ImageResponse } from "next/og";

export const alt = "Brekky Labs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
        <div style={{ fontSize: 80, marginBottom: 16 }}>🍳</div>
        <div
          style={{
            fontSize: 64,
            color: "rgb(45, 45, 42)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          Brekky Labs
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgb(45, 45, 42)",
            opacity: 0.6,
            marginTop: 16,
          }}
        >
          Software development studio in Pittsburgh, PA
        </div>
      </div>
    ),
    { ...size }
  );
}
