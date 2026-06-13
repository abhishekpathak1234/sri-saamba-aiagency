import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "linear-gradient(135deg, #6B38C4 0%, #1A4FBB 100%)",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="100"
          height="100"
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
