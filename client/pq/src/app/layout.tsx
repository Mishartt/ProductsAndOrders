import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto} from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import NavigationMenu from "@/Components/NavigationMenu/NavigationMenu";
import ReduxProvider from "@/store/ReduxProvider";


const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
       <ReduxProvider>
          <Header/>
          <NavigationMenu/>        
          {children}
       </ReduxProvider>
      </body>
    </html>
  );
}