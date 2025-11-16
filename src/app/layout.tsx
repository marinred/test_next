import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/share/lib/styleRegistry";

export const metadata: Metadata = {
  title: "NextTest",
  description: "NextTest Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
