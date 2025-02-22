"use client"
import { Heart, Shield, Book, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20 hero-slide">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          Your Safe Space for Support and Healing
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
              <Phone className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 Helpline</h3>
                <p className="text-gray-600 mb-4">
                  Trained professionals are available 24/7 to provide confidential support.
                </p>
                <a href="tel:1800RESPECT" className="button-primary inline-block">
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-start space-x-4">
              <Phone className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">SMS Emergency Contacts</h3>
                <p className="text-gray-600 mb-4">
                  Send emergency SMS to my contacts
                </p>
                <a href="tel:1800RESPECT" className="button-primary inline-block">
                  Send SMS
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <div className="flex items-start space-x-4">
              <Phone className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 Helpline</h3>
                <p className="text-gray-600 mb-4">
                  Annonymous chat and interaction
                </p>
                <a href="tel:1800RESPECT" className="button-primary inline-block">
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-start space-x-4">
              <Phone className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">SMS Emergency Contacts</h3>
                <p className="text-gray-600 mb-4">
                  Learn about our offerings
                </p>
                <a href="tel:1800RESPECT" className="button-primary inline-block">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
