import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";

export const alt = "Aman Nikumb — Software Engineer, Data";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#08090a",
          backgroundImage:
            "radial-gradient(ellipse 60% 60% at 75% 30%, rgba(45,212,191,0.18), transparent)",
          color: "#f7f8f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#2dd4bf", fontSize: 26, letterSpacing: 4 }}>
          <div style={{ width: 14, height: 14, borderRadius: 99, background: "#2dd4bf" }} />
          PORTFOLIO
        </div>
        <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: -3, marginTop: 24 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 40, color: "#2dd4bf", marginTop: 8 }}>{profile.role}</div>
        <div style={{ fontSize: 30, color: "#8a8f98", marginTop: 28, maxWidth: 900, lineHeight: 1.4 }}>
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
