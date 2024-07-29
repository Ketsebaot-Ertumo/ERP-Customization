import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "etk.com",
  description: "This management system for HR & Payroll, Accounting & Finance, and including others.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          {/* <div className="flex flex-col w-full ml-44"> */}
          <div className="flex flex-col w-full">
            <Header />
            <div className="p-4 bg-gray-100 dark:bg-gray-700 dark:text-white">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
