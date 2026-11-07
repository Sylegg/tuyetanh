import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Keep the layout stable when the on-screen keyboard reduces the visual viewport.
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  title: "Thiệp cưới Tuyết Anh & Minh Hiếu",
  description: "Thiệp cưới trực tuyến phong cách điện ảnh, sang trọng và tối ưu cho di động.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
