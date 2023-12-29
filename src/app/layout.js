import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <h1>NavBar</h1>
        </nav>
        {children}
        <footer>
        <h1>Footer</h1>
      </footer>
      </body>
      
    </html>
  );
}
