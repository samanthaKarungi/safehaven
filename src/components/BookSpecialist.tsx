import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";
import { format } from "date-fns";

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  specialistType: string;
  additionalNotes: string;
}

const initialForm: BookingForm = {
  name: "",
  email: "",
  phone: "",
  preferredDate: "",
  specialistType: "counselor",
  additionalNotes: "",
}
;
const BookSpecialist = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<BookingForm>(initialForm);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the data to a backend
    console.log("Booking submitted:", form);
    
    toast("Appoinment request submitted! You will be contacted soon for details", "success");
    
    setForm(initialForm);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Book a Specialist</h1>
        <p className="text-gray-600 mb-8">
          Connect with a qualified professional who can provide the support you need.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="card space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date *
            </label>
            <input
              type="date"
              name="preferredDate"
              value={form.preferredDate}
              onChange={handleChange}
              required
              min={format(new Date(), 'yyyy-MM-dd')}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type of Specialist *
            </label>
            <select
              name="specialistType"
              value={form.specialistType}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="counselor">Counselor</option>
              <option value="psychologist">Psychologist</option>
              <option value="social-worker">Social Worker</option>
              <option value="legal-advisor">Legal Advisor</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Notes
          </label>
          <textarea
            name="additionalNotes"
            value={form.additionalNotes}
            onChange={handleChange}
            className="input-field min-h-[100px]"
            placeholder="Any specific concerns or requirements..."
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="button-primary">
            <Calendar className="inline-block mr-2 h-4 w-4" />
            Request Appointment
          </button>
        </div>
      </form>
      <div className="card bg-secondary/50">
        <h3 className="text-lg font-semibold mb-2">Important Note</h3>
        <p className="text-gray-600">
          All communications are confidential. After submitting your request, 
          a specialist will contact you within 24 hours to confirm your appointment 
          and discuss any specific needs.
        </p>
      </div>
    </div>
  );
};
export default BookSpecialist;