import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "./globals.css";
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
                    <main >{children}</main>
                    <ToastContainer />
                </body>
            </html>
        </ClerkProvider>
    );
}