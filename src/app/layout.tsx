import "./globals.css";
import Header from "@/components/shared/Header/Header";
import {Footer} from "@/components/shared/Footer/Footer";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={'flex flex-col justify-between antialiased'}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
