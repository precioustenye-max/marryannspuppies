import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "California",
      rating: 5,
      text: "We adopted Bella from Marry Ann Puppies and couldn't be happier! She's healthy, well-socialized, and has the sweetest temperament. The entire process was professional and caring.",
      date: "January 2026"
    },
    {
      name: "Michael Chen",
      location: "Texas",
      rating: 5,
      text: "Outstanding experience! Mary Ann is knowledgeable, responsive, and truly cares about her puppies. Our little Charlie is perfect and came with everything we needed to get started.",
      date: "December 2025"
    },
    {
      name: "Emily Rodriguez",
      location: "Florida",
      rating: 5,
      text: "I've been looking for a Maltese for years, and Marry Ann Puppies exceeded all expectations. Daisy is beautiful, healthy, and has brought so much joy to our family. Highly recommend!",
      date: "November 2025"
    },
    {
      name: "David Thompson",
      location: "New York",
      rating: 5,
      text: "Professional, caring, and transparent throughout the entire adoption process. Our Max is thriving and we appreciate the ongoing support from Mary Ann. Thank you!",
      date: "October 2025"
    },
    {
      name: "Jennifer Williams",
      location: "Georgia",
      rating: 5,
      text: "Luna is absolutely perfect! Mary Ann's dedication to breeding healthy, happy puppies is evident. The communication was excellent and we felt supported every step of the way.",
      date: "September 2025"
    },
    {
      name: "Robert Martinez",
      location: "Arizona",
      rating: 5,
      text: "Best decision ever! Rocky has been a wonderful addition to our family. The health guarantee and support provided by Marry Ann Puppies gives us peace of mind. 5 stars!",
      date: "August 2025"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-orange-950 mb-4">
            Happy Families
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy adopters have to say about their experience with Marry Ann Puppies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-shadow border-2 border-orange-100">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-orange-300 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-orange-100 pt-4">
                  <p className="font-semibold text-orange-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-xl shadow-md p-8 border-2 border-orange-100">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-8 h-8 fill-orange-500 text-orange-500" />
              <span className="text-4xl font-bold text-orange-900">5.0</span>
            </div>
            <p className="text-gray-600">Based on 50+ verified reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
