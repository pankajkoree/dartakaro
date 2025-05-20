import "./globals.css";

export const metadata = {
  title: "darta karo",
  description: "a website for registration process",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
