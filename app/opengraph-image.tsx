import { ImageResponse } from "next/og";

export const alt = "Ali Haggag — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0e1418",
          color: "#ece7de",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8a9196",
          }}
        >
          <span>Alihaggag.com</span>
          <span>Cairo, EG</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 28, color: "#3d7a6a", letterSpacing: 3 }}>
            SOFTWARE ENGINEER
          </div>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 980 }}>
            National-scale fintech systems and enterprise AI platforms.
          </div>
          <div style={{ fontSize: 22, color: "#c4a574" }}>
            Spring Boot · Distributed systems · LLMs
          </div>
        </div>
      </div>
    ),
    size,
  );
}
