import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#FAF5EC",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <svg width="48" height="48" viewBox="0 0 40 40">
            <line x1="2" y1="24" x2="38" y2="24" stroke="#C1592C" strokeWidth="3" />
            <circle cx="20" cy="24" r="9" fill="#C1592C" />
          </svg>
          <span style={{ fontSize: 40, fontWeight: 600, color: "#2E2A24" }}>{site.name}</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 600,
            color: "#2E2A24",
            maxWidth: 900,
            lineHeight: 1.2,
          }}
        >
          Tecnologia com cara da nossa região
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6B5D4F", marginTop: 28, maxWidth: 820 }}>
          Consultoria de software em {site.baseCity} e região
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
