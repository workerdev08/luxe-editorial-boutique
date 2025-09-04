import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock, Users, Phone, Mail } from "lucide-react";
import { format } from "date-fns";

const Reservations = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    time: "",
    specialRequests: ""
  });

  const timeSlots = [
    "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", 
    "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Reservation submitted:", { ...formData, date });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-restaurant-burgundy text-restaurant-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-script font-bold mb-6">
            Reservations
          </h1>
          <p className="text-xl text-restaurant-cream/90 font-serif">
            Secure your table for an exceptional dining experience
          </p>
        </div>
      </section>

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <div className="bg-restaurant-cream border border-restaurant-gold/20 rounded-lg p-8">
              <h2 className="text-3xl font-script font-bold text-restaurant-burgundy mb-8">
                Reserve Your Table
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-serif text-restaurant-burgundy">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="font-serif text-restaurant-burgundy">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="font-serif text-restaurant-burgundy">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="guests" className="font-serif text-restaurant-burgundy">
                      Number of Guests *
                    </Label>
                    <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-serif text-restaurant-burgundy">
                      Preferred Date *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left mt-1"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-restaurant-cream border-restaurant-gold/20">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label htmlFor="time" className="font-serif text-restaurant-burgundy">
                      Preferred Time *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map(time => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="requests" className="font-serif text-restaurant-burgundy">
                    Special Requests or Dietary Restrictions
                  </Label>
                  <Textarea
                    id="requests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    className="mt-1"
                    rows={4}
                    placeholder="Anniversary celebration, dietary restrictions, accessibility needs..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="elegant" 
                  size="lg" 
                  className="w-full font-serif"
                >
                  Request Reservation
                </Button>
                
                <p className="text-sm text-restaurant-burgundy/60 font-serif text-center">
                  * We will confirm your reservation within 24 hours
                </p>
              </form>
            </div>

            {/* Contact Info & Hours */}
            <div className="space-y-8">
              <div className="bg-restaurant-burgundy text-restaurant-cream rounded-lg p-8">
                <h3 className="text-2xl font-script font-bold mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-restaurant-gold mr-3" />
                    <div>
                      <p className="font-serif">Reservations</p>
                      <p className="text-restaurant-cream/80 font-serif">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-restaurant-gold mr-3" />
                    <div>
                      <p className="font-serif">Email</p>
                      <p className="text-restaurant-cream/80 font-serif">reservations@lumiere.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-restaurant-gold mr-3" />
                    <div>
                      <p className="font-serif">Dinner Service</p>
                      <p className="text-restaurant-cream/80 font-serif">Tuesday - Saturday</p>
                      <p className="text-restaurant-cream/80 font-serif">5:30 PM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-restaurant-cream border border-restaurant-gold/20 rounded-lg p-8">
                <h3 className="text-2xl font-script font-bold text-restaurant-burgundy mb-6">
                  Reservation Policies
                </h3>
                
                <div className="space-y-4 text-restaurant-burgundy/80 font-serif">
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-restaurant-gold mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-restaurant-burgundy">Party Size</p>
                      <p>Maximum 8 guests per reservation. For larger parties, please call directly.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-restaurant-gold mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-restaurant-burgundy">Cancellation</p>
                      <p>Please provide 24-hour notice for cancellations or modifications.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CalendarIcon className="h-5 w-5 text-restaurant-gold mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-restaurant-burgundy">Advance Booking</p>
                      <p>Reservations accepted up to 60 days in advance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;