import "./globals.css";

export const metadata = {
  title: "Roshni Kushwaha | Full Stack Developer",
  description: "MERN Stack & Next.js Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}