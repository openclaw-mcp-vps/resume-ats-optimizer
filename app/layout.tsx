import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume ATS Optimizer – Beat the Bots, Land the Interview",
  description: "AI-powered resume analysis that compares your resume against job descriptions and gives actionable suggestions to pass Applicant Tracking Systems."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1ffab7af-4e4c-4d4b-8667-c29609f38210"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
