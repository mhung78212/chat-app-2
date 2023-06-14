import AppProvider from "@/context/AppProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
    title: "Chat App",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <AppProvider>{children}</AppProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
