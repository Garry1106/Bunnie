
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/HomePage/Footer";
import { FormProvider } from "@/context/FormContext";
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: "Bunnie - Your Emotional Support Partner",
  description:
    "Connect with AI companions who understand and support your emotional journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <meta name="apple-mobile-web-app-title" content="Bunnie" />
        <body>
          <FormProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
            <ToastContainer />
          </FormProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
