import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Heart, Mail, Calendar, Weight, Palette } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AvailablePuppies() {
  const puppies = [
    {
      id: 1,
      name: "Bella",
      image: "https://images.unsplash.com/photo-1680650715044-8391ccc93584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWx0ZXNlJTIwcHVwcHklMjB3aGl0ZSUyMGZsdWZmeXxlbnwxfHx8fDE3NzE1NDkxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      age: "10 weeks",
      weight: "2.5 lbs",
      color: "Pure White",
      description: "Sweet and playful, Bella loves cuddles and is great with children. She has a gentle personality and beautiful coat.",
      status: "Available"
    },
    {
      id: 2,
      name: "Charlie",
      image: "https://images.unsplash.com/photo-1680650666378-d6d7b5e94d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWx0ZXNlJTIwZG9nJTIwcG9ydHJhaXQlMjBjdXRlfGVufDF8fHx8MTc3MTU0OTE0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      age: "12 weeks",
      weight: "3 lbs",
      color: "Pure White",
      description: "Energetic and curious, Charlie is always ready for adventure. He's intelligent and learns quickly.",
      status: "Available"
    },
    {
      id: 3,
      name: "Daisy",
      image: "https://images.unsplash.com/photo-1636890877393-38a387c32098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMHdoaXRlJTIwcHVwcHklMjBwbGF5aW5nfGVufDF8fHx8MTc3MTU0OTE0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      age: "9 weeks",
      weight: "2.2 lbs",
      color: "White",
      description: "Daisy is affectionate and loves to play. She's well-socialized and gets along wonderfully with other pets.",
      status: "Available"
    },
    {
      id: 4,
      name: "Max",
      image: "https://images.unsplash.com/photo-1713352419538-18a691b8fd7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWx0ZXNlJTIwcHVwcHklMjBmYW1pbHl8ZW58MXx8fHwxNzcxNTQ5MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      age: "11 weeks",
      weight: "2.8 lbs",
      color: "Pure White",
      description: "Max is confident and friendly with a wonderful temperament. He comes from champion bloodlines.",
      status: "Available"
    },
    {
      id: 5,
      name: "Luna",
      image: "https://images.unsplash.com/photo-1664993478752-964a2dd0a9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGZsdWZmeSUyMGRvZyUyMGhvbWV8ZW58MXx8fHwxNzcxNTQ5MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      age: "8 weeks",
      weight: "2 lbs",
      color: "White",
      description: "Luna is calm and gentle, perfect for families looking for a relaxed companion. She's incredibly sweet.",
      status: "Available"
    },
    {
      id: 6,
      name: "Rocky",
      image: "https://images.unsplash.com/photo-1688990397318-8f24356eef5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdoaXRlJTIwcHVwcHklMjBvdXRkb29yfGVufDF8fHx8MTc3MTU0OTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      age: "10 weeks",
      weight: "2.6 lbs",
      color: "Pure White",
      description: "Rocky is playful and social, always ready to make new friends. He has a wonderful outgoing personality.",
      status: "Available"
    }
  ];

  const handleInquiry = (puppyName: string) => {
    const subject = encodeURIComponent(`Inquiry about ${puppyName}`);
    const body = encodeURIComponent(`Hello,\n\nI am interested in learning more about ${puppyName} and the adoption process.\n\nThank you!`);
    window.location.href = `mailto:marryanns226@gmail.com.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="puppies" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-orange-950 mb-4">
            Available Maltese Puppies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our adorable Maltese puppies looking for their forever homes. Each puppy is health-checked, vaccinated, and comes with a health guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {puppies.map((puppy) => (
            <Card key={puppy.id} className="overflow-hidden hover:shadow-xl transition-shadow bg-white border-2 border-orange-100">
              <CardHeader className="p-0">
                <div className="relative">
                  <ImageWithFallback 
                    src={puppy.image}
                    alt={puppy.name}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600">
                    {puppy.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-2xl font-serif text-orange-900 mb-2">
                  {puppy.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {puppy.description}
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>{puppy.age} old</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Weight className="w-4 h-4 text-orange-500" />
                    <span>{puppy.weight}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Palette className="w-4 h-4 text-orange-500" />
                    <span>{puppy.color}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button 
                  onClick={() => handleInquiry(puppy.name)}
                  className="flex-1 bg-orange-500 hover:bg-orange-600"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Inquire
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-white rounded-xl shadow-md max-w-2xl mx-auto">
          <p className="text-gray-700 mb-4">
            <strong>New puppies arrive regularly!</strong> If you don't see the perfect match today, contact us to be notified about upcoming litters.
          </p>
          <Button 
            onClick={() => {
              const subject = encodeURIComponent('Notification Request for Future Litters');
              window.location.href = `mailto:info@marryannpuppies.com?subject=${subject}`;
            }}
            className="bg-orange-500 hover:bg-orange-600"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get Notified
          </Button>
        </div>
      </div>
    </section>
  );
}
