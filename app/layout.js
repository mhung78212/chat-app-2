"use client";
import AppProvider from "@/context/AppProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

export const metadata = {
    title: "Chat App",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <title>Chat App</title>
            </Head>
            <body>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
}
