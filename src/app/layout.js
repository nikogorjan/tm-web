import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./Smooth/SmoothScroll";
import ClientProvider from './ClientProvider'; // Import the ClientProvider


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tjaša & Marsel | Fitness & Lifestyle Coaching",
  description: "Sva Tjaša in Marsel, osebna trenerja, ki nudiva individualne in spletne treninge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>

          {/*<SmoothScroll>
            
          </SmoothScroll>*/}
          {children}
          </ClientProvider>

      </body>
    </html>
  );
}
