import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshavardhan Yeshwant Patankar",
  description:
    "I have an MBA from the University of Michigan Ross School of Business, sponsored by Ford and inducted into Beta Gamma Sigma National Honor Society. I have a background in Economics and Computer Science Engineering from the University of Michigan Ann Arbor College of Engineering and College of LS&A, earning Magna Cum Laude grades. I aim to contribute unique value to any team and have improved my coding skills through engineering classes, hackathons, and personal projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-[62.5%]">
      <link rel="icon" href="/assets/image.png" />
      <body className="bg-bgColor text-textColor">{children}</body>
    </html>
  );
}
