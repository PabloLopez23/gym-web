import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MATOS GYM | Gimnasio y entrenamiento",
  description: "MATOS GYM en Avenida Pujol 1741, Saladas, Corrientes"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
