import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Aayu",
  description: "AI-powered legal practice platform providing expert consultancy and support for mental health law, disability rights, and workplace accommodations. Get personalized guidance and intelligent solutions for your legal matters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
    <head>
    {/* Add Google Fonts link for Poppins */}
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
  </head>

      <body
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
