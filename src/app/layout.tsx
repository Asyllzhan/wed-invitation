import "./globals.css";
import localFont from "next/font/local";

// Подключаем локальный шрифт
const kzCeremonious = localFont({
  src: [
    {
      path: "../../public/fonts/KZ_ceremonious-one.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-kz-ceremonious",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kk" className={kzCeremonious.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}