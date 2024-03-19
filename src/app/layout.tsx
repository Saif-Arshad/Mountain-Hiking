import type { Metadata } from "next";
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

export const metadata: Metadata = {
  title: "Mountain Climing - Guide and more",
  description: "We are an agency responsible for tours and hiking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header/>
      <body >{children}</body>
      <Footer/>
    </html>
  );
}
