import "./globals.css";
import Header from "@/components/shared/Header/Header";
import {Footer} from "@/components/shared/Footer/Footer";
import {poppins} from "@/fonts";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`flex justify-center ${poppins.className}`}>
      <head>
        <link rel="icon" href="/icons/author.svg"/>
        <title>UzChess</title>
        <meta name={'description'} content={'Banzaaaaay!'}/>
        <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'}/>
      </head>
      <body className={'flex flex-col justify-between items-center antialiased'}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
