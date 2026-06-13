import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "linear-gradient(135deg, #6B38C4 0%, #1A4FBB 100%)",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Lightning bolt path rendered as inline SVG */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M13 2L4.09 12.99H11L10 22L19.91 11H13L13 2Z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
