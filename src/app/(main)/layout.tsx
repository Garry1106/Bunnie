
import "../globals.css";
import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/HomePage/Footer";
import { FormProvider } from "@/context/FormContext";


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
    <div>
      <FormProvider>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </FormProvider>
    </div>
  );
}
