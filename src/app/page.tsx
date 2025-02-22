"use client"
import { Heart, Shield, Book, MessageCircle, Bell, MessageSquare, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const handleVoiceCall = async () => {
    try {
      const contacts = JSON.parse(localStorage.getItem("emergencyContacts") || "[]");
      
      if (contacts.length === 0) {
        toast("Please add emergency contacts first", "error");
        return;
      }

      const response = await fetch("/api/trigger-voice-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        toast("Failed to call contact", "error");
      }

      toast("Emergency voice calls initiated. Hang in there!", "success");
    } catch (error) {
      console.error("Voice call error:", error);
      toast("Failed to make emergency calls", "error");
    }
  };

  const handleSendSMS = async () => {
    try {
      // Add SMS sending logic here
    } catch (error) {
      console.error("SMS sending error:", error);
      toast("Failed to send SMS", "error");
    }
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20 hero-slide">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          A Woman&apos;s Safe Space for Support
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          A confidential platform providing support, resources, and connection to essential services for survivors of gender-based violence.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#resources" className="button-primary">
            Get Help Now
          </a>
          <a href="/emergency-contacts" className="button-secondary">
            Set Up Emergency Contacts
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-fade">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Can Help</h2>
          <p className="text-gray-600">Access the support and resources you need, when you need them.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Immediate Support</h3>
            <p className="text-gray-600">
              Quick access to emergency services and trusted contacts when you need them most.
            </p>
          </div>

          <div className="card">
            <Book className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Resources & Education</h3>
            <p className="text-gray-600">
              Learn about your rights and access helpful information for your journey.
            </p>
          </div>

          <div className="card">
            <Heart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">
              Connect with support services and organizations that can help.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="section-fade">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources</h2>
          <p className="text-gray-600">Access these resources for immediate support.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-4">
          <div className="card">
            <div className="flex items-start space-x-4">
              <Bell className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Voice alert emergency contacts</h3>
                <p className="text-gray-600 mb-4">
                  Send voice alert to emergency contacts
                </p>
                <button 
                  onClick={handleVoiceCall}
                  className="button-primary inline-block"
                >
                  Call Now
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-start space-x-4">
              <MessageSquare className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">SMS Emergency Contacts</h3>
                <p className="text-gray-600 mb-4">
                  Send emergency SMS to my contacts
                </p>
                <button 
                  onClick={handleSendSMS}
                  className="button-primary inline-block"
                >
                  Send SMS
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <div className="flex items-start space-x-4">
              <MessageCircle className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Anonymous chat</h3>
                <p className="text-gray-600 mb-4">
                  Anonymous chat and interaction
                </p>
                <a href="tel:1800RESPECT" className="button-primary inline-block">
                  Chat
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-start space-x-4">
              <Calendar className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Get specialist support</h3>
                <p className="text-gray-600 mb-4">
                  Book a one-on-one session with seasoned experts
                </p>
                <a href="/contact-specialist" className="button-primary inline-block">
                  Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
