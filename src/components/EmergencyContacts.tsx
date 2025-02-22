/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from "react";
import { Plus, Trash2, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Contact {
  id: string;
  name: string;
  phone: string;
  relationship: string;
}

const EmergencyContacts = () => {
  const { toast } = useToast();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("emergencyContacts");
    if (saved) {
      setContacts(JSON.parse(saved));
    }
    setIsLoading(false);
  }, []);

  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    relationship: "",
  });

  const saveContacts = (updatedContacts: Contact[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("emergencyContacts", JSON.stringify(updatedContacts));
      setContacts(updatedContacts);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContact.name || !newContact.phone) {
      toast("Failed to add contect", "error")
      return;
    }

    const contact = {
      id: Date.now().toString(),
      ...newContact,
    };

    saveContacts([...contacts, contact]);
    setNewContact({ name: "", phone: "", relationship: "" });
    toast("Emergency contact added successfully", "success");
  };

  const handleDelete = (id: string) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    saveContacts(updatedContacts);
    toast("Emergency contact removed successfully", "success");
  };

  const handleSOS = async () => {
    if (contacts.length === 0) {
      toast("Failed to send emergency alert", "error");
      return;
    }

    const response = await fetch("/api/trigger-sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contacts }),
    });

    if (!response.ok) {
      toast("Failed to send SMS", "error");
    } else {
      contacts.forEach((contact) => {
        toast("Emergency alert sent to " + contact.name, "success");
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Emergency Contacts</h1>
        <p className="text-gray-600 mb-8">
          Add trusted contacts who can help you in case of emergency.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              value={newContact.name}
              onChange={(e) =>
                setNewContact({ ...newContact, name: e.target.value })
              }
              className="input-field"
              placeholder="Contact name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone *
            </label>
            <input
              type="tel"
              value={newContact.phone}
              onChange={(e) =>
                setNewContact({ ...newContact, phone: e.target.value })
              }
              className="input-field"
              placeholder="Phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Relationship
            </label>
            <input
              type="text"
              value={newContact.relationship}
              onChange={(e) =>
                setNewContact({ ...newContact, relationship: e.target.value })
              }
              className="input-field"
              placeholder="e.g., Friend, Family"
            />
          </div>
        </div>
        <button type="submit" className="button-primary">
          <Plus className="inline-block mr-2 h-4 w-4" />
          Add Contact
        </button>
      </form>

      <div className="space-y-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="card flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{contact.name}</h3>
              <p className="text-gray-600">{contact.phone}</p>
              {contact.relationship && (
                <p className="text-sm text-gray-500">{contact.relationship}</p>
              )}
            </div>
            <div className="flex space-x-2">
              <a
                href={`tel:${contact.phone}`}
                className="p-2 text-primary hover:text-primary-hover transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => handleDelete(contact.id)}
                className="p-2 text-danger hover:text-danger-hover transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}

        {contacts.length > 0 && (
          <button onClick={handleSOS} className="button-primary w-full">
            <Phone className="inline-block mr-2 h-5 w-5" />
            Send Emergency Alert to All Contacts
          </button>
        )}
      </div>
    </div>
  );
};

export default EmergencyContacts;