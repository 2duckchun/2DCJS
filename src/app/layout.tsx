import "normalize.css";
import "./globals.scss";
import style from "./layout.module.scss";
import { font_M_PLUS_1 } from "@/fonts/fonts";
import Header from "./(rootLayout)/Header";
import useInitTheme from "./_serverHooks/getInitTheme";

export const metadata = {
  title: "2DCJS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useInitTheme();

  return (
    <html lang="ko" data-theme={theme.value}>
      <body className={`${font_M_PLUS_1.className}`}>
        <Header currentTheme={theme.value} />
        <div className={`${style.page} page`}>{children}</div>
      </body>
    </html>
  );
}
