"use client";

import "./globals.css";
import Link from "next/link";
import { PhoneCall, Home, Users } from "lucide-react";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
      <Toaster />
        <div className="min-h-screen">
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-semibold text-primary">SafeHaven</span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="nav-link">
                  <Home className="inline-block mr-2 h-4 w-4" />
                  Home
                </Link>
                <Link href="/emergency-contacts" className="nav-link">
                  <Users className="inline-block mr-2 h-4 w-4" />
                  Emergency Contacts
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          {children}
        </main>

        <Link href="/emergency-contacts" className="sos-button">
          <PhoneCall className="h-8 w-8" />
        </Link>
      </div>
      </body>
    </html>
  );
}
