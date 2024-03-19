import type { Metadata } from "next";
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

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
