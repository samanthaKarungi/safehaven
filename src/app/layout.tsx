"use client";

import "./globals.css";
import Link from "next/link";
import { PhoneCall, Home, Users } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useToast } from "@/hooks/use-toast";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { toast } = useToast();

  const handleEmergencyCall = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/trigger-voice-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        toast("Failed to initiate emergency call", "error");
      }

      toast("Emergency voice calls initiated. Help is on the way!", "success");
    } catch (error) {
      toast("Failed to make emergency calls", "error");
    }
  };

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

        <button onClick={handleEmergencyCall} className="sos-button">
          <PhoneCall className="h-8 w-8" />
        </button>
      </div>
      </body>
    </html>
  );
}
