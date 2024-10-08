import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SideBar from "./components/SideBar";
import MainLayout from "./components/MainLayout";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex gap-2`}>
        <div className="fixed">
          {/*  */}
          <SideBar />
        </div>
        <div className="w-full flex justify-end">
          <MainLayout children={children} />
        </div>
      </body>
    </html>
  );
}
