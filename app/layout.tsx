import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Common/Navbar/ResponsiveNav";
import Footer from "@/components/Common/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import { Toaster } from 'react-hot-toast'


const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Touring App",
  description: "Touring App",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${font.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ResponsiveNav />
        {children}
        <Toaster position="top-center" />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
