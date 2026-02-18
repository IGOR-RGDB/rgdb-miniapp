export const metadata = {
  title: "rgdb-miniapp",
  description: "RGDB miniapp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
