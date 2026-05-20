import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dineshkumar K J | Full-Stack Developer & ML Enthusiast",
  description:
    "Portfolio of Dineshkumar K J — B.Tech IT student, full-stack developer, and ML enthusiast. Explore my projects, skills, and get in touch.",
  keywords: [
    "Dineshkumar K J",
    "Portfolio",
    "Full Stack Developer",
    "Machine Learning",
    "React",
    "Next.js",
    "B.Tech IT",
  ],
  authors: [{ name: "Dineshkumar K J" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="noise">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
