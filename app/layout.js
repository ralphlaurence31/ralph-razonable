
import localFont from "next/font/local";
import NavBar from "@/app/components/NavBar"
import Footer from "./components/Footer";
import "./globals.css";
import Provider from "./Provider";
import {ThemeProvider as NextThemesProvider} from "next-themes";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "RLSR | Portfolio",
  description: "Created by Ralph Razonable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
          <Provider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
              <NavBar></NavBar>
                <main className="my-20">{children}</main>
              <Footer></Footer>
            </NextThemesProvider>
          </Provider>
        
      </body>
    </html>
  );
}
