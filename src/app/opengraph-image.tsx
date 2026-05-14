import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = "ALPHAXX AI search visibility platform";
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
          justifyContent: "space-between",
          background: "#f7f6f1",
          color: "#09090b",
          padding: 72,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              background: "#09090b",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            AX
          </div>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              color: "#0f766e",
              fontSize: 30,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 4,
            }}
          >
            AI Search Visibility
          </div>
          <div
            style={{
              maxWidth: 920,
              fontSize: 74,
              lineHeight: 1.05,
              fontWeight: 700,
            }}
          >
            Make your brand readable, retrievable, and citable.
          </div>
        </div>
      </div>
    ),
    size
  );
}
