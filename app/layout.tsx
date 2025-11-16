import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaslight - Premium Sativa Strain | CULTIMED by LIT FARM",
  description: "Illuminate your experience with Gaslight, a premium sativa strain by LIT FARM. 25% THC, energizing effects. Available at CULTIMED Dispensary.",
  keywords: ["cannabis", "gaslight", "lit farm", "cultimed", "dispensary", "sativa strain", "premium cannabis", "energizing"],
  openGraph: {
    title: "Gaslight - LIT FARM",
    description: "Experience the energizing sativa strain with 25% THC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}