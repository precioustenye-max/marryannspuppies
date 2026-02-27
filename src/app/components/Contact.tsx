import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('New Inquiry from Marry Ann Puppies Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:marryanns226@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-orange-950 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our puppies or the adoption process? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="border-2 border-orange-100">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible, usually within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="border-orange-200 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="border-orange-200 focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us which puppy you're interested in or any questions you have..."
                      rows={6}
                      className="border-orange-200 focus:border-orange-500"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-6">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:marryanns226@gmail.com"
                    className="flex items-start gap-3 text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm">marryanns226@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm">Serving families nationwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-sm">Mon-Sat: 9AM - 6PM</p>
                      <p className="text-sm">Sunday: By appointment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
                <p className="text-sm text-orange-50 mb-4">
                  We typically respond to all inquiries within 24 hours through email.
                </p>
                <Button 
                  onClick={() => window.location.href = 'mailto:marryanns226@gmail.com'}
                  className="w-full bg-white text-orange-600 hover:bg-orange-50"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
