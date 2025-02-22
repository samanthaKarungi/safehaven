"use client";

import EmergencyContacts from "@/components/EmergencyContacts";

export default function EmergencyContactsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Emergency Contacts</h1>
      <EmergencyContacts />
    </div>
  );
}