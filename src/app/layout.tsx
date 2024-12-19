import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <nav className="bg-gray-800">
            <ul className="flex space-x-4 p-4">
              <li>
                <Link
                  href="/"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/user"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                >
                  User page
                </Link>
              </li>
              <li>
                <Link
                  href="/user/settings"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                >
                  User settings page
                </Link>
              </li>
              <li>
                <Link
                  href="/api/auth/login"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/api/auth/logout"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
